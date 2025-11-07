import React from 'react'
import clsx from 'clsx'

export interface BouncyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

const BouncyButton = (props: BouncyButtonProps) => {
  const { children, disabled, className, ...rest } = props

  return (
    <button
      type='button'
      className={clsx(
        className,
        'cursor-pointer',
        'flex items-center justify-center p-3 backdrop-brightness-100 select-none hover:backdrop-brightness-95',
        ((className?.includes('rounded')) ?? false) ? '' : 'rounded-lg',
        (disabled ?? false) && 'cursor-not-allowed opacity-40'
      )}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}

export default BouncyButton
