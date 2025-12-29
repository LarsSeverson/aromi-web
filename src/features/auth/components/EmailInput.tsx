import { Field } from '@base-ui/react'
import clsx from 'clsx'
import React from 'react'

export interface EmailInputProps extends Field.Root.Props {
  label?: string
  placeholder?: string
}

const EmailInput = (props: EmailInputProps) => {
  const { label = 'Email', placeholder = 'Email', ...rest } = props

  return (
    <Field.Root
      {...rest}
      name='email'
      className='flex flex-col'
    >
      <Field.Label
        className='text-md mt-2 font-semibold'
      >
        {label}
      </Field.Label>

      <Field.Control
        required
        placeholder={placeholder}
        className={({ valid }) =>
          clsx(
            'my-1 rounded-md border-2 p-2',
            valid === false && 'outline-red-600'
          )}
      />

      <Field.Error
        className='ml-1 text-sm text-red-600'
      />
    </Field.Root>
  )
}

export default EmailInput
