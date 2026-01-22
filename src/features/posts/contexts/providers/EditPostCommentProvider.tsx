import type { PostCommentPreviewFragment, UpdatePostCommentInput } from '@/generated/graphql'
import { useToastMessage } from '@/hooks/useToastMessage'
import { useUpdatePostComment } from '../../hooks/useUpdatePostComment'
import React from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import type { Form } from '@base-ui/react'
import { parseSchema } from '@/utils/validation'
import { UpdatePostCommentSchema } from '../../utils/validation'
import { EditPostCommentContext } from '../EditPostCommentContext'

export interface EditPostCommentProviderProps {
  comment: PostCommentPreviewFragment
  children?: React.ReactNode

  onIsEditingChange?: (isEditing: boolean) => void
}

export const EditPostCommentProvider = (props: EditPostCommentProviderProps) => {
  const { comment, children, onIsEditingChange } = props

  const { toastMessage, toastError } = useToastMessage()
  const { updatePostComment } = useUpdatePostComment()

  const [isFocused, setIsFocused] = React.useState(false)
  const [hasChanges, setHasChanges] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [formErrors, setFormErrors] = React.useState({})

  const handleOnEditComment = useDebounce(
    async (input: UpdatePostCommentInput) => {
      const result = await updatePostComment(input)

      setIsLoading(false)

      result.match(
        () => {
          toastMessage('Your comment has been updated')
          onIsEditingChange?.(false)
        },
        () => {
          toastError('')
        }
      )
    }
  )

  const handleOnSubmit = (formData: Form.Values) => {
    if (!hasChanges) return

    const input = {
      ...formData,
      id: comment.id
    }

    const parsed = parseSchema(UpdatePostCommentSchema, input)
    setFormErrors(parsed.fieldErrors)

    if (!parsed.success) {
      return
    }

    setIsLoading(true)
    handleOnEditComment(parsed.data)
  }

  return (
    <EditPostCommentContext.Provider
      value={{
        comment,
        hasChanges,

        formErrors,

        isLoading,
        isFocused,

        onSubmit: handleOnSubmit,
        onHasChangesChange: setHasChanges,
        onIsFocusedChange: setIsFocused,
        onIsEditingChange
      }}
    >
      {children}
    </EditPostCommentContext.Provider>
  )
}