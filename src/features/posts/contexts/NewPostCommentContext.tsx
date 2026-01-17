import type { FileRejection, UploadTask } from '@/features/assets'
import type { PostCommentPreviewFragment, PostShellFragment, PresignedUpload } from '@/generated/graphql'
import type { ServerErrorInfo } from '@/utils/error'
import type { Nullable } from '@/utils/util'
import type { ResultAsync } from 'neverthrow'
import React from 'react'

export interface NewPostCommentContextValue {
  post: PostShellFragment
  parent?: Nullable<PostCommentPreviewFragment>

  uploadTasks: UploadTask[]
  uploadErrors: string[]
  formErrors: {}

  isActive: boolean
  isFocused: boolean
  isLoading: boolean
  isUploading: boolean
  isSubmittable: boolean

  onIsActiveChange: (isActive: boolean) => void
  onIsFocusedChange: (isFocused: boolean) => void

  onUploadAsset: (file: File) => ResultAsync<{ data: PresignedUpload, task: UploadTask }, ServerErrorInfo>
  onDeleteAsset: (id: string) => void
  onAssetsRejected: (errors: FileRejection[]) => void

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