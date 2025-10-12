import { Field } from '@base-ui-components/react'
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
        className='font-semibold text-md mt-2'
      >
        {label}
      </Field.Label>

      <Field.Control
        required
        placeholder={placeholder}
        className={({ valid }) =>
          clsx(
            'p-2 my-1 border-2 rounded-md border-surface2',
            valid === false && 'outline-red-600'
          )}
      />

      <Field.Error
        className='text-red-600 font-pd text-sm ml-1'
      />
    </Field.Root>
  )
}

export default EmailInput
