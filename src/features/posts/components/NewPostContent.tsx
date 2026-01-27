import type { JSONContent } from '@tiptap/react'
import TipTapEditor from '@/components/tiptap/TipTapEditor'
import { Field } from '@base-ui/react'
import React from 'react'

export interface NewPostContentProps {}

const NewPostContent = (_props: NewPostContentProps) => {
  const [content, setContent] = React.useState('')

  const handleOnUpdate = (json: JSONContent) => {
    setContent(JSON.stringify(json ?? {}))
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

      <Field.Control
        value={content}
        onValueChange={setContent}
        render={props => (
          <>
            <TipTapEditor
              onUpdate={handleOnUpdate}
            />

            <input
              {...props}
              className='sr-only'
            />
          </>
        )}
      />

      <Field.Error
        className='mt-1 ml-2 text-sm font-medium text-red-700'
      />
    </Field.Root>
  )
}

export default NewPostContent
