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
        'transition-transform transform active:scale-95 hover:bg-gray-200 p-3 rounded-lg flex justify-center select-none',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

export default BouncyButton
