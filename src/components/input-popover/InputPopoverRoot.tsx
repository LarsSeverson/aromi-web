import React from 'react'
import { InputPopoverContext } from './InputPopoverContext'

export interface InputPopoverRootProps<T> {
  items?: T[]
  children?: React.ReactNode
}

const InputPopoverRoot = <T, >(props: InputPopoverRootProps<T>) => {
  const {
    items = [],

    children
  } = props

  const inputRef = React.useRef<HTMLInputElement>(null)

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

  React.useEffect(
    () => {
      setActiveIndex(-1)
    },
    [items, isPopoverOpen]
  )

  return (
    <InputPopoverContext.Provider
      value={{
        isPopoverOpen,
        isInputFocused,
        activeIndex,
        inputRef,

        items,

        navigateUpList: handleNavigateUpList,
        navigateDownList: handleNavigateDownList,

        onIsPopoverOpenChange: handleOnIsPopoverOpenChange,
        onIsInputFocusedChange: handleOnIsInputFocusedChange,
        onResetActiveIndex: handleOnResetActiveIndex
      }}
    >
      {children}
    </InputPopoverContext.Provider>
  )
}

export default InputPopoverRoot
