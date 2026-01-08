import React, { useCallback, useState } from 'react'
import { useStageAsset } from './useStageAsset'
import type { AllAssetFragment, AssetKey } from '@/generated/graphql'
import { nanoid } from 'nanoid'
import type { ServerErrorInfo } from '@/utils/error'
import { useDeleteAsset } from './useDeleteAsset'

export interface UploadTask {
  id: string
  file?: File
  progress: number
  status: 'idle' | 'uploading' | 'success' | 'error' | 'previous'
  assetId?: string
}

export interface AssetUploadManagerOptions {
  assets?: AllAssetFragment[]
  maxUploads?: number
  deleteAfterUpload?: boolean
  deleteAfterError?: boolean
  onError?: (file: File | undefined, errorInfo: ServerErrorInfo) => void
}

export const useAssetUploadManager = (options?: AssetUploadManagerOptions) => {
  const {
    assets = [],
    maxUploads = Infinity,
    deleteAfterUpload = false,
    deleteAfterError = false,

    onError
  } = options ?? {}

  const [tasks, setTasks] = useState<UploadTask[]>(assets.map(asset => ({
    id: nanoid(),
    progress: 100,
    status: 'previous',
    assetId: asset.id
  })))

  const { stageAssetWithFile } = useStageAsset()
  const { deleteAsset } = useDeleteAsset()

  const handleOnProgress = React.useCallback(
    (id: string, pct: number) => {
      setTasks(
        prev => prev.map(task => (
          task.id === id
            ? {
              ...task,
              progress: pct
            }
            : task
        ))
      )
    },
    []
  )

  const handleOnSuccess = React.useCallback(
    (id: string, assetId: string) => {
      if (deleteAfterUpload) {
        setTasks(prev => prev.filter(t => t.id !== id))
        return
      }

      setTasks(
        prev => prev.map(task => (
          task.id === id
            ? {
              ...task,
              status: 'success',
              assetId
            }
            : task
        ))
      )
    },
    [deleteAfterUpload]
  )

  const handleOnError = React.useCallback(
    (id: string, errorInfo: ServerErrorInfo) => {
      const task = tasks.find(t => t.id === id)

      if (task != null) {
        onError?.(task.file, errorInfo)
      }

      if (deleteAfterError) {
        setTasks(prev => prev.filter(t => t.id !== id))
        return
      }

      setTasks(
        prev => prev.map(task => (
          task.id === id
            ? {
              ...task,
              status: 'error'
            }
            : task
        ))
      )
    },
    [deleteAfterError, onError, tasks]
  )

  const handleDelete = useCallback(
    (task?: UploadTask) => {
      if (task?.assetId != null) {
        deleteAsset({ id: task.assetId })
      }
    },
    [deleteAsset]
  )

  const uploadFile = React.useCallback(
    (
      file: File,
      key: AssetKey
    ) => {
      const id = nanoid()

      const newTask: UploadTask = {
        id,
        file,
        progress: 0,
        status: 'uploading'
      }

      setTasks(prev => {
        const nextTasks = [...prev]

        if (nextTasks.length >= maxUploads) {
          const ejected = nextTasks.shift()
          handleDelete(ejected)
        }

        nextTasks.push(newTask)

        return nextTasks
      })

      return stageAssetWithFile(
        file,
        key,
        pct => { handleOnProgress(id, pct) }
      )
        .andTee(data => {
          handleOnSuccess(id, data.assetId)
        })
        .orTee(data => {
          handleOnError(id, data)
        })
        .map(data => ({ data, task: newTask }))
    },
    [handleDelete, handleOnError, handleOnProgress, handleOnSuccess, maxUploads, stageAssetWithFile]
  )

  const deleteTask = React.useCallback(
    (id: string) => {
      setTasks(prev => {
        const task = prev.find(t => t.id === id)
        handleDelete(task)
        return prev.filter(t => t.id !== id)
      })
    },
    [handleDelete]
  )

  const moveTask = React.useCallback(
    (
      fromIndex: number,
      toIndex: number
    ) => {
      setTasks(prev => {
        const newTasks = [...prev]

        const [movedItem] = newTasks.splice(fromIndex, 1)
        newTasks.splice(toIndex, 0, movedItem)

        return newTasks
      })
    },
    []
  )

  return {
    tasks,
    uploadFile,
    deleteTask,
    moveTask
  }
}