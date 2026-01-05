import React from 'react'
import { useInputPopoverContext } from './InputPopoverContext'

export interface InputPopoverItemProps extends React.HTMLAttributes<HTMLDivElement> {
  index?: number
  scrollIntoView?: boolean

  onActiveChange?: (isActive: boolean) => void
}

export const InputPopoverItem = (props: InputPopoverItemProps) => {
  const {
    index,
    scrollIntoView = true,

    children,

    onClick,
    onActiveChange,

    ...rest
  } = props

  const {
    activeIndex,
    onIsPopoverOpenChange
  } = useInputPopoverContext()

  const itemRef = React.useRef<HTMLDivElement>(null)
  const isActive = React.useMemo(() => activeIndex === index, [activeIndex, index])

  const handleOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
    onClick?.(event)
    onIsPopoverOpenChange(false)
  }

  React.useEffect(
    () => {
      onActiveChange?.(isActive)

      const shouldScrollIntoView = isActive && itemRef.current != null && scrollIntoView
      if (shouldScrollIntoView) {
        itemRef.current!.scrollIntoView({ block: 'center', behavior: 'smooth' })
      }
    },
    [isActive, scrollIntoView, onActiveChange]
  )

  return (
    <div
      ref={itemRef}
      role='option'
      aria-selected={isActive}
      {...rest}
      onClick={handleOnClick}
    >
      {children}
    </div>
  )
}
