import { Popover } from '@base-ui/react'
import React from 'react'
import { useInputPopoverContext } from './InputPopoverContext'

export interface InputPopoverPositionerProps extends Popover.Positioner.Props {}

export const InputPopoverPositioner = (props: InputPopoverPositionerProps) => {
  const { inputRef } = useInputPopoverContext()

  return (
    <Popover.Positioner
      {...props}
      anchor={inputRef}
    />
  )
}
