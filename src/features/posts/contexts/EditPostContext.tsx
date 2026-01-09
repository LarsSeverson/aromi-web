import type { PostPreviewFragment, PresignedUpload } from '@/generated/graphql'
import React from 'react'
import type { UploadTask } from '@/features/assets'
import type { ResultAsync } from 'neverthrow'
import type { ServerErrorInfo } from '@/utils/error'
import type { Nullable } from '@/utils/util'
import type { EditPostAsset } from '../types'

export interface EditPostContextValue {
  post: PostPreviewFragment

  fragranceId: string | null

  uploadTasks: EditPostAsset[]
  uploadErrors: string[]
  formErrors: {}

  isLoading: boolean
  isUploading: boolean

  onFragranceIdChange: (id: string | null) => void

  onUploadAsset: (file: File) => ResultAsync<{ data: PresignedUpload, task: UploadTask } | undefined, ServerErrorInfo>
  onDeleteAsset: (clientId: string) => void
  onMoveAsset: (fromIndex: number, toIndex: number) => void

  onUpdateContent: (newContent: Nullable<string>) => void

  onSubmit: (event: React.FormEvent) => void
}

export const EditPostContext = React.createContext<EditPostContextValue | undefined>(undefined)

export const useEditPostContext = () => {
  const context = React.useContext(EditPostContext)
  if (context == null) {
    throw new Error('useEditPostContext must be used within a EditPostProvider')
  }

  return context
}