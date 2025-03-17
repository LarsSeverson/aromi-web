import { Input, type InputProps } from '@headlessui/react'
import clsx from 'clsx'
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'

export interface InputFieldHandle {
  validate: () => boolean
  getValue: () => string
}

export interface InputFieldProps extends InputProps {
  label?: string | undefined
  invalidMessage?: string | undefined
}

const InputField = forwardRef<InputFieldHandle, InputFieldProps>((props: InputFieldProps, ref) => {
  const { label, invalidMessage, ...rest } = props
  const [valid, setValid] = useState(true)
  const inputRef = useRef<HTMLInputElement>(null)

  const validate = () => {
    if (inputRef.current == null) return true

    if (!inputRef.current.validity.valid) {
      setValid(false)
      return false
    }

    setValid(true)
    return true
  }

  useImperativeHandle(ref, () => ({
    validate,
    getValue: () => (inputRef.current != null ? inputRef.current.value : '')
  }))

  const className = clsx(
    'mt-2 block w-full rounded-lg bg-black/5 py-2.5 px-5 text-[16px] font-reg outline outline-offset-[-1px] outline-[3px] outline-transparent',
    valid && ' data-[focus]:outline-sinopia/90',
    !valid && 'outline-red-600'
  )

  return (
    <div className='w-full mt-2'>
      <label
        htmlFor={rest.name}
        className='ml-3 text-gray-700'
      >
        {label}
      </label>
      <Input
        ref={inputRef}
        type='email'
        name='email'
        placeholder={label}
        className={className}
        {...rest}
      />
      {!valid && (
        <p className='mt-2 ml-3 text-sm text-red-600'>
          {invalidMessage}
        </p>
      )}
    </div>
  )
})

InputField.displayName = 'InputField'

export default InputField
