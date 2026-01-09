import React from 'react'
import { useEditPostContext } from '../contexts/EditPostContext'
import type { JSONContent } from '@tiptap/core'
import { Field } from '@base-ui/react'
import TipTapEditor from '@/components/tiptap/TipTapEditor'

const EditPostContent = () => {
  const { post, onUpdateContent } = useEditPostContext()

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
        defaultContent={post.content as JSONContent}
        onUpdate={handleContentUpdate}
      />
    </Field.Root>
  )
}

export default EditPostContent
