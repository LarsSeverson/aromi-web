import { Dialog } from '@base-ui-components/react'
import clsx from 'clsx'
import React from 'react'
import { isMobile } from 'react-device-detect'

export interface DialogPopupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const DialogPopup = (props: DialogPopupProps) => {
  const { children, className, ...rest } = props

  return (
    <Dialog.Popup
      className={clsx(
        className,
        isMobile && 'inset-0 mt-0 h-screen min-w-screen p-0',
        'fixed -mt-8 min-w-104 rounded-lg p-6',
        'bg-white',
        'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
        'transition-all duration-150',
        'data-ending-style:scale-90 data-ending-style:opacity-0 data-starting-style:scale-90 data-starting-style:opacity-0'
      )}
      {...rest}
    >
      {children}
    </Dialog.Popup>
  )
}

export default DialogPopup
