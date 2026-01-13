import { useTipTapEditor } from '@/hooks/useTipTapEditor'
import { Field } from '@base-ui/react'
import { EditorContent } from '@tiptap/react'
import React from 'react'
import { useNewPostCommentContext } from '../../contexts/NewPostCommentContext'
import clsx from 'clsx'

const PostCommentFormInput = () => {
  const {
    isActive,

    onIsFocusedChange,
    onIsActiveChange
  } = useNewPostCommentContext()

  const [content, setContent] = React.useState('')

  const editor = useTipTapEditor({
    placeholder: 'Add a comment...',

    onUpdate: ({ editor }) => {
      const json = editor.getJSON()
      const val = JSON.stringify(json ?? {})

      setContent(val)
    },

    onFocus: () => {
      onIsFocusedChange(true)
      onIsActiveChange(true)
    },

    onBlur: () => {
      onIsFocusedChange(false)
    }
  })

  React.useEffect(() => {
    if (isActive) {
      editor?.commands.focus('end')
    }
  }, [editor, isActive])

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
              className={clsx(
                !isActive && 'line-clamp-1'
              )}
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

export default PostCommentFormInput
