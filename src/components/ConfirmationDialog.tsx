import { Dialog } from '@base-ui-components/react'
import React from 'react'
import DialogBackdrop from './DialogBackdrop'
import DialogPopup from './DialogPopup'
import TextButton from './TextButton'

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
    ...rest
  } = props

  return (
    <Dialog.Root
      {...rest}
    >
      <Dialog.Portal>
        <DialogBackdrop />

        <DialogPopup
          className='flex flex-col gap-5'
          onClick={(e) => { e.stopPropagation() }}
        >
          <Dialog.Title
            className='text-xl text-center '
          >
            {text}
          </Dialog.Title>

          <span
            className='text-md text-light/90'
          >
            {subtext}
          </span>

          <div
            className='flex gap-3'
          >
            <Dialog.Close
              className='rounded-lg bg-empty text-md leading-none p-3 flex-1'
            >
              {cancelText}
            </Dialog.Close>

            <TextButton
              className='flex-1 bg-red-800 rounded-lg text-white'
              text={confirmText}
              onClick={onConfirm}
            />
          </div>
        </DialogPopup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default ConfirmationDialog
