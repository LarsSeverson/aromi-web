import React from 'react'
import { Toast } from '@base-ui-components/react'
import { CgClose } from 'react-icons/cg'
import clsx from 'clsx'

export const Toaster = () => {
  const { toasts } = Toast.useToastManager()

  return (
    <Toast.Portal>
      <Toast.Viewport
        className={clsx(
          'fixed z-[1]',
          'w-[250px] bottom-4 right-4 left-auto top-auto',
          'sm:bottom-8 sm:right-8 sm:w-[300px]'
        )}
      >
        {toasts
          .map(toast => (
            <Toast.Root
              key={toast.id}
              toast={toast}
              className={clsx(
                'absolute left-0 right-0 bottom-0 mx-auto mr-0 w-full',
                'box-border p-4 rounded-lg shadow-md',
                'bg-white text-light border border-surface',
                'bg-clip-padding',
                'select-none cursor-default',
                'transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
                'z-[calc(1000-var(--toast-index))]',
                'data-[expanded]:translate-x-[var(--toast-swipe-movement-x)]',
                'data-[expanded]:translate-y-[calc(var(--toast-offset-y)*-1+var(--toast-index)*-0.75rem+var(--toast-swipe-movement-y))]',
                'data-[starting-style]:translate-y-[150%]',
                'data-[ending-style]:translate-y-[150%]',
                'data-[limited]:opacity-0',
                'data-[ending-style]:opacity-0',
                'data-[ending-style][data-swipe-direction=up]:translate-y-[calc(var(--toast-swipe-movement-y)-150%)]',
                'data-[ending-style][data-swipe-direction=down]:translate-y-[calc(var(--toast-swipe-movement-y)+150%)]',
                'data-[ending-style][data-swipe-direction=left]:translate-x-[calc(var(--toast-swipe-movement-x)-150%)]',
                'data-[ending-style][data-swipe-direction=right]:translate-x-[calc(var(--toast-swipe-movement-x)+150%)]'
              )}
              style={{
                transform: 'translateX(var(--toast-swipe-movement-x)) translateY(calc(var(--toast-swipe-movement-y) + (min(var(--toast-index), 10) * -20%))) scale(calc(max(0, 1 - (var(--toast-index) * 0.1))))'
              }}
            >

              <Toast.Title
                className='text-light font-medium text-[0.975rem] leading-5 m-0'
              />

              <Toast.Description
                className='text-light3 text-[0.925rem] leading-5 m-0'
              />

              <Toast.Close
                aria-label='Close'
                className={clsx(
                  'absolute top-2 right-2',
                  'w-5 h-5 flex items-center justify-center',
                  'border-none bg-transparent rounded',
                  'hover:bg-black/10'
                )}
              >
                <CgClose
                  size={14}
                />
              </Toast.Close>
            </Toast.Root>
          ))}
      </Toast.Viewport>
    </Toast.Portal>
  )
}
