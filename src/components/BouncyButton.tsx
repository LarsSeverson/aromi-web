import React from 'react'
import clsx from 'clsx'

export interface BouncyButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

const BouncyButton = (props: BouncyButtonProps) => {
  const { children, className, ...rest } = props

  return (
    <div
      className='cursor-pointer'
      {...rest}
    >
      <div className={clsx(`
        transition-transform 
        transform active:scale-95
      hover:bg-gray-200
        p-3
        rounded-lg
        flex
        justify-center
      `,
      className)}
      >
        {children}
      </div>
    </div>
  )
}

export default BouncyButton
