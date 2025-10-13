import clsx from 'clsx'
import React from 'react'
import Spinner from './Spinner'

export interface SubmitButtonProps {
  isLoading?: boolean
  text?: string
}

const SubmitButton = (props: SubmitButtonProps) => {
  const { isLoading, text = 'Submit' } = props

  return (
    <button
      type='submit'
      disabled={isLoading}
      className={clsx(
        'w-full rounded-3xl h-full py-2 flex items-center justify-center',
        'bg-sinopia text-white hover:brightness-110 font-medium cursor-pointer'
      )}
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
