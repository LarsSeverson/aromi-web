import React, { useState } from 'react'
import { type TextInputProps } from './TextInput'
import { Field } from '@base-ui-components/react'
import clsx from 'clsx'

export interface LengthTextInputProps extends TextInputProps {
  name?: string
}

const LengthTextInput = (props: LengthTextInputProps) => {
  const {
    name,
    maxLength = 0,
    onValueChange,
    ...rest
  } = props

  const [value, setValue] = useState(String(rest.value ?? ''))
  const [length, setLength] = useState(value.length)

  const handleOnValueChange = (value: string, event: Event) => {
    setValue(value)
    setLength(value.length)

    onValueChange?.(value, event)
  }

  return (
    <Field.Root
      name={name}
      className='flex flex-col'
    >
      <Field.Label
        className='font-semibold text-md'
      >
        {rest.label}
      </Field.Label>

      <Field.Control
        className={clsx(
          'p-2 my-1 border-2 rounded-md border-surface2',
          'bg-inherit'
        )}
        {...rest}
        maxLength={maxLength}
        value={value}
        onValueChange={handleOnValueChange}
      />

      <div
        className='flex items-center'
      >
        <Field.Error
          className='text-red-600 text-sm ml-1'
        />

        <span
          className={clsx(
            'ml-auto text-xs text-dark/60',
            length > maxLength && 'text-red-600'
          )}
        >
          {length} / {maxLength}
        </span>
      </div>
    </Field.Root>
  )
}

export default LengthTextInput
