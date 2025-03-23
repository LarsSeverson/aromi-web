import { Colors } from '@/styles/Colors'
import clsx from 'clsx'
import React from 'react'

const getWidths = (value: number) => {
  if (value === 50.0) return { leftWidth: 20, rightWidth: 20 }
  if (value < 50.0) return { leftWidth: value, rightWidth: 0 }
  return { leftWidth: 0, rightWidth: value }
}

export interface MidScaleBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  label?: string
  lessColor?: string
  greaterColor?: string
  lessLabel?: string
  greaterLabel?: string

  Icon?: React.ReactNode
}

const MidScaleBar = (props: MidScaleBarProps) => {
  const {
    value,
    label,
    lessColor = Colors.atomicPink,
    greaterColor = Colors.sinopia,
    lessLabel,
    greaterLabel,
    Icon,
    className,
    ...rest
  } = props

  if (value > 100.0 || value < 0.0) {
    return null
  }

  const { leftWidth, rightWidth } = getWidths(value)

  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center',
        className
      )}
      {...rest}
    >
      {Icon}
      <h6
        className='mb-5 font-pd'
      >
        {label}
      </h6>
      <div
        className='w-full rounded-full h-4 overflow-hidden flex flex-row bg-gray-100'
      >
        <div
          className='flex-1 flex flex-row-reverse'
        >
          <div
            className='rounded-tl-xl rounded-bl-xl'
            style={{
              backgroundColor: lessColor,
              width: `${leftWidth}%`
            }}
          />
        </div>
        <div
          className='flex-1 flex flex-row'
        >
          <div
            className='rounded-tr-xl rounded-br-xl'
            style={{
              backgroundColor: greaterColor,
              width: `${rightWidth}%`
            }}
          />
        </div>
      </div>
      <div
        className='flex flex-row w-full justify-between'
      >
        {(lessLabel != null) && (
          <p
            className='opacity-60 font-pd'
          >
            {lessLabel}
          </p>
        )}
        {(greaterLabel != null) && (
          <p
            className='opacity-60 font-pd'
          >
            {greaterLabel}
          </p>
        )}
      </div>
    </div>
  )
}

export default MidScaleBar
