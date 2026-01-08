import { Dialog } from '@base-ui/react'
import React, { type SyntheticEvent } from 'react'
import DialogBackdrop from './DialogBackdrop'
import DialogPopup from './DialogPopup'
import Spinner from './Spinner'
import clsx from 'clsx'

export interface ConfirmationDialogProps extends Dialog.Root.Props {
  text?: string
  subtext?: string
  cancelText?: string
  confirmText?: string

  children?: React.ReactNode

  onCancel?: () => void
  onConfirm?: () => void | Promise<void>
}

const ConfirmationDialog = (props: ConfirmationDialogProps) => {
  const {
    text = 'Are you sure?',
    subtext = 'You\'ll lose any edits you\'ve made. This can\'t be undone!',
    cancelText = 'Cancel',
    confirmText = 'Delete',
    onCancel,
    onConfirm,
    children,
    ...rest
  } = props

  const [isOpen, setIsOpen] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  const handleOnConfirm = async () => {
    if (onConfirm == null) return

    setIsLoading(true)
    await onConfirm()
    setIsLoading(false)

    setIsOpen(false)
  }

  const handleOnConfirmClick = (event: SyntheticEvent) => {
    event.stopPropagation()
    event.preventDefault()

    handleOnConfirm()
  }

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={setIsOpen}
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
            className='py-3 text-center text-xl'
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
              disabled={isLoading}
              className='bg-empty text-md flex-1 cursor-pointer rounded-lg py-3 leading-none hover:bg-gray-200'
              onClick={onCancel}
            >
              {cancelText}
            </Dialog.Close>

            <button
              disabled={isLoading}
              className='relative flex-1 cursor-pointer rounded-lg bg-red-800 text-white hover:bg-red-700'
              onClick={handleOnConfirmClick}
            >
              <Spinner
                className={clsx(
                  'border-white',
                  isLoading ? 'opacity-100' : 'opacity-0'
                )}
              />

              <span
                className={clsx(
                  'block',
                  isLoading ? 'opacity-0' : 'opacity-100'
                )}
              >
                {confirmText}
              </span>
            </button>
          </div>
        </DialogPopup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default ConfirmationDialog
