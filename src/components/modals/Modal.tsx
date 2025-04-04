import React from 'react'
import { Dialog, DialogBackdrop, DialogPanel, type DialogProps } from '@headlessui/react'
import { IoClose } from 'react-icons/io5'
import clsx from 'clsx'
import BouncyButton from '../common/BouncyButton'

export interface ModalProps extends DialogProps {
  open: boolean
  showClose?: boolean | undefined
  className?: string | undefined
  onClose: (open: boolean) => void

  children?: React.ReactNode
}

const Modal = (props: ModalProps) => {
  const { open, showClose, className, onClose, children, ...rest } = props

  const handleOnClose = () => {
    onClose(false)
  }

  return (
    <Dialog
      open={open}
      className='relative z-50 min-w-64'
      onClose={handleOnClose}
      {...rest}
    >
      <DialogBackdrop
        className={clsx(
          'fixed inset-0 bg-black/30 backdrop-blur-sm'
        )}
      />
      <div
        className='fixed inset-0 flex items-center justify-center m-16'
      >
        <DialogPanel
          className={clsx(
            'space-y-4 bg-white rounded-3xl',
            className
          )}
        >
          <div className='h-full flex flex-col'>
            {(showClose ?? true) && (
              <BouncyButton
                className='px-1 py-1 ml-auto'
                onClick={handleOnClose}
              >
                <IoClose size={35} />
              </BouncyButton>
            )}
            {children}
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}

export default Modal
