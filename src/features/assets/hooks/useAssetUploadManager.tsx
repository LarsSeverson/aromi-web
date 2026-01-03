import { useState } from 'react'
import { useStageAsset } from './useStageAsset'
import type { AssetKey } from '@/generated/graphql'
import { nanoid } from 'nanoid'
import type { ServerErrorInfo } from '@/utils/error'
import { useToastMessage } from '@/hooks/useToastMessage'

export interface UploadTask {
  id: string
  file: File
  progress: number
  status: 'idle' | 'uploading' | 'success' | 'error'
  assetId?: string
}

export interface AssetUploadManagerOptions {
  deleteAfterUpload?: boolean
  deleteAfterError?: boolean
}

export const useAssetUploadManager = (options?: AssetUploadManagerOptions) => {
  const {
    deleteAfterUpload = false,
    deleteAfterError = false
  } = options ?? {}

  const [tasks, setTasks] = useState<UploadTask[]>([])

  const { toastError } = useToastMessage()
  const { stageAssetWithFile } = useStageAsset()

  const handleOnProgress = (id: string, pct: number) => {
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
  }

  const handleOnSuccess = (id: string, assetId: string) => {
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
  }

  const handleOnError = (id: string, errorInfo: ServerErrorInfo) => {
    if (deleteAfterError) {
      toastError(errorInfo.message)
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
  }

  const uploadFile = (
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

    setTasks(prev => [
      ...prev,
      newTask
    ])

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
  }

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  const moveTask = (
    fromIndex: number,
    toIndex: number
  ) => {
    setTasks(prev => {
      const newTasks = [...prev]

      const [movedItem] = newTasks.splice(fromIndex, 1)
      newTasks.splice(toIndex, 0, movedItem)

      return newTasks
    })
  }

  return {
    tasks,
    uploadFile,
    deleteTask,
    moveTask
  }
}