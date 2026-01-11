import Spinner from '@/components/Spinner'
import FilePickerButton from '@/features/assets/components/FilePickerButton'
import { Field, Form } from '@base-ui/react'
import Placeholder from '@tiptap/extension-placeholder'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import clsx from 'clsx'
import React from 'react'

const NewPostCommentInput = () => {
  const [content, setContent] = React.useState('')
  const [isWriting, setIsWriting] = React.useState(false)
  const [isLoading] = React.useState(false)
  const [hasContent, setHasContent] = React.useState(false)
  const [isFocused, setIsFocused] = React.useState(false)

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Add a comment...',
        emptyEditorClass: 'is-editor-empty'
      })
    ],

    content,

    editorProps: {
      attributes: {
        tabindex: '0',
        class: clsx(
          'prose prose-sm max-w-none focus:outline-none',
          '[&_p]:my-0',
          'md:prose-base',
          '[&_p.is-editor-empty:first-child]:before:content-[attr(data-placeholder)]',
          '[&_p.is-editor-empty:first-child]:before:text-black/50',
          '[&_p.is-editor-empty:first-child]:before:float-left',
          '[&_p.is-editor-empty:first-child]:before:h-0',
          '[&_p.is-editor-empty:first-child]:before:pointer-events-none'
        )
      }
    },

    onUpdate: ({ editor }) => {
      const json = editor.getJSON()
      const val = JSON.stringify(json ?? {})

      setContent(val)
      setHasContent(editor.getText().trim().length > 0)
    },

    onFocus: () => {
      setIsWriting(true)
      setIsFocused(true)
    },

    onBlur: () => {
      setIsFocused(false)
    }
  })

  const handleOnForceFocus = () => {
    editor?.commands.focus('end')
  }

  return (
    <Form
      className='overflow-hidden rounded-xl'
    >
      <Field.Root
        name='content'
        className='flex flex-col'
      >
        <div
          className={clsx(
            'w-full resize-none overflow-auto rounded-4xl border-2 p-3 text-sm',
            isFocused && 'border-sinopia',
            'hover:border-sinopia transition-colors duration-150 ease-in-out focus:outline-none'
          )}
          onClick={handleOnForceFocus}
        >
          <div
            className='px-3'
          >
            <EditorContent
              editor={editor}
            />
          </div>

          {isWriting && (
            <div
              className='mt-2 flex'
            >
              <FilePickerButton />

              <button
                type='submit'
                disabled={isLoading || !hasContent}
                className={clsx(
                  hasContent ? 'group hover:shadow-symmetrical cursor-pointer hover:brightness-110' : 'opacity-50',
                  'flex overflow-hidden rounded-3xl px-4 py-2 text-sm text-white',
                  'bg-sinopia transition-opacity duration-150',
                  'items-center gap-1.5',
                  'relative ml-auto'
                )}
              >
                <Spinner
                  className={clsx(
                    'border-white',
                    isLoading ? 'opacity-100' : 'opacity-0'
                  )}
                />

                <span
                  className={clsx(
                    isLoading ? 'opacity-0' : 'opacity-100'
                  )}
                >
                  Post
                </span>
              </button>
            </div>
          )}
        </div>

        <Field.Error
          className='mt-1 ml-2 text-sm font-medium text-red-700'
        />
      </Field.Root>
    </Form>
  )
}

export default NewPostCommentInput
