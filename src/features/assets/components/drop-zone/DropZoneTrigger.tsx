import type React from 'react'
import { useDropZoneContext } from '../../contexts/DropZoneContext'

export interface DropZoneTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

export const DropZoneTrigger = (props: DropZoneTriggerProps) => {
  const {
    children,
    ...rest
  } = props

  const context = useDropZoneContext()

  return (
    <button
      type="button"
      disabled={context.isDisabled}
      onClick={context.onOpen}
      {...rest}
    >
      {children}
    </button>
  )
}