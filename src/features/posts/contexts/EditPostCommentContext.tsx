import type { PostCommentPreviewFragment } from '@/generated/graphql'
import type { Nullable } from '@/utils/util'
import React from 'react'

export interface EditPostCommentContextValue {
  comment: PostCommentPreviewFragment
  hasChanges: boolean

  formErrors: {}

  isLoading: boolean

  onUpdateContent: (newContent: Nullable<string>) => void
  onSubmit: (event: React.FormEvent) => void
}

export const EditPostCommentContext = React.createContext<EditPostCommentContextValue | undefined>(undefined)

export const useEditPostCommentContext = () => {
  const context = React.useContext(EditPostCommentContext)
  if (context == null) {
    throw new Error('useEditPostCommentContext must be used within an EditPostCommentProvider')
  }

  return context
}