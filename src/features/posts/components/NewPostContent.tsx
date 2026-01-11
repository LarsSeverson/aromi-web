import type { JSONContent } from '@tiptap/react'
import TipTapEditor from '@/components/tiptap/TipTapEditor'
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

      <TipTapEditor
        onUpdate={handleContentUpdate}
      />

      <Field.Error
        className='mt-1 ml-2 text-sm font-medium text-red-700'
      />
    </Field.Root>
  )
}

export default NewPostContent
