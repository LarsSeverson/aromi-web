import React from 'react'
import { Field } from '@base-ui-components/react'
import clsx from 'clsx'

export interface TextAreaInputProps extends Field.Control.Props {
  label?: string
}

const TextAreaInput = (props: TextAreaInputProps) => {
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
        className={clsx(
          'p-2 my-1 border-2 rounded-md border-surface2 bg-inherit'
        )}
        {...rest}
        render={
          <textarea />
        }
      />

      <Field.Error
        className='text-red-600 font-pd text-sm ml-1'
      />
    </Field.Root>
  )
}

export default TextAreaInput
