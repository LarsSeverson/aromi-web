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
        className,
        'flex h-3 flex-1 flex-row overflow-hidden rounded-full md:h-4'
      )}
      {...rest}
      style={{ ...style, backgroundColor: trackColor }}
    >
      <div
        className={clsx(
          'h-full min-w-4 rounded-full'
        )}
        style={{ backgroundColor: color, width: `${value}%` }}
      />
    </div>
  )
}

export default LinearScaleBar
