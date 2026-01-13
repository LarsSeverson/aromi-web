import Placeholder from '@tiptap/extension-placeholder'
import { useEditor, type UseEditorOptions } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import clsx from 'clsx'

export interface UseTipTapEditorOptions extends UseEditorOptions {
  placeholder?: string
}

export const useTipTapEditor = (options?: UseTipTapEditorOptions) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: options?.placeholder ?? 'Start typing...',
        emptyEditorClass: 'is-editor-empty'
      })
    ],

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

    ...options
  })

  return editor
}