import { Dialog } from '@base-ui-components/react'
import React from 'react'
import DialogBackdrop from './DialogBackdrop'
import DialogPopup from './DialogPopup'

export interface ConfirmationDialogProps extends Dialog.Root.Props {
  text?: string
  subtext?: string
  cancelText?: string
  confirmText?: string

  onConfirm?: () => void
}

const ConfirmationDialog = (props: ConfirmationDialogProps) => {
  const {
    text = 'Are you sure?',
    subtext = 'You\'ll lose any edits you\'ve made. This can\'t be undone!',
    cancelText = 'Cancel',
    confirmText = 'Delete',
    onConfirm,
    children,
    ...rest
  } = props

  return (
    <Dialog.Root
      {...rest}
    >
      {children}

      <Dialog.Portal>
        <DialogBackdrop />

        <DialogPopup
          className='flex flex-col gap-5'
          onClick={(e) => { e.stopPropagation() }}
        >
          <Dialog.Title
            className='text-center text-xl'
          >
            {text}
          </Dialog.Title>

          <span
            className='text-md text-center text-black/90'
          >
            {subtext}
          </span>

          <div
            className='flex gap-3'
          >
            <Dialog.Close
              className='bg-empty text-md flex-1 cursor-pointer rounded-lg py-3 leading-none hover:bg-gray-200'
            >
              {cancelText}
            </Dialog.Close>

            <Dialog.Close
              className='flex-1 cursor-pointer rounded-lg bg-red-800 text-white hover:bg-red-700'
              onClick={onConfirm}
            >
              {confirmText}
            </Dialog.Close>
          </div>
        </DialogPopup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default ConfirmationDialog
