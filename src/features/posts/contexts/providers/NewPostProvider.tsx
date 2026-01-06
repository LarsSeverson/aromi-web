import React from 'react'
import { NewPostContext } from '../NewPostContext'
import { AssetKey, type CreatePostInput, PostType } from '@/generated/graphql'
import { useAssetUploadManager } from '@/features/assets'
import type { NewPostAsset } from '../../types'
import { truncate } from 'lodash'
import { CreatePostSchema, MAX_POST_ASSETS } from '../../utils/validation'
import { useDebounce } from '@/hooks/useDebounce'
import type { Form } from '@base-ui/react'
import { parseSchema } from '@/utils/validation'
import { useCreatePost } from '../../hooks/useCreatePost'
import { useToastMessage } from '@/hooks/useToastMessage'
import { useNavigate } from '@tanstack/react-router'

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

  const hasSubmitted = React.useRef(false)
  const assets = React.useRef<NewPostAsset[]>([])

  const [type, setType] = React.useState<PostType>(PostType.Text)
  const [fragranceId, setFragranceId] = React.useState<string | null>(null)
  const [uploadErrors, setUploadErrors] = React.useState<string[]>([])

  const [isLoading, setIsLoading] = React.useState(false)
  const [formErrors, setFormErrors] = React.useState({})

  const handleOnTypeChange = (newType: PostType) => {
    setType(newType)
  }

  const handleOnFragranceIdChange = (id: string | null) => {
    setFragranceId(id)
  }

  const handleOnUploadAsset = (file: File) => {
    return uploadFile(file, AssetKey.PostAssets)
      .andTee(({ data, task }) => {
        if (assets.current.length >= MAX_POST_ASSETS) {
          assets.current.shift()
        }

        assets.current.push({
          taskId: task.id,
          assetId: data.assetId,
          displayOrder: assets.current.length
        })

        assets.current = assets.current.map(
          (asset, index) => ({
            ...asset,
            displayOrder: index
          })
        )
      })
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

    assets.current = assets.current
      .filter(a => a.taskId !== id)
      .map((asset, index) => ({
        ...asset,
        displayOrder: index
      }))
  }

  const handleOnMoveAsset = (fromIndex: number, toIndex: number) => {
    moveTask(fromIndex, toIndex)

    const assetToMove = assets.current.splice(fromIndex, 1)[0]
    assets.current.splice(toIndex, 0, assetToMove)

    assets.current = assets.current.map((asset, index) => ({
      ...asset,
      displayOrder: index
    }))
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
    const parsed = parseSchema(CreatePostSchema, formData)
    setFormErrors(parsed.fieldErrors)

    console.log(parsed)

    if (!parsed.success) {
      return
    }

    const inputAssets = assets
      .current
      .map(({ assetId, displayOrder }) => ({
        assetId,
        displayOrder
      }))

    const input = {
      ...parsed.data,
      assets: assets.current
    }

    setIsLoading(true)
    handleOnCreatePost(input)
  }

  React.useEffect(
    () => {
      return () => {
        const assetsLength = assets.current.length

        if (!hasSubmitted.current && assetsLength > 0) {
          assets.current.forEach(asset => {
            deleteTask(asset.taskId)
          })
        }
      }
    },
    [deleteTask]
  )

  return (
    <NewPostContext.Provider
      value={{
        type,
        fragranceId,

        uploadTasks,
        uploadErrors,
        formErrors,

        isLoading,

        onTypeChange: handleOnTypeChange,

        onFragranceIdChange: handleOnFragranceIdChange,

        onUploadAsset: handleOnUploadAsset,
        onDeleteAsset: handleOnDeleteAsset,
        onMoveAsset: handleOnMoveAsset,

        onSubmit: handleOnSubmit
      }}
    >
      {children}
    </NewPostContext.Provider>
  )
}