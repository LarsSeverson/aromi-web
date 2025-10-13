import React from 'react'
import { Field } from '@base-ui-components/react'
import clsx from 'clsx'

export interface TextInputProps extends Field.Control.Props {
  label?: string
}

const TextInput = (props: TextInputProps) => {
  const {
    label = '',
    ...rest
  } = props

  return (
    <Field.Root
      name={label}
      className='flex flex-col'
    >
      <Field.Label
        className='font-semibold text-md'
      >
        {label}
      </Field.Label>

      <Field.Control
        className={({ valid }) =>
          clsx(
            'p-2 my-1 border-2 rounded-md border-surface2',
            valid === false && 'outline-red-600'
          )}
        {...rest}
      />

      <Field.Error
        className='text-red-600 font-pd text-sm ml-1'
      />
    </Field.Root>
  )
}

export default TextInput
