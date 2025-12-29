import { Field } from '@base-ui/react'
import clsx from 'clsx'
import React from 'react'

const UsernameInput = () => {
  return (
    <Field.Root
      name='username'
      className='flex flex-col'
    >
      <Field.Label
        className='font-semibold text-md mt-2'
      >
        Username
      </Field.Label>

      <Field.Control
        required
        placeholder='Username'
        className={({ valid }) =>
          clsx(
            'p-2 my-1 border-2 rounded-md',
            valid === false && 'outline-red-600'
          )}
      />

      <Field.Error
        className='text-red-600 font-pd text-sm ml-1'
      />
    </Field.Root>
  )
}

export default UsernameInput
