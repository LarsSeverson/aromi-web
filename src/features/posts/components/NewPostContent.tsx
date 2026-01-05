import type { JSONContent } from '@tiptap/react'
import Editor from '@/components/tiptap/Editor'
import { Field } from '@base-ui/react'
import React from 'react'

export interface NewPostContentProps {}

const NewPostContent = (_props: NewPostContentProps) => {
  const [content, setContent] = React.useState<JSONContent | null>(null)

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

      <Field.Control
        className='sr-only'
        value={JSON.stringify(content ?? {})}
      />

      <Editor
        onUpdate={setContent}
      />
    </Field.Root>
  )
}

export default NewPostContent
