import React from 'react'

export interface DividerProps {
  horizontal?: boolean | undefined
}

const Divider = (props: DividerProps) => {
  const { horizontal } = props

  return (
    <div className={`
      w-[1px] 
      h-[1px]
      ${(horizontal ?? false) ? 'w-full' : 'h-full '}
      bg-gray-200
    `}
    />
  )
}

export default Divider
