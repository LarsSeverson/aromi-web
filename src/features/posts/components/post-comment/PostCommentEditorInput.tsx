import React from 'react'
import { useEditPostCommentContext } from '../../contexts/EditPostCommentContext'
import { useTipTapEditor } from '@/hooks/useTipTapEditor'
import { Field } from '@base-ui/react'
import { EditorContent, type JSONContent } from '@tiptap/react'
import { isEqual } from 'lodash'

export const PostCommentEditorInput = () => {
  const {
    comment,
    onIsFocusedChange,

    onHasChangesChange
  } = useEditPostCommentContext()

  const commentContent = comment.content as JSONContent

  const [content, setContent] = React.useState(JSON.stringify(commentContent ?? ''))

  const editor = useTipTapEditor({
    placeholder: 'Add content...',

    content: commentContent ?? undefined,

    onUpdate: ({ editor }) => {
      const json = editor.getJSON()
      const val = JSON.stringify(json ?? {})

      setContent(val)
      onHasChangesChange(!isEqual(json, commentContent))
    },

    onFocus: () => {
      onIsFocusedChange(true)
    },

    onBlur: () => {
      onIsFocusedChange(false)
    }
  })

  return (
    <Field.Root
      name='content'
      className='px-3'
    >
      <Field.Control
        value={content}
        onValueChange={setContent}
        render={props => (
          <>
            <EditorContent
              editor={editor}
            />

            <input
              {...props}
              className='sr-only'
            />
          </>
        )}
      />

      <Field.Error />
    </Field.Root>
  )
}
