import { Dialog } from '@base-ui-components/react'
import React, { useState } from 'react'
import Spinner from './Spinner'
import clsx from 'clsx'

export interface ConfirmationDialogProps {
  title?: string | undefined
  confirmationText?: string | undefined

  onRenderTrigger: () => React.ReactNode
  onDelete?: () => void | Promise<void>
}

const ConfirmationDialog = (props: ConfirmationDialogProps) => {
  const {
    title = 'Delete',
    confirmationText = 'Are you sure you want to delete?',

    onRenderTrigger,
    onDelete
  } = props

  const [isLoading, setIsLoading] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleOnDelete = async () => {
    setIsLoading(true)

    await onDelete?.()

    setIsLoading(false)
    setIsDialogOpen(false)
  }

  return (
    <Dialog.Root
      open={isDialogOpen}
      onOpenChange={setIsDialogOpen}
    >
      {onRenderTrigger()}

      <Dialog.Portal>
        <Dialog.Backdrop
          className='bg-black/30 backdrop-blur-sm fixed inset-0'
        />

        <Dialog.Popup
          className='w-[550px] bg-white top-1/2 left-1/2 fixed -translate-x-1/2 -translate-y-1/2 rounded-xl overflow-hidden'
        >
          <Dialog.Title
            className='text-xl text-center font-medium py-4'
          >
            {title}
          </Dialog.Title>

          <div
            className='px-5 pb-5'
          >
            <p
              className='font-medium text-gray-800'
            >
              {confirmationText}
            </p>
          </div>

          <div
            className='flex justify-end gap-3 px-5 bg-white py-2 shadow-[0_0px_10px_0px_rgba(0,0,0,0.1)]'
          >
            <Dialog.Close
              className='bg-empty rounded-full px-7 py-3 hover:brightness-95'
            >
              Cancel
            </Dialog.Close>

            <button
              disabled={isLoading ?? false}
              className={clsx(
                'bg-red-700 text-white rounded-full px-7 py-3 hover:shadow-lg opacity-60 hover:opacity-100'
              )}
              onClick={() => { void handleOnDelete() }}
            >
              {(isLoading ?? false) && <Spinner />}

              <div
                className={clsx((isLoading ?? false) && 'opacity-0')}
              >
                Delete
              </div>
            </button>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default ConfirmationDialog
