import type { PostCommentPreviewFragment } from '@/generated/graphql'
import React from 'react'

export interface EditPostCommentContextValue {
  comment: PostCommentPreviewFragment
  hasChanges: boolean

  formErrors: {}

  isLoading: boolean
  isFocused: boolean

  onSubmit: (event: React.FormEvent) => void
  onHasChangesChange: (hasChanges: boolean) => void
  onIsFocusedChange: (isFocused: boolean) => void
  onIsEditingChange?: (isEditing: boolean) => void
}

export const EditPostCommentContext = React.createContext<EditPostCommentContextValue | undefined>(undefined)

export const useEditPostCommentContext = () => {
  const context = React.useContext(EditPostCommentContext)
  if (context == null) {
    throw new Error('useEditPostCommentContext must be used within an EditPostCommentProvider')
  }

  return context
}