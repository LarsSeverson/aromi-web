import React, { useState } from 'react'
import { Field } from '@base-ui-components/react'
import clsx from 'clsx'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'

export interface PasswordInputProps extends Field.Control.Props {
  label?: string
  placeholder?: string
}

const PasswordInput = (props: PasswordInputProps) => {
  const { label = 'Password', placeholder = 'Password', ...rest } = props

  const [showPassword, setShowPassword] = useState(false)

  return (
    <Field.Root
      name={rest.name ?? label}
      className='relative flex flex-col'
    >
      <Field.Label
        className='text-md mt-2 font-semibold'
      >
        {label}
      </Field.Label>

      <div
        className='relative'
      >
        <Field.Control
          type={showPassword ? 'text' : 'password'}
          required
          placeholder={placeholder}
          className={({ valid }) => clsx(
            'my-1 w-full rounded-md border-2 p-2 pe-[43px]',
            'tracking-normal text-ellipsis whitespace-nowrap',
            valid === false && 'outline-red-700'
          )}
          {...rest}
        />

        <button
          type='button'
          className={clsx(
            'absolute top-1/2 right-2 -translate-y-1/2 p-2',
            'hover:bg-empty rounded-md'
          )}
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()

            setShowPassword(prev => !prev)
          }}
        >
          {showPassword
            ?
            (
              <IoEyeOffOutline />
            )
            :
            (
              <IoEyeOutline />
            )
          }
        </button>
      </div>

      <Field.Error
        className='ml-1 text-sm font-semibold text-red-700'
      />
    </Field.Root>
  )
}

export default PasswordInput
