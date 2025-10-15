import clsx from 'clsx'
import React from 'react'

export interface SpinnerProps extends React.ComponentProps<'div'> {
  size?: number
}

const Spinner = (props: SpinnerProps) => {
  const { size = 6, className, ...rest } = props

  return (
    <div
      className='absolute inset-0 flex items-center justify-center'
    >
      <div
        className={clsx(
          className,
          'animate-spin rounded-full aspect-square border-t-2 border-black border-solid',
          `h-${size}`
        )}
        {...rest}
      />
    </div>
  )
}

export default Spinner
