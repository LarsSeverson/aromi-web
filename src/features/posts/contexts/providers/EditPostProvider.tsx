import React from 'react'
import { AssetKey, type PostPreviewFragment, type UpdatePostInput } from '@/generated/graphql'
import { useAssetUploadManager } from '@/features/assets'
import { truncate } from 'lodash'
import { MAX_POST_ASSETS, UpdatePostSchema } from '../../utils/validation'
import { useDebounce } from '@/hooks/useDebounce'
import type { Form } from '@base-ui/react'
import { parseSchema } from '@/utils/validation'
import { useToastMessage } from '@/hooks/useToastMessage'
import { useNavigate } from '@tanstack/react-router'
import type { Nullable } from '@/utils/util'
import { useUpdatePost } from '../../hooks/useUpdatePost'
import { EditPostContext } from '../EditPostContext'

export interface EditPostProviderProps {
  post: PostPreviewFragment
  children: React.ReactNode
}

export const EditPostProvider = (props: EditPostProviderProps) => {
  const { post, children } = props

  const navigate = useNavigate()
  const { toastMessage, toastError } = useToastMessage()
  const { updatePost } = useUpdatePost()

  const {
    tasks: uploadTasks,
    uploadFile,
    deleteTask,
    moveTask
  } = useAssetUploadManager({
    assets: post.assets.map(a => a.asset),
    maxUploads: MAX_POST_ASSETS,
    deleteAfterError: true
  })

  const tasksRef = React.useRef(uploadTasks)
  const hasSubmitted = React.useRef(false)
  const content = React.useRef<Nullable<string>>(JSON.stringify(post.content))

  const [fragranceId, setFragranceId] = React.useState<string | null>(post.fragrance?.id ?? null)
  const [uploadErrors, setUploadErrors] = React.useState<string[]>([])

  const [isLoading, setIsLoading] = React.useState(false)
  const [formErrors, setFormErrors] = React.useState({})

  const isUploading = uploadTasks.length > 0 && uploadTasks.some(task => task.status === 'uploading')

  const handleOnFragranceIdChange = (id: string | null) => {
    setFragranceId(id)
  }

  const handleOnUploadAsset = (file: File) => {
    return uploadFile(file, AssetKey.PostAssets)
      .orTee(errorInfo => {
        const errStr = `Failed to upload ${truncate(file.name, { length: 20 })}: ${errorInfo.message}`
        setUploadErrors(prev => [...prev, errStr])

        setTimeout(() => {
          setUploadErrors(prev => prev.filter(e => e !== errStr))
        }, 10000)
      })
  }

  const handleOnDeleteAsset = (id: string) => {
    deleteTask(id)
  }

  const handleOnMoveAsset = (fromIndex: number, toIndex: number) => {
    moveTask(fromIndex, toIndex)
  }

  const handleOnUpdateContent = (newContent: Nullable<string>) => {
    content.current = newContent
  }

  const handleOnEditPost = useDebounce(
    async (input: UpdatePostInput) => {
      const result = await updatePost(input)

      setIsLoading(false)

      result.match(
        _data => {
          hasSubmitted.current = true

          toastMessage('Your post has been updated')

          navigate({
            to: '/community/posts/$id',
            params: { id: post.id },
            resetScroll: true
          })
        },
        _error => {
          toastError('')
        }
      )
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
      content: content.current,
      assets: inputAssets
    }

    const parsed = parseSchema(UpdatePostSchema, input)
    setFormErrors(parsed.fieldErrors)

    if (!parsed.success) {
      return
    }

    setIsLoading(true)
    handleOnEditPost(parsed.data)
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
        tasksRef.current.forEach(task => {
          if (task.status !== 'previous') {
            deleteTask(task.id)
          }
        })
      }
    }
  }, [deleteTask])

  return (
    <EditPostContext.Provider
      value={{
        post,

        fragranceId,

        uploadTasks,
        uploadErrors,
        formErrors,

        isLoading,
        isUploading,

        onFragranceIdChange: handleOnFragranceIdChange,

        onUploadAsset: handleOnUploadAsset,
        onDeleteAsset: handleOnDeleteAsset,
        onMoveAsset: handleOnMoveAsset,

        onUpdateContent: handleOnUpdateContent,

        onSubmit: handleOnSubmit
      }}
    >
      {children}
    </EditPostContext.Provider>
  )
}