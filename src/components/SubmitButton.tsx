import clsx from 'clsx'
import React from 'react'
import Spinner from './Spinner'

export interface SubmitButtonProps extends React.ComponentProps<'button'> {
  isLoading?: boolean
  text?: string
}

const SubmitButton = (props: SubmitButtonProps) => {
  const { isLoading = false, text = 'Submit', ...rest } = props

  return (
    <button
      type='submit'
      disabled={isLoading}
      className={clsx(
        (props.disabled ?? false) ? 'cursor-default opacity-50 hover:brightness-100' : 'cursor-pointer hover:brightness-110',
        'relative flex h-full w-full items-center justify-center rounded-3xl py-2',
        'bg-sinopia font-medium text-white'
      )}
      {...rest}
    >
      <Spinner
        className={clsx(
          'border-white',
          isLoading ? 'opacity-100' : 'opacity-0'
        )}
      />

      <span
        className={clsx(
          isLoading ? 'opacity-0' : 'opacity-100'
        )}
      >
        {text}
      </span>
    </button>
  )
}

export default SubmitButton
