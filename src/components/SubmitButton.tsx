import clsx from 'clsx'
import React from 'react'
import Spinner from './Spinner'

export interface SubmitButtonProps extends React.ComponentProps<'button'> {
  isLoading?: boolean
  text?: string
}

const SubmitButton = (props: SubmitButtonProps) => {
  const { isLoading, text = 'Submit', ...rest } = props

  return (
    <button
      type='submit'
      disabled={isLoading}
      className={clsx(
        'flex h-full w-full items-center justify-center rounded-3xl py-2',
        'bg-sinopia cursor-pointer font-medium text-white hover:brightness-110'
      )}
      {...rest}
    >
      {isLoading ?? false
        ? <Spinner
          className='border-white'
        />
        :
        (
          <span>
            {text}
          </span>
        )}
    </button>
  )
}

export default SubmitButton
