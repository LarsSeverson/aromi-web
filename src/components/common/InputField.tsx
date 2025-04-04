import { Input, type InputProps } from '@headlessui/react'
import clsx from 'clsx'
import React, { forwardRef } from 'react'

export interface InputFieldProps extends InputProps {
  label?: string | undefined
  invalidMessage?: string | undefined
  invalid?: boolean | undefined
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>((props: InputFieldProps, ref) => {
  const { label, invalidMessage, invalid, ...rest } = props

  const className = clsx(
    'mt-2 block w-full rounded-lg bg-black/5 py-2.5 px-5 text-[16px] font-reg outline outline-offset-[-1px] outline-[3px]',
    !(invalid ?? false) && 'outline-transparent data-[focus]:outline-sinopia/90',
    (invalid ?? false) && 'outline-red-600'
  )

  return (
    <div className='w-full'>
      <label
        htmlFor={rest.name}
        className='ml-3 text-gray-700'
      >
        {label}
      </label>
      <Input
        ref={ref}
        placeholder={label}
        className={className}
        {...rest}
      />
      {((invalid ?? false) && (invalidMessage != null)) && (
        <p className='mt-2 ml-3 text-sm text-red-600'>
          {invalidMessage}
        </p>
      )}
    </div>
  )
})

InputField.displayName = 'InputField'

export default InputField
