import { Field } from '@base-ui/react'
import React from 'react'

export interface CodeInputProps {
  label?: string
  placeholder?: string
}

const CodeInput = (props: CodeInputProps) => {
  const { label = 'Your code', placeholder = '' } = props

  return (
    <Field.Root
      name='code'
      className='flex max-w-3xs flex-col'
    >
      <Field.Label
        className='text-md mb-1 font-semibold'
      >
        {label}
      </Field.Label>

      <Field.Control
        placeholder={placeholder}
        type='text'
        autoFocus
        required
        inputMode='numeric'
        maxLength={6}
        pattern='[0-9]*'
        autoComplete='one-time-code'
        className='h-full rounded-md border-2 p-2 outline-offset-[-3px]'
      />

      <Field.Error
        className='font-pd mt-2 text-sm text-red-600'
      />
    </Field.Root>
  )
}

export default CodeInput
