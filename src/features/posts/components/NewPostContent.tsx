import Editor from '@/components/editor/Editor'
import { Field } from '@base-ui/react'
import React from 'react'

export interface NewPostContentProps {}

const NewPostContent = (_props: NewPostContentProps) => {
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
        render={() => (
          <Editor />
        )}
      />

      <Field.Error
        className='text-md ml-1 font-medium text-red-600'
      />
    </Field.Root>
  )
}

export default NewPostContent
