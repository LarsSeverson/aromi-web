import clsx from 'clsx'
import React from 'react'

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  horizontal?: boolean | undefined
}

const Divider = (props: DividerProps) => {
  const { horizontal, className, ...rest } = props

  return (
    <div
      className={clsx(
        'w-[1px] h-[1px] bg-gray-200',
        (horizontal ?? false) ? 'w-full' : 'h-full',
        className
      )}
      {...rest}
    />
  )
}

export default Divider
