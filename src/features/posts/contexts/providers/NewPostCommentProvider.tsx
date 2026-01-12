import { AssetKey, type CreatePostCommentInput, type PostCommentPreviewFragment, type PostPreviewFragment } from '@/generated/graphql'
import { useToastMessage } from '@/hooks/useToastMessage'
import type { Nullable } from '@/utils/util'
import { useCreatePostComment } from '../../hooks/useCreatePostComment'
import { useAssetUploadManager } from '@/features/assets'
import { CreatePostCommentSchema, MAX_POST_COMMENT_ASSETS } from '../../utils/validation'
import React from 'react'
import { truncate } from 'lodash'
import { useDebounce } from '@/hooks/useDebounce'
import type { Form } from '@base-ui/react'
import { parseSchema } from '@/utils/validation'
import { NewPostCommentContext } from '../NewPostCommentContext'

export interface NewPostCommentProviderProps {
  post: PostPreviewFragment
  parent?: Nullable<PostCommentPreviewFragment>
  children?: React.ReactNode
}

export const NewPostCommentProvider = (props: NewPostCommentProviderProps) => {
  const { post, parent, children } = props

  const { toastError } = useToastMessage()
  const { createPostComment } = useCreatePostComment()

  const {
    tasks: uploadTasks,
    uploadFile,
    deleteTask,
    reset: resetTasks
  } = useAssetUploadManager({ maxUploads: MAX_POST_COMMENT_ASSETS, deleteAfterError: true })

  const tasksRef = React.useRef(uploadTasks)
  const hasSubmitted = React.useRef(false)
  const content = React.useRef<Nullable<string>>(undefined)

  const [fragranceId, setFragranceId] = React.useState<Nullable<string>>(null)
  const [uploadErrors, setUploadErrors] = React.useState<string[]>([])

  const [isActive, setIsActive] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [formErrors, setFormErrors] = React.useState({})

  const isUploading = uploadTasks.length > 0 && uploadTasks.some(task => task.status === 'uploading')

  const resetState = () => {
    content.current = null
    resetTasks()

    setFragranceId(null)
    setUploadErrors([])
    setFormErrors({})
    setIsLoading(false)

    hasSubmitted.current = false
  }

  const handleOnIsActiveChange = (isActive: boolean) => {
    setIsActive(isActive)
  }

  const handleOnUpdateContent = (newContent: Nullable<string>) => {
    content.current = newContent ?? undefined
  }

  const handleOnFragranceIdChange = (newFragranceId: Nullable<string>) => {
    setFragranceId(newFragranceId)
  }

  const handleOnUploadAsset = (file: File) => {
    setIsActive(true)

    return uploadFile(file, AssetKey.PostCommentAssets)
      .orTee(errorInfo => {
        const errStr = `Failed to upload ${truncate(file.name, { length: 20 })}: ${errorInfo.message}`
        setUploadErrors(prev => [...prev, errStr])

        setTimeout(() => {
          setUploadErrors(prev => prev.filter(err => err !== errStr))
        }, 10000)
      })
  }

  const handleOnDeleteAsset = (id: string) => {
    deleteTask(id)
  }

  const handleOnCreatePostComment = useDebounce(
    async (input: CreatePostCommentInput) => {
      const result = await createPostComment(input)

      setIsLoading(false)

      if (result.isErr()) {
        toastError('')
        return
      }

      hasSubmitted.current = true
      resetState()
    }
  )

  const handleOnSubmit = (formData: Form.Values) => {
    const inputAssets = uploadTasks
      .map((task, index) => ({
        assetId: task.assetId,
        displayOrder: index
      }))

    const input = {
      ...formData,
      assets: inputAssets,
      content: content.current
    }

    const parsed = parseSchema(CreatePostCommentSchema, input)
    setFormErrors(parsed.fieldErrors)

    if (!parsed.success) return

    setIsLoading(true)
    handleOnCreatePostComment(parsed.data)
  }

  React.useEffect(
    () => {
      tasksRef.current = uploadTasks
    },
    [uploadTasks]
  )

  React.useEffect(() => {
    return () => {
      if (!hasSubmitted.current && tasksRef.current.length > 0) {
        resetTasks(true)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <NewPostCommentContext.Provider
      value={{
        post,
        parent,

        fragranceId,

        uploadTasks,
        uploadErrors,
        formErrors,

        isActive,
        isLoading,
        isUploading,

        onIsActiveChange: handleOnIsActiveChange,
        onFragranceIdChange: handleOnFragranceIdChange,
        onUpdateContent: handleOnUpdateContent,

        onUploadAsset: handleOnUploadAsset,
        onDeleteAsset: handleOnDeleteAsset,

        onSubmit: handleOnSubmit
      }}
    >
      {children}
    </NewPostCommentContext.Provider>
  )
}