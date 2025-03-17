import React from 'react'
import { Dialog, DialogBackdrop, DialogPanel, type DialogProps } from '@headlessui/react'
import { IoClose } from 'react-icons/io5'
import BouncyButton from '../BouncyButton'

export interface ModalProps extends DialogProps {
  open: boolean
  onClose: (open: boolean) => void

  children?: React.ReactNode
}

const Modal = (props: ModalProps) => {
  const { open, onClose, children, ...rest } = props

  const handleOnClose = () => {
    onClose(false)
  }

  return (
    <Dialog
      open={open}
      className='relative z-50'
      onClose={handleOnClose}
      {...rest}
    >
      <DialogBackdrop
        className='fixed inset-0 bg-black/30 backdrop-blur-sm'
      />
      <div
        className='fixed inset-0 flex w-screen items-center justify-center'
      >
        <DialogPanel
          className='max-w-lg space-y-4 bg-white rounded-3xl p-4'
        >
          <div className='max-w-lg relative'>
            <BouncyButton
              className='absolute top-0 right-0 px-1 py-1'
              onClick={handleOnClose}
            >
              <IoClose size={35} />
            </BouncyButton>
            {children}
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}

export default Modal
