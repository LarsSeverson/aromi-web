import React from 'react'
import type { PostPreviewFragment, UpdatePostInput } from '@/generated/graphql'
import { useDebounce } from '@/hooks/useDebounce'
import type { Form } from '@base-ui/react'
import { parseSchema } from '@/utils/validation'
import { useToastMessage } from '@/hooks/useToastMessage'
import { useNavigate } from '@tanstack/react-router'
import type { Nullable } from '@/utils/util'
import { useUpdatePost } from '../../hooks/useUpdatePost'
import { EditPostContext } from '../EditPostContext'
import { UpdatePostSchema } from '../../utils/validation'
import { isEqual } from 'lodash'
import type { JSONContent } from '@tiptap/core'
import { usePost } from '../../hooks/usePost'

export interface EditPostProviderProps {
  post: PostPreviewFragment
  children: React.ReactNode
}

export const EditPostProvider = (props: EditPostProviderProps) => {
  const { children } = props

  const navigate = useNavigate()
  const { toastMessage, toastError } = useToastMessage()
  const { updatePost } = useUpdatePost()

  const { post } = usePost(props.post.id)

  const hasSubmitted = React.useRef(false)
  const content = React.useRef<Nullable<string>>(JSON.stringify(post?.content ?? {}))

  const [hasChanges, setHasChanges] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [formErrors, setFormErrors] = React.useState({})

  const handleOnUpdateContent = (newContent: Nullable<string>) => {
    content.current = newContent

    const currentObj = newContent == null ? null : JSON.parse(newContent) as JSONContent
    const originalObj = (post?.content as JSONContent) ?? null

    setHasChanges(!isEqual(currentObj, originalObj))
  }

  const handleOnEditPost = useDebounce(
    async (input: UpdatePostInput) => {
      const result = await updatePost(input)

      setIsLoading(false)

      result.match(
        () => {
          hasSubmitted.current = true
          toastMessage('Your post has been updated')
          navigate({
            to: '/community/posts/$id',
            params: { id: post!.id },
            resetScroll: true
          })
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
      id: post!.id,
      content: content.current
    }

    const parsed = parseSchema(UpdatePostSchema, input)
    setFormErrors(parsed.fieldErrors)

    if (!parsed.success) {
      return
    }

    setIsLoading(true)
    handleOnEditPost(parsed.data)
  }

  if (post == null) return null

  return (
    <EditPostContext.Provider
      value={{
        post,
        hasChanges,

        formErrors,

        isLoading,

        onUpdateContent: handleOnUpdateContent,
        onSubmit: handleOnSubmit
      }}
    >
      {children}
    </EditPostContext.Provider>
  )
}
