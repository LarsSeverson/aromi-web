import { Dialog } from '@base-ui/react'
import clsx from 'clsx'
import React from 'react'

export interface DialogBackdropProps extends Dialog.Backdrop.Props {}

const DialogBackdrop = (props: DialogBackdropProps) => {

  return (
    <Dialog.Backdrop
      className={clsx(
        'fixed inset-0 bg-black',
        'opacity-20 data-ending-style:opacity-0 data-starting-style:opacity-0',
        'transition-all duration-150'
      )}
      {...props}
    />
  )
}

export default DialogBackdrop
