import { type Editor, useEditorState } from '@tiptap/react'
import clsx from 'clsx'
import React from 'react'
import EditorToolbarButton from './EditorToolbarButton'
import { MdFormatBold, MdFormatItalic, MdFormatListBulleted, MdFormatListNumbered } from 'react-icons/md'

export interface EditorToolbarProps {
  editor: Editor
}

const EditorToolbar = (props: EditorToolbarProps) => {
  const { editor } = props

  const {
    isBold,
    isItalic,
    isBulletList,
    isOrderedList
  } = useEditorState({
    editor,
    selector: (ctx) => {
      return {
        isBold: ctx.editor.isActive('bold'),
        isItalic: ctx.editor.isActive('italic'),
        isBulletList: ctx.editor.isActive('bulletList'),
        isOrderedList: ctx.editor.isActive('orderedList')
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

  return (
    <div
      className={clsx(
        'flex items-center justify-between border-b px-2 py-1.5'
      )}
    >
      <div
        className="flex items-center gap-0.5 md:gap-1"
      >
        <EditorToolbarButton
          icon={MdFormatBold}
          active={isBold}
          onClick={handleOnBoldClick}
        />

        <EditorToolbarButton
          icon={MdFormatItalic}
          active={isItalic}
          onClick={handleOnItalicClick}
        />

        <div
          className="mx-1 h-5 w-px bg-slate-200"
        />

        <EditorToolbarButton
          icon={MdFormatListBulleted}
          active={isBulletList}
          onClick={handleOnBulletListClick}
        />

        <EditorToolbarButton
          icon={MdFormatListNumbered}
          active={isOrderedList}
          onClick={handleOnOrderedListClick}
        />
      </div>
    </div>
  )
}

export default EditorToolbar
