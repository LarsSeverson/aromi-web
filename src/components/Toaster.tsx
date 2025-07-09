import React from 'react'
import { Toast } from '@base-ui-components/react'
import { CgClose } from 'react-icons/cg'

export const Toaster = () => {
  const { toasts } = Toast.useToastManager()

  return (
    <Toast.Portal>
      <Toast.Viewport
        className='fixed bottom-4 right-4 z-50 flex flex-col gap-2'
      >
        {toasts
          .map(toast => (
            <Toast.Root
              key={toast.id}
              toast={toast}
              className='relative min-w-80 rounded-xl py-3 px-4 shadow-xl backdrop-blur-2xl bg-gray-950/60 text-white'
            >
              <Toast.Title
                className='font-semibold text-sm'
              />
              <Toast.Description
                className='text-sm'
              />
              <Toast.Close
                aria-label='Close'
                className='absolute top-2 right-2 text-white hover:backdrop-brightness-50 hover:backdrop-blur-2xl rounded-md p-1 transition-all duration-[3ms]'
              >
                <CgClose />
              </Toast.Close>
            </Toast.Root>
          ))}
      </Toast.Viewport>
    </Toast.Portal>
  )
}
