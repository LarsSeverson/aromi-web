import React from 'react'
import { NewPostContext } from '../NewPostContext'
import { AssetKey, type CreatePostInput, PostType } from '@/generated/graphql'
import { useAssetUploadManager } from '@/features/assets'
import { truncate } from 'lodash'
import { CreatePostSchema, MAX_POST_ASSETS } from '../../utils/validation'
import { useDebounce } from '@/hooks/useDebounce'
import type { Form } from '@base-ui/react'
import { parseSchema } from '@/utils/validation'
import { useCreatePost } from '../../hooks/useCreatePost'
import { useToastMessage } from '@/hooks/useToastMessage'
import { useNavigate } from '@tanstack/react-router'
import type { Nullable } from '@/utils/util'

export interface NewPostProviderProps {
  children: React.ReactNode
}

export const NewPostProvider = (props: NewPostProviderProps) => {
  const { children } = props

  const navigate = useNavigate()
  const { toastError } = useToastMessage()
  const { createPost } = useCreatePost()

  const {
    tasks: uploadTasks,
    uploadFile,
    deleteTask,
    moveTask
  } = useAssetUploadManager({ maxUploads: MAX_POST_ASSETS, deleteAfterError: true })

  const tasksRef = React.useRef(uploadTasks)
  const hasSubmitted = React.useRef(false)
  const content = React.useRef<Nullable<string>>(undefined)

  const [type, setType] = React.useState<PostType>(PostType.Text)
  const [fragranceId, setFragranceId] = React.useState<string | null>(null)
  const [uploadErrors, setUploadErrors] = React.useState<string[]>([])

  const [isLoading, setIsLoading] = React.useState(false)
  const [formErrors, setFormErrors] = React.useState({})

  const isUploading = uploadTasks.length > 0 && uploadTasks.some(task => task.status === 'uploading')

  const handleOnTypeChange = (newType: PostType) => {
    setType(newType)
  }

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

  const handleOnCreatePost = useDebounce(
    async (input: CreatePostInput) => {
      const result = await createPost(input)

      setIsLoading(false)

      result.match(
        _data => {
          hasSubmitted.current = true
          navigate({ to: '/posts' })
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

    const parsed = parseSchema(CreatePostSchema, input)
    setFormErrors(parsed.fieldErrors)

    if (!parsed.success) {
      return
    }

    setIsLoading(true)
    handleOnCreatePost(parsed.data)
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
          deleteTask(task.id)
        })
      }
    }
  }, [deleteTask])

  return (
    <NewPostContext.Provider
      value={{
        type,
        fragranceId,

        uploadTasks,
        uploadErrors,
        formErrors,

        isLoading,
        isUploading,

        onTypeChange: handleOnTypeChange,

        onFragranceIdChange: handleOnFragranceIdChange,

        onUploadAsset: handleOnUploadAsset,
        onDeleteAsset: handleOnDeleteAsset,
        onMoveAsset: handleOnMoveAsset,

        onUpdateContent: handleOnUpdateContent,

        onSubmit: handleOnSubmit
      }}
    >
      {children}
    </NewPostContext.Provider>
  )
}