import Spinner from '@/components/Spinner'
import FilePickerButton from '@/features/assets/components/FilePickerButton'
import { Field, Form } from '@base-ui/react'
import Placeholder from '@tiptap/extension-placeholder'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import clsx from 'clsx'
import React from 'react'
import { MAX_POST_COMMENT_ASSET_SIZE, MAX_POST_COMMENT_ASSETS, ValidPostCommentAssetType } from '../../utils/validation'
import { useNewPostCommentContext } from '../../contexts/NewPostCommentContext'
import PostCommentInputAsset from './PostCommentInputAsset'
import PostCommentInputDropZone from './PostCommentInputDropZone'
import PostCommentInputErrors from './PostCommentInputErrors'
import type { FileRejection } from '@/features/assets'
import { truncate } from 'lodash'

const PostCommentInput = () => {
  const {
    isActive,
    uploadTasks,

    onIsActiveChange,
    onUpdateContent,
    onUploadAsset
  } = useNewPostCommentContext()

  const [isLoading] = React.useState(false)
  const [hasContent, setHasContent] = React.useState(false)
  const [isFocused, setIsFocused] = React.useState(false)
  const [dropZoneErrors, setDropZoneErrors] = React.useState<string[]>([])

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Add a comment...',
        emptyEditorClass: 'is-editor-empty'
      })
    ],

    content: '',

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

      onUpdateContent(val)
      setHasContent(editor.getText().trim().length > 0)
    },

    onFocus: () => {
      onIsActiveChange(true)
      setIsFocused(true)
    },

    onBlur: () => {
      setIsFocused(false)
    }
  })

  const handleOnForceFocus = () => {
    editor?.commands.focus('end')
  }

  const handleOnDropZoneErrors = (errors: string[]) => {
    setDropZoneErrors(errors)

    setTimeout(() => {
      setDropZoneErrors([])
    }, 10000)
  }

  const handleOnFilePicked = (files: File[]) => {
    const first = files[0]
    if (first == null) return
    onUploadAsset(first)
  }

  const handleOnFilesRejected = (errors: FileRejection[]) => {
    const errorMessages = errors.map(error =>
      `Failed to upload ${truncate(error.file.name, { length: 20 })}: ${error.errors.at(0)}`
    )

    setDropZoneErrors(errorMessages)

    setTimeout(() => {
      setDropZoneErrors([])
    }, 10000)
  }

  return (
    <Form
      className='relative rounded-xl'
    >
      <Field.Root
        name='content'
        className='flex flex-col'
      >
        <div
          className={clsx(
            'w-full resize-none overflow-auto rounded-4xl border-2 p-3 text-sm',
            isFocused && 'border-sinopia',
            isActive && 'pb-1.5',
            'hover:border-sinopia transition-colors duration-150 ease-in-out focus:outline-none'
          )}
          onClick={handleOnForceFocus}
        >
          <div
            className={clsx(
              'mb-2 ml-2 flex flex-wrap gap-3',
              uploadTasks.length === 0 && 'hidden'
            )}
          >
            {uploadTasks.map(task => (
              <PostCommentInputAsset
                key={task.id}
                task={task}
              />
            ))}
          </div>

          <div
            className='px-3'
          >
            <EditorContent
              editor={editor}
            />
          </div>

          {isActive && (
            <div
              className='mt-2 flex'
            >
              <FilePickerButton
                acceptedFileTypes={ValidPostCommentAssetType.options}
                allowMultiple={false}
                maxFiles={MAX_POST_COMMENT_ASSETS}
                maxFileSizeInBytes={MAX_POST_COMMENT_ASSET_SIZE}
                onFilesSelected={handleOnFilePicked}
                onFilesRejected={handleOnFilesRejected}
              />

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

        <PostCommentInputDropZone
          onDropZoneErrors={handleOnDropZoneErrors}
        />

        <PostCommentInputErrors
          dropZoneErrors={dropZoneErrors}
        />
      </Field.Root>
    </Form>
  )
}

export default PostCommentInput
