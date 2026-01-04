import React from 'react'

export interface InputPopoverContextValue<T> {
  isPopoverOpen: boolean
  isInputFocused: boolean
  activeIndex: number
  inputRef: React.RefObject<HTMLInputElement | null>

  items: T[]

  navigateUpList: () => void
  navigateDownList: () => void

  onIsPopoverOpenChange: (isOpen: boolean) => void
  onIsInputFocusedChange: (isFocused: boolean) => void
  onResetActiveIndex?: () => void
}

export const InputPopoverContext = React.createContext<InputPopoverContextValue<unknown> | undefined>(undefined)

export const useInputPopoverContext = <T, >() => {
  const context = React.useContext(InputPopoverContext)
  if (context == null) {
    throw new Error('useInputPopoverContext must be used within a InputPopoverProvider')
  }

  return context as InputPopoverContextValue<T>
}