import clsx from 'clsx'
import React from 'react'

export interface SpinnerProps {
  size?: number | undefined
  color?: string | undefined
}

const Spinner = (props: SpinnerProps) => {
  const { size = 20, color = 'white' } = props

  const className = clsx(
    'border-t-2 border-b-2 rounded-full animate-spin',
    `border-${color}`
  )

  return (
    <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
      <div className={className} style={{ width: size, height: size }} />
    </div>
  )
}

export default Spinner
