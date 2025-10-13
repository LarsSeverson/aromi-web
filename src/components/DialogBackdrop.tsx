import { Dialog } from '@base-ui-components/react'
import clsx from 'clsx'
import React from 'react'

const DialogBackdrop = () => {
  return (
    <Dialog.Backdrop
      className={clsx(
        'fixed inset-0 bg-black',
        'opacity-20 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 dark:opacity-70',
        'transition-all duration-150'
      )}
    />
  )
}

export default DialogBackdrop
