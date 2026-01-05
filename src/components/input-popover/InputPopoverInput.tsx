import { Input } from '@base-ui/react'
import React from 'react'
import { useInputPopoverContext } from './InputPopoverContext'
import { useResizeable } from '@/hooks/useResizable'
import type { InputPopoverKeyDownEvent } from './types'

export interface InputPopoverInputProps<T = unknown> extends Omit<Input.Props, 'onKeyDown'> {
  onKeyDown?: (event: InputPopoverKeyDownEvent<T>) => void
}

export const InputPopoverInput = <T, >(props: InputPopoverInputProps<T>) => {
  const {
    onKeyDown,
    onFocus,
    onBlur,
    onValueChange,
    ...rest
  } = props

  const {
    items,
    activeIndex,
    inputRef,

    isPopoverOpen,

    navigateUpList,
    navigateDownList,

    onIsPopoverOpenChange,
    onIsInputFocusedChange,
    onInputResize
  } = useInputPopoverContext()

  const { rect } = useResizeable({ ref: inputRef })

  const handleKeyDown = (event: Parameters<NonNullable<Input.Props['onKeyDown']>>[0]) => {
    const item = (items?.at(activeIndex) ?? null) as T | null
    const customEvent: InputPopoverKeyDownEvent<T> = Object.assign(event, { item })

    onKeyDown?.(customEvent)

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      if (!isPopoverOpen) {
        onIsPopoverOpenChange(true)
        return
      }

      navigateDownList()
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      navigateUpList()
    }

    if (event.key === 'Escape') {
      event.preventDefault()
      onIsInputFocusedChange(false)
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

  React.useEffect(
    () => {
      if (rect != null) {
        onInputResize(rect)
      }
    },
    [rect, onInputResize]
  )

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
