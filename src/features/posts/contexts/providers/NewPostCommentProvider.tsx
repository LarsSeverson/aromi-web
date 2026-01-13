import { AssetKey, type CreatePostCommentInput, type PostCommentPreviewFragment, type PostPreviewFragment } from '@/generated/graphql'
import { useToastMessage } from '@/hooks/useToastMessage'
import type { Nullable } from '@/utils/util'
import { useCreatePostComment } from '../../hooks/useCreatePostComment'
import { type FileRejection, useAssetUploadManager } from '@/features/assets'
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

  const [formKey, setFormKey] = React.useState(0)
  const [isActive, setIsActive] = React.useState(false)
  const [isFocused, setIsFocused] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  const [formErrors, setFormErrors] = React.useState({})
  const [uploadErrors, setUploadErrors] = React.useState<string[]>([])

  const isUploading = React.useMemo(
    () => uploadTasks.length > 0 && uploadTasks.some(task => task.status === 'uploading'),
    [uploadTasks]
  )

  const isSubmittable = React.useMemo(
    () => !isUploading && !isLoading,
    [isUploading, isLoading]
  )

  const resetState = () => {
    resetTasks()

    setUploadErrors([])
    setFormErrors({})
    setIsLoading(false)
    setIsActive(false)
    setIsFocused(false)
    setFormKey(prev => prev + 1)

    hasSubmitted.current = false
  }

  const handleOnIsActiveChange = (isActive: boolean) => {
    setIsActive(isActive)
  }

  const handleOnIsFocusedChange = (isFocused: boolean) => {
    setIsFocused(isFocused)
  }

  const handleOnUploadAsset = (file: File) => {
    setIsActive(true)

    return uploadFile(file, AssetKey.PostCommentAssets)
      .orTee(errorInfo => {
        const { message } = errorInfo
        handleOnAssetsRejected([{ file, errors: [message] }])
      })
  }

  const handleOnDeleteAsset = (id: string) => {
    deleteTask(id)
  }

  const handleOnAssetsRejected = (errors: FileRejection[]) => {
    const errorMessages = errors.map(error =>
      `Failed to upload ${truncate(error.file.name, { length: 20 })}: ${error.errors.at(0)}`
    )

    setUploadErrors(prev => [...prev, ...errorMessages])

    setTimeout(() => {
      setUploadErrors([])
    }, 10000)
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
      postId: post.id,
      assets: inputAssets
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

        uploadTasks,
        uploadErrors,
        formErrors,

        isActive,
        isFocused,
        isLoading,
        isUploading,
        isSubmittable,

        onIsActiveChange: handleOnIsActiveChange,
        onIsFocusedChange: handleOnIsFocusedChange,

        onUploadAsset: handleOnUploadAsset,
        onDeleteAsset: handleOnDeleteAsset,
        onAssetsRejected: handleOnAssetsRejected,

        onSubmit: handleOnSubmit
      }}
    >
      <React.Fragment
        key={formKey}
      >
        {children}
      </React.Fragment>
    </NewPostCommentContext.Provider>
  )
}