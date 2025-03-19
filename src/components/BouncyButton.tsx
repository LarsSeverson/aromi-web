import React from 'react'
import clsx from 'clsx'

export interface BouncyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

const BouncyButton = (props: BouncyButtonProps) => {
  const { children, className, ...rest } = props

  return (
    <button
      type='button'
      className={clsx(
        'transition-transform active:scale-95 backdrop-brightness-100 hover:backdrop-brightness-90 p-3 flex justify-center items-center select-none relative',
        className,
        ((className?.includes('rounded')) ?? false) ? '' : 'rounded-lg'
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

export default BouncyButton
