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
        className='rounded-3xl border p-3 px-5'
        placeholder='Add a title...'
      />

      <Field.Error
        className='text-md ml-2 font-medium text-red-600'
      />
    </Field.Root>
  )
}

export default NewPostTitle
