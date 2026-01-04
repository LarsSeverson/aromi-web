import React from 'react'
import { useInputPopoverContext } from './InputPopoverContext'

export interface InputPopoverItemProps {
  index: number

  className?: string
  children: React.ReactNode | ((props: { isActive: boolean }) => React.ReactNode)

  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const InputPopoverItem = (props: InputPopoverItemProps) => {
  const {
    index,
    children,
    className,
    onClick,
    ...rest
  } = props

  const {
    activeIndex,
    onIsPopoverOpenChange
  } = useInputPopoverContext()

  const isActive = activeIndex === index

  const handleOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
    onClick?.(event)
    onIsPopoverOpenChange(false)
  }

  return (
    <div
      {...rest}
      role='option'
      aria-selected={isActive}
      onClick={handleOnClick}
    >
      {typeof children === 'function'
        ? children({ isActive })
        : children}
    </div>
  )
}

export default InputPopoverItem