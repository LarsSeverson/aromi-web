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
      <TipTapEditor
        defaultContent={post.content as JSONContent}
        onUpdate={handleContentUpdate}
      />

      <Field.Error
        className='mt-1 ml-2 text-sm font-medium text-red-700'
      />
    </Field.Root>
  )
}

export default EditPostContent
