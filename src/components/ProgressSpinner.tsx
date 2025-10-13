import clsx from 'clsx'
import React from 'react'

export interface ProgressSpinnerProps {
  percent: number
  size?: number
}

const ProgressSpinner = (props: ProgressSpinnerProps) => {
  const { percent, size = 8 } = props
  const durationMs = 300
  const p = Math.max(0, Math.min(100, percent))
  const r = 45
  const c = 2 * Math.PI * r
  const offset = c * (1 - p / 100)

  return (
    <div className='inset-0 flex items-center justify-end'>
      <div className={clsx('aspect-square', `h-${size}`)}>
        <svg viewBox='0 0 100 100' className='w-full h-full'>
          <circle
            cx='50'
            cy='50'
            r={r}
            stroke='rgba(255,255,255,0.25)'
            strokeWidth='4'
            fill='none'
          />

          <circle
            cx='50'
            cy='50'
            r={r}
            stroke='white'
            strokeWidth='8'
            strokeLinecap='round'
            fill='none'
            strokeDasharray={c}
            strokeDashoffset={offset}
            transform='rotate(-90 50 50)'
            style={{ transition: `stroke-dashoffset ${durationMs}ms ease` }}
          />
        </svg>
      </div>
    </div>
  )
}

export default ProgressSpinner
