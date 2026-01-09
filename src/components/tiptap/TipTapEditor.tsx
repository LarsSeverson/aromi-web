import { useEditor, EditorContent, type JSONContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import { clsx } from 'clsx'
import EditorToolbar from './EditorToolbar'

export interface TipTapEditorProps {
  placeholder?: string
  defaultContent?: JSONContent
  onUpdate?: (content: JSONContent) => void
}

const TipTapEditor = (props: TipTapEditorProps) => {
  const {
    placeholder = 'Body (optional)...',
    defaultContent,

    onUpdate
  } = props

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder,
        emptyEditorClass: 'is-editor-empty'
      })
    ],

    content: defaultContent ?? undefined,

    editorProps: {
      attributes: {
        tabindex: '0',
        class: clsx(
          'prose prose-sm max-w-none focus:outline-none',
          'min-h-30 px-4 py-3',
          '[&_p]:my-0',
          'md:prose-base md:min-h-45 md:px-5 md:py-4',
          '[&_p.is-editor-empty:first-child]:before:content-[attr(data-placeholder)]',
          '[&_p.is-editor-empty:first-child]:before:text-black/50',
          '[&_p.is-editor-empty:first-child]:before:float-left',
          '[&_p.is-editor-empty:first-child]:before:h-0',
          '[&_p.is-editor-empty:first-child]:before:pointer-events-none'
        )
      }
    },

    onUpdate: ({ editor }) => {
      onUpdate?.(editor.getJSON())
    }
  })

  if (editor == null) {
    return null
  }

  return (
    <div
      className={clsx(
        'w-full overflow-hidden rounded-2xl border bg-white',
        'focus-within:outline-sinopia focus-within:outline-2'
      )}
    >
      <EditorToolbar
        editor={editor}
      />

      <EditorContent
        editor={editor}
      />
    </div>
  )
}

export default TipTapEditor