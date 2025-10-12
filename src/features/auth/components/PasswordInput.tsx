import React, { useState } from 'react'
import { Field } from '@base-ui-components/react'
import clsx from 'clsx'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'

export interface PasswordInputProps {
  label?: string
  placeholder?: string
}

const PasswordInput = (props: PasswordInputProps) => {
  const { label = 'Password', placeholder = 'Password' } = props

  const [showPassword, setShowPassword] = useState(false)

  return (
    <Field.Root
      name='password'
      className='flex flex-col relative'
    >
      <Field.Label
        className='font-semibold text-md mt-2'
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
            'p-2 my-1 border-2 rounded-md pe-[43px] w-full border-surface2',
            'tracking-normal text-ellipsis whitespace-nowrap',
            valid === false && 'outline-red-600'
          )}
        />

        <button
          type='button'
          className={clsx(
            'absolute right-2 top-1/2 -translate-y-1/2 p-2',
            'rounded-md hover:bg-surface'
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
            )}
        </button>
      </div>

      <Field.Error
        className='text-red-600 font-pd text-sm ml-1'
      />
    </Field.Root>
  )
}

export default PasswordInput
