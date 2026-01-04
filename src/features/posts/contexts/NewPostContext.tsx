import type { PostType, PresignedUpload } from '@/generated/graphql'
import React from 'react'
import type { UploadTask } from '@/features/assets'
import type { ResultAsync } from 'neverthrow'
import type { ServerErrorInfo } from '@/utils/error'

export interface NewPostContextValue {
  type: PostType

  fragranceId: string | null

  uploadTasks: UploadTask[]
  uploadErrors: string[]

  onTypeChange: (newType: PostType) => void

  onFragranceIdChange: (id: string | null) => void

  onUploadAsset: (file: File) => ResultAsync<{ data: PresignedUpload, task: UploadTask }, ServerErrorInfo>
  onDeleteAsset: (id: string) => void
  onMoveAsset: (fromIndex: number, toIndex: number) => void

  onCreatePost: () => void
}

export const NewPostContext = React.createContext<NewPostContextValue | undefined>(undefined)

export const useNewPostContext = () => {
  const context = React.useContext(NewPostContext)
  if (context == null) {
    throw new Error('useNewPostContext must be used within a NewPostProvider')
  }

  return context
}