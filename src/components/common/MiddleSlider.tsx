import React, { useState, type SyntheticEvent } from 'react'

export interface MiddleSliderProps {
  value?: number
  label?: string
  lessLabel?: string
  greaterLabel?: string
  Icon?: React.ReactNode
  onValueChange?: (value: number) => void
  onInteracted?: () => void
}

const MiddleSlider = (props: MiddleSliderProps) => {
  const {
    value: propValue,
    label,
    lessLabel,
    greaterLabel,
    Icon,
    onValueChange, onInteracted
  } = props

  const min = -100
  const max = 100
  const [value, setValue] = useState(propValue ?? 0)

  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    setValue(Number(value))
    onInteracted?.()
    onValueChange?.(Number(value))
  }

  return (
    <div
      className='w-full flex flex-col items-center justify-center'
    >
      {Icon}
      <div>
        <h3
          className='mb-5 font-pd'
        >
          {label}
        </h3>
      </div>

      <div
        className='w-full h-5 relative rounded-full'
      >
        <div
          className='absolute top-0 w-full h-full rounded-full overflow-hidden flex z-0 pointer-events-none'
        >
          <div
            className='flex-1 relative flex flex-row-reverse'
          >
            <div
              className='absolute right-0 h-full bg-atomicPink'
              style={{ width: `${(Math.abs(Math.min(value + 2, 0)))}%` }}
            />
          </div>
          <div
            className='flex-1 relative'
          >
            <div
              className='absolute left-0 h-full bg-sinopia'
              style={{ width: `${Math.max(value - 2, 0)}%` }}
            />
          </div>
          <div
            className='absolute left-0 right-0 h-full w-full z-20 flex justify-center items-center'
          >
            <datalist
              id='markers'
              className='w-full h-3 z-20 flex justify-between overflow-hidden opacity-50'
            >
              <option
                value={-100}
              />
              <option
                value={-50}
                className='bg-gray-400 w-[2px] h-full rounded-full'
              />
              <option
                value={0}
                className='bg-gray-400 w-[2px] h-full rounded-full'
              />
              <option
                value={50}
                className='bg-gray-400 w-[2px] h-full rounded-full'
              />
              <option
                value={100}
              />
            </datalist>
          </div>
        </div>
        <input
          type='range'
          min={min}
          max={max}
          value={value}
          list='markers'
          className='middle-slider h-full'
          onChange={handleChange}
        />
      </div>
      <div className='w-full flex justify-between px-2'>
        <span
          className='text-md font-pd opacity-60'
        >
          {lessLabel}
        </span>
        <span
          className='text-md font-pd opacity-60'
        >
          {greaterLabel}
        </span>
      </div>
    </div>
  )
}

export default MiddleSlider
