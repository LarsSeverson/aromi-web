import { Input } from '@base-ui/react'
import React from 'react'
import { useInputPopoverContext } from './InputPopoverContext'

export interface InputPopoverInputProps extends Input.Props {}

const InputPopoverInput = (props: InputPopoverInputProps) => {
  const {
    onKeyDown,
    onFocus,
    onBlur,
    onValueChange,
    className,
    ...rest
  } = props

  const {
    inputRef,

    isPopoverOpen,

    navigateUpList,
    navigateDownList,

    onIsPopoverOpenChange,
    onIsInputFocusedChange
  } = useInputPopoverContext()

  const handleKeyDown = (event: Parameters<NonNullable<Input.Props['onKeyDown']>>[0]) => {
    onKeyDown?.(event)
    event.preventDefault()

    if (event.key === 'ArrowDown') {
      if (!isPopoverOpen) {
        onIsPopoverOpenChange(true)
        return
      }

      navigateDownList()
    }

    if (event.key === 'ArrowUp') {
      navigateUpList()
    }

    if (event.key === 'Escape') {
      onIsPopoverOpenChange(false)
    }
  }

  const handleOnFocus = (event: Parameters<NonNullable<Input.Props['onFocus']>>[0]) => {
    onFocus?.(event)

    onIsInputFocusedChange(true)
    onIsPopoverOpenChange(true)
  }

  const handleOnBlur = (event: Parameters<NonNullable<Input.Props['onBlur']>>[0]) => {
    onBlur?.(event)

    onIsInputFocusedChange(false)

    if (!event.currentTarget.contains(event.relatedTarget as Node)) {
      onIsPopoverOpenChange(false)
    }
  }

  const handleOnValueChange: Input.Props['onValueChange'] = (value, details) => {
    onValueChange?.(value, details)
    onIsPopoverOpenChange(true)
  }

  return (
    <Input
      {...rest}
      ref={inputRef}
      onKeyDown={handleKeyDown}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      onValueChange={handleOnValueChange}
    />
  )
}

export default InputPopoverInput
