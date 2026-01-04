import React from 'react'
import { NewPostContext } from '../NewPostContext'
import { AssetKey, PostType } from '@/generated/graphql'
import { useAssetUploadManager } from '@/features/assets'
import type { NewPostAsset } from '../../types'
import { truncate } from 'lodash'
import { MAX_POST_ASSETS } from '../../utils/validation'

export interface NewPostProviderProps {
  children: React.ReactNode
}

export const NewPostProvider = (props: NewPostProviderProps) => {
  const { children } = props

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

  const handleOnCreatePost = () => {
    hasSubmitted.current = true
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

        onTypeChange: handleOnTypeChange,

        onFragranceIdChange: handleOnFragranceIdChange,

        onUploadAsset: handleOnUploadAsset,
        onDeleteAsset: handleOnDeleteAsset,
        onMoveAsset: handleOnMoveAsset,

        onCreatePost: handleOnCreatePost
      }}
    >
      {children}
    </NewPostContext.Provider>
  )
}