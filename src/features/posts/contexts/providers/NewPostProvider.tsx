import React from 'react'
import { NewPostContext } from '../NewPostContext'
import { AssetKey, PostType } from '@/generated/graphql'
import { useAssetUploadManager } from '@/features/assets'
import type { NewPostAsset } from '../../types'

export interface NewPostProviderProps {
  children: React.ReactNode
}

export const NewPostProvider = (props: NewPostProviderProps) => {
  const { children } = props

  const [type, setType] = React.useState<PostType>(PostType.Text)

  const {
    tasks: uploadTasks,
    uploadFile,
    deleteTask,
    moveTask
  } = useAssetUploadManager({ deleteAfterError: true })

  const assets = React.useRef<NewPostAsset[]>([])

  const handleOnTypeChange = (newType: PostType) => {
    setType(newType)
  }

  const handleOnUploadAsset = (file: File) => {
    uploadFile(file, AssetKey.PostAssets).andTee(({ data, task }) => {
      assets.current.push({
        taskId: task.id,
        assetId: data.assetId,
        displayOrder: assets.current.length
      })
    })
  }

  const handleOnDeleteAsset = (id: string) => {
    deleteTask(id)
    assets.current = assets.current.filter(a => a.taskId !== id)
  }

  const handleOnMoveAsset = (fromIndex: number, toIndex: number) => {
    moveTask(fromIndex, toIndex)

    const assetToMove = assets.current.splice(fromIndex, 1)[0]
    assets.current.splice(toIndex, 0, assetToMove)

    assets.current = assets.current.map((a, index) => ({
      ...a,
      displayOrder: index
    }))
  }

  return (
    <NewPostContext.Provider
      value={{
        type,
        uploadTasks,
        onTypeChange: handleOnTypeChange,
        onUploadAsset: handleOnUploadAsset,
        onDeleteAsset: handleOnDeleteAsset,
        onMoveAsset: handleOnMoveAsset
      }}
    >
      {children}
    </NewPostContext.Provider>
  )
}