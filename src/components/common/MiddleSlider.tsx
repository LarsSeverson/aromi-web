import React, { useState, useRef, useEffect, useMemo, useLayoutEffect, type SyntheticEvent } from 'react'

export interface MiddleSliderProps {
  value?: number
  min?: number
  max?: number
  focusPoints?: number[]
  onValueChange?: (value: number) => void
  onInteracted?: () => void
}

const MiddleSlider = (props: MiddleSliderProps) => {
  const min = -100
  const max = 100
  const [value, setValue] = useState(0)

  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    setValue(Number(e.currentTarget.value))
  }

  return (
    <div
      className='relative w-full flex items-center'
    >
      <div
        className='absolute top-0 w-full h-full rounded-full overflow-hidden flex z-0'
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
      </div>
      <input
        type='range'
        min={min}
        max={max}
        value={value}
        className='middle-slider'
        onChange={handleChange}
      />

    </div>
  )
}

export default MiddleSlider
