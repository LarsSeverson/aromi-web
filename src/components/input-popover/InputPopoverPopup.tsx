import { Popover } from '@base-ui/react'
import { useInputPopoverContext } from './InputPopoverContext'

export interface InputPopoverPopupProps extends Popover.Popup.Props {
  equalWidth?: boolean
}

export const InputPopoverPopup = (props: InputPopoverPopupProps) => {
  const { equalWidth = true, ...rest } = props

  const { inputRect } = useInputPopoverContext()

  return (
    <Popover.Popup
      style={{ width: equalWidth ? inputRect.width : undefined }}
      {...rest}
    />
  )
}