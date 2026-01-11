import type { PostPreviewFragment } from '@/generated/graphql'
import React from 'react'
import type { Nullable } from '@/utils/util'

export interface EditPostContextValue {
  post: PostPreviewFragment
  hasChanges: boolean

  formErrors: {}

  isLoading: boolean

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