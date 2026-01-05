import React from 'react'
import { InputPopoverContext } from './InputPopoverContext'

export interface InputPopoverRootProps<T> {
  items?: T[]
  children?: React.ReactNode
}

export const InputPopoverRoot = <T, >(props: InputPopoverRootProps<T>) => {
  const {
    items = [],

    children
  } = props

  const inputRef = React.useRef<HTMLInputElement>(null)
  const [inputRect, setInputRect] = React.useState(new DOMRect())

  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false)
  const [isInputFocused, setIsInputFocused] = React.useState(false)
  const [activeIndex, setActiveIndex] = React.useState(-1)

  const itemsCount = items.length

  const handleOnIsPopoverOpenChange = (open: boolean) => {
    setIsPopoverOpen(isInputFocused || open)
  }

  const handleOnIsInputFocusedChange = (focused: boolean) => {
    setIsInputFocused(focused)
  }

  const handleNavigateUpList = () => {
    setActiveIndex(prev => Math.max(prev - 1, 0))
  }

  const handleNavigateDownList = () => {
    setActiveIndex(prev => Math.min(prev + 1, itemsCount - 1))
  }

  const handleOnResetActiveIndex = () => {
    setActiveIndex(-1)
  }

  const handleOnInputResize = (rect: DOMRect) => {
    setInputRect(rect)
  }

  React.useEffect(
    () => {
      setActiveIndex(-1)
    },
    [items, isPopoverOpen]
  )

  return (
    <InputPopoverContext.Provider
      value={{
        items,

        isPopoverOpen,
        isInputFocused,
        activeIndex,

        inputRef,
        inputRect,

        navigateUpList: handleNavigateUpList,
        navigateDownList: handleNavigateDownList,

        onIsPopoverOpenChange: handleOnIsPopoverOpenChange,
        onIsInputFocusedChange: handleOnIsInputFocusedChange,
        onResetActiveIndex: handleOnResetActiveIndex,

        onInputResize: handleOnInputResize
      }}
    >
      {children}
    </InputPopoverContext.Provider>
  )
}
