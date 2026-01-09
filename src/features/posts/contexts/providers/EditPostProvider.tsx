import React from 'react'
import { AssetKey, type PostPreviewFragment, type UpdatePostInput } from '@/generated/graphql'
import { type UploadTask, useAssetUploadManager } from '@/features/assets'
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
import { okAsync } from 'neverthrow'
import type { EditPostAsset } from '../../types'

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
    maxUploads: MAX_POST_ASSETS - post.assets.length,
    deleteAfterError: true
  })

  const tasksRef = React.useRef<UploadTask[]>(uploadTasks)
  const hasSubmitted = React.useRef(false)
  const content = React.useRef<Nullable<string>>(JSON.stringify(post.content))

  const [fragranceId, setFragranceId] = React.useState<string | null>(post.fragrance?.id ?? null)
  const [uploadErrors, setUploadErrors] = React.useState<string[]>([])
  const [isLoading, setIsLoading] = React.useState(false)
  const [formErrors, setFormErrors] = React.useState({})

  const [assets, setAssets] = React.useState<EditPostAsset[]>(
    [...post.assets]
      .sort((a, b) => a.displayOrder - b.displayOrder)
      .map(postAsset => ({
        clientId: postAsset.id,
        displayOrder: postAsset.displayOrder,
        assetId: postAsset.asset.id,
        postAsset: postAsset.asset,
        upload: null
      }))
  )

  const isUploading = uploadTasks.some(task => task.status === 'uploading')

  const handleOnFragranceIdChange = (id: string | null) => {
    setFragranceId(id)
  }

  const handleOnUploadAsset = (file: File) => {
    if (assets.length + uploadTasks.length >= MAX_POST_ASSETS) {
      return okAsync(undefined)
    }

    return uploadFile(file, AssetKey.PostAssets)
      .orTee(errorInfo => {
        const errStr = `Failed to upload ${truncate(file.name, { length: 20 })}: ${errorInfo.message}`
        setUploadErrors(prev => [...prev, errStr])

        setTimeout(() => {
          setUploadErrors(prev => prev.filter(e => e !== errStr))
        }, 10000)
      })
      .andTee(({ data, task }) => {
        setAssets(prev => [
          ...prev,
          {
            clientId: task.id,
            displayOrder: prev.length,
            assetId: data.assetId,
            postAsset: null,
            upload: {
              file,
              progress: task.progress,
              status: task.status,
              taskId: task.id
            }
          }
        ])
      })
  }

  const handleOnDeleteAsset = (clientId: string) => {
    setAssets(prev => {
      const asset = prev.find(a => a.clientId === clientId)

      if (asset?.upload != null) {
        deleteTask(asset.upload.taskId)
      }

      return prev
        .filter(a => a.clientId !== clientId)
        .map((a, index) => ({
          ...a,
          displayOrder: index
        }))
    })
  }

  const handleOnMoveAsset = (fromIndex: number, toIndex: number) => {
    setAssets(prev => {
      const next = [...prev]
      const [moved] = next.splice(fromIndex, 1)
      next.splice(toIndex, 0, moved)

      return next.map((asset, index) => ({
        ...asset,
        displayOrder: index
      }))
    })

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
        () => {
          hasSubmitted.current = true
          toastMessage('Your post has been updated')
          navigate({
            to: '/community/posts/$id',
            params: { id: post.id },
            resetScroll: true
          })
        },
        () => {
          toastError('')
        }
      )
    }
  )

  const handleOnSubmit = (formData: Form.Values) => {
    const inputAssets = assets.map(asset => ({
      id: asset.postAsset?.id ?? null,
      assetId: asset.assetId,
      displayOrder: asset.displayOrder
    }))

    const input = {
      ...formData,
      id: post.id,
      fragranceId,
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
          deleteTask(task.id)
        })
      }
    }
  }, [deleteTask])

  return (
    <EditPostContext.Provider
      value={{
        post,
        fragranceId,
        uploadTasks: assets,
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
