import type { JSONContent } from '@tiptap/react'
import Editor from '@/components/tiptap/Editor'
import { Field } from '@base-ui/react'
import React from 'react'
import { useNewPostContext } from '../contexts/NewPostContext'

export interface NewPostContentProps {}

const NewPostContent = (_props: NewPostContentProps) => {
  const { onUpdateContent } = useNewPostContext()

  const handleContentUpdate = (json: JSONContent) => {
    const val = JSON.stringify(json ?? {})
    onUpdateContent(val)
  }

  return (
    <Field.Root
      name='content'
      className='flex flex-col'
    >
      <Field.Label
        className='text-md mb-2 font-semibold'
      >
        Content
      </Field.Label>

      <Editor
        onUpdate={handleContentUpdate}
      />
    </Field.Root>
  )
}

export default NewPostContent
