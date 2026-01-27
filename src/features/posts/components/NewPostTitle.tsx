import { Field } from '@base-ui/react'
import React from 'react'

const NewPostTitle = () => {
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
        required
        placeholder='Add a title...'
        className='rounded-3xl border p-3 px-5'
      />

      <Field.Error
        className='mt-1 ml-2 text-sm font-medium text-red-700'
      />
    </Field.Root>
  )
}

export default NewPostTitle
