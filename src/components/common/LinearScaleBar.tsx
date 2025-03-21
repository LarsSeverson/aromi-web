import clsx from 'clsx'
import React from 'react'

export interface LinearScaleBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  color?: string
}

const LinearScaleBar = (props: LinearScaleBarProps) => {
  const { value, color = 'black', ...rest } = props

  if (value > 100.0 || value < 0.0) {
    return null
  }

  return (
    <div
      {...rest}
      className='bg-transparent rounded-full h-4 overflow-hidden flex flex-row flex-1'
    >
      <div
        className={clsx(
          'w-full h-full rounded-full'
        )}
        style={{ backgroundColor: color, width: `${value}%` }}
      />
    </div>
  )
}

export default LinearScaleBar
