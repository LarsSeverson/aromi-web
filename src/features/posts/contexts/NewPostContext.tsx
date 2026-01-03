import type { PostType } from '@/generated/graphql'
import React from 'react'
import type { UploadTask } from '@/features/assets'

export interface NewPostContextValue {
  type: PostType
  uploadTasks: UploadTask[]
  onTypeChange: (newType: PostType) => void
  onUploadAsset: (file: File) => void
  onDeleteAsset: (id: string) => void
  onMoveAsset: (fromIndex: number, toIndex: number) => void
}

export const NewPostContext = React.createContext<NewPostContextValue | undefined>(undefined)

export const useNewPostContext = () => {
  const context = React.useContext(NewPostContext)
  if (context == null) {
    throw new Error('useNewPostContext must be used within a NewPostProvider')
  }

  return context
}