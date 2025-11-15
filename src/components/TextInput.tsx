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
      name={rest.name ?? label}
      className='flex flex-col'
    >
      <Field.Label
        className='text-md font-semibold'
      >
        {label}
      </Field.Label>

      <Field.Control
        className={({ valid }) =>
          clsx(
            'my-1 rounded-md border-2 p-2',
            valid === false && 'outline-red-600'
          )}
        {...rest}
      />

      <Field.Error
        className='text-md ml-1 font-medium text-red-600'
      />
    </Field.Root>
  )
}

export default TextInput
