import clsx from 'clsx'
import React from 'react'

export interface LinearScaleBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  color?: string
  trackColor?: string
}

const LinearScaleBar = (props: LinearScaleBarProps) => {
  const { value, color = 'black', trackColor, className, style, ...rest } = props

  if (value > 100.0 || value < 0.0) {
    return null
  }

  return (
    <div
      className={clsx(
        'rounded-full h-4 overflow-hidden flex flex-row flex-1',
        className
      )}
      {...rest}
      style={{ ...style, backgroundColor: trackColor }}
    >
      <div
        className={clsx(
          'h-full rounded-full min-w-4'
        )}
        style={{ backgroundColor: color, width: `${value}%` }}
      />
    </div>
  )
}

export default LinearScaleBar
