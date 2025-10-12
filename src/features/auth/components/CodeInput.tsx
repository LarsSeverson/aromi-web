import { Field } from '@base-ui-components/react'
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
      className='flex flex-col'
    >
      <Field.Label
        className='font-semibold text-md mb-1'
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
        className='h-full border-2 rounded-md outline-offset-[-3px] p-2 border-surface2'
      />

      <Field.Error
        className='text-red-600 font-pd text-sm mt-2'
      />
    </Field.Root>
  )
}

export default CodeInput
