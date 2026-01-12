import type { UploadTask } from '@/features/assets'
import type { PostCommentPreviewFragment, PostPreviewFragment, PresignedUpload } from '@/generated/graphql'
import type { ServerErrorInfo } from '@/utils/error'
import type { Nullable } from '@/utils/util'
import type { ResultAsync } from 'neverthrow'
import React from 'react'

export interface NewPostCommentContextValue {
  post: PostPreviewFragment
  parent?: Nullable<PostCommentPreviewFragment>

  fragranceId?: Nullable<string>

  uploadTasks: UploadTask[]
  uploadErrors: string[]
  formErrors: {}

  isActive: boolean
  isLoading: boolean
  isUploading: boolean

  onIsActiveChange: (isActive: boolean) => void
  onFragranceIdChange: (id: Nullable<string>) => void
  onUpdateContent: (newContent: Nullable<string>) => void

  onUploadAsset: (file: File) => ResultAsync<{ data: PresignedUpload, task: UploadTask }, ServerErrorInfo>
  onDeleteAsset: (id: string) => void

  onSubmit: (event: React.FormEvent) => void
}

export const NewPostCommentContext = React.createContext<NewPostCommentContextValue | undefined>(undefined)

export const useNewPostCommentContext = () => {
  const context = React.useContext(NewPostCommentContext)
  if (context == null) {
    throw new Error('useNewPostCommentContext must be used within a NewPostCommentProvider')
  }

  return context
}