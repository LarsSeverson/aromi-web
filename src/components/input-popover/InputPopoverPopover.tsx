import { Popover } from '@base-ui/react'
import React from 'react'
import { useInputPopoverContext } from './InputPopoverContext'

export interface InputPopoverPopoverProps extends Popover.Root.Props {}

const InputPopoverPopover = (props: InputPopoverPopoverProps) => {
  const { isPopoverOpen, onIsPopoverOpenChange } = useInputPopoverContext()

  return (
    <Popover.Root
      {...props}
      open={isPopoverOpen}
      onOpenChange={onIsPopoverOpenChange}
    />
  )
}

export default InputPopoverPopover
