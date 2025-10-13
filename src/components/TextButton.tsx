import clsx from 'clsx'
import React from 'react'
import Spinner from './Spinner'

export interface TextButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  isLoading?: boolean
}

const TextButton = (props: TextButtonProps) => {
  const { text, disabled = false, isLoading = false, ...rest } = props

  const isDisabled = isLoading || disabled

  return (
    <button
      type='button'
      className={clsx(
        'box-border flex items-center justify-center relative',
        'h-10 p-3 px-4 m-0 outline-0 border rounded-md',
        'bg-empty border-surface2 active:bg-black/10',
        'leading-6 text-light2 select-none',
        isDisabled ? 'hover:bg-empty' : 'hover:bg-black/10'
      )}
      disabled={isDisabled}
      {...rest}
    >
      <div
        className={clsx(
          'opacity-0 absolute',
          isLoading && 'opacity-100'
        )}
      >
        <Spinner />
      </div>

      <span
        className={clsx(
          isLoading && 'opacity-0'
        )}
      >
        {text}
      </span>
    </button>
  )
}

export default TextButton
