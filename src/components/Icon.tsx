import React from 'react'
import { ReactSVG } from 'react-svg'

export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  size?: number | undefined
  color?: string | undefined
}

export const Icon = (props: IconProps) => {
  const { src, size, color, ...rest } = props

  return (
    <div
      {...rest}
      style={{ color: color ?? '' }}
    >
      <ReactSVG
        src={src}
        beforeInjection={(svg) => {
          svg.setAttribute('style', `width: ${size}px; height: ${size}px;`)
          svg.querySelectorAll('path').forEach((path) => {
            path.setAttribute('fill', 'currentColor')
          })
        }}
      />
    </div>
  )
}
