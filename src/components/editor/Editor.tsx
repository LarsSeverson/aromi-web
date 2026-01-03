import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import { clsx } from 'clsx'
import { MdFormatBold, MdFormatItalic, MdFormatListBulleted, MdFormatListNumbered } from 'react-icons/md'
import ToolbarButton from './ToolbarButton'

export interface EditorProps {
  placeholder?: string
}

const Editor = (props: EditorProps) => {
  const { placeholder = 'Body (optional)...' } = props

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder,
        emptyEditorClass: 'is-editor-empty'
      })
    ],
    content: '',
    editorProps: {
      attributes: {
        class: clsx(
          'prose prose-sm max-w-none focus:outline-none',
          'min-h-30 px-4 py-3',
          'md:prose-base md:min-h-45 md:px-5 md:py-4',
          '[&_p.is-editor-empty:first-child]:before:content-[attr(data-placeholder)]',
          '[&_p.is-editor-empty:first-child]:before:text-black/50',
          '[&_p.is-editor-empty:first-child]:before:float-left',
          '[&_p.is-editor-empty:first-child]:before:h-0',
          '[&_p.is-editor-empty:first-child]:before:pointer-events-none'
        )
      }
    }
  })

  const handleOnBoldClick = () => {
    if (editor == null) return

    editor
      .chain()
      .focus()
      .toggleBold()
      .run()
  }

  const handleOnItalicClick = () => {
    if (editor == null) return

    editor
      .chain()
      .focus()
      .toggleItalic()
      .run()
  }

  const handleOnBulletListClick = () => {
    if (editor == null) return

    editor
      .chain()
      .focus()
      .toggleBulletList()
      .run()
  }

  const handleOnOrderedListClick = () => {
    if (editor == null) return

    editor
      .chain()
      .focus()
      .toggleOrderedList()
      .run()
  }

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
      <div
        className={clsx(
          'flex items-center justify-between border-b px-2 py-1.5'
        )}
      >
        <div
          className="flex items-center gap-0.5 md:gap-1"
        >
          <ToolbarButton
            onClick={handleOnBoldClick}
            active={editor.isActive('bold')}
            icon={MdFormatBold}
          />

          <ToolbarButton
            onClick={handleOnItalicClick}
            active={editor.isActive('italic')}
            icon={MdFormatItalic}
          />

          <div
            className="mx-1 h-5 w-px bg-slate-200"
          />

          <ToolbarButton
            onClick={handleOnBulletListClick}
            active={editor.isActive('bulletList')}
            icon={MdFormatListBulleted}
          />

          <ToolbarButton
            onClick={handleOnOrderedListClick}
            active={editor.isActive('orderedList')}
            icon={MdFormatListNumbered}
          />
        </div>
      </div>

      <EditorContent
        editor={editor}
      />
    </div>
  )
}

export default Editor