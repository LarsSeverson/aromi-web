import { Field } from '@base-ui/react'
import React from 'react'
import { useEditPostContext } from '../contexts/EditPostContext'

const EditPostTitle = () => {
  const { post } = useEditPostContext()

  return (
    <Field.Root
      name='title'
      className='flex flex-col'
    >
      <Field.Label
        className='text-md mb-2 font-semibold'
      >
        Title
      </Field.Label>

      <Field.Control
        defaultValue={post.title}
        required
        placeholder='Add a title...'
        className='rounded-3xl border p-3 px-5'
      />

      <Field.Error
        match='valueMissing'
        className='mt-1 ml-2 text-sm font-medium text-red-700'
      >
        A title is required
      </Field.Error>
    </Field.Root>
  )
}

export default EditPostTitle
