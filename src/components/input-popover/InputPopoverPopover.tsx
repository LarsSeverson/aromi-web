import { Popover } from '@base-ui/react'
import React from 'react'
import { useInputPopoverContext } from './InputPopoverContext'

export interface InputPopoverPopoverProps extends Popover.Root.Props {}

export const InputPopoverPopover = (props: InputPopoverPopoverProps) => {
  const { ...rest } = props
  const { isPopoverOpen, onIsPopoverOpenChange } = useInputPopoverContext()

  return (
    <Popover.Root
      {...rest}
      open={isPopoverOpen}
      onOpenChange={onIsPopoverOpenChange}
    />
  )
}
