import React from 'react'
import { Toast } from '@base-ui/react'
import { CgClose } from 'react-icons/cg'
import clsx from 'clsx'

export const Toaster = () => {
  const { toasts } = Toast.useToastManager()

  return (
    <Toast.Portal>
      <Toast.Viewport
        className={clsx(
          'fixed z-1',
          'top-auto right-4 bottom-4 left-auto w-62.5',
          'sm:right-8 sm:bottom-8 sm:w-75'
        )}
      >
        {toasts
          .map(toast => (
            <Toast.Root
              key={toast.id}
              toast={toast}
              className={clsx(
                '[--gap:0.75rem]',
                '[--peek:0.75rem]',
                '[--scale:calc(max(0,1-(var(--toast-index)*0.1)))]',
                '[--shrink:calc(1-var(--scale))]',
                '[--height:var(--toast-frontmost-height,var(--toast-height))]',
                '[--offset-y:calc(var(--toast-offset-y)*-1+calc(var(--toast-index)*var(--gap)*-1)+var(--toast-swipe-movement-y))]',
                'absolute right-0 bottom-0 left-auto',
                'z-[calc(1000-var(--toast-index))]',
                'mr-0 w-full origin-bottom',
                '[transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)-(var(--toast-index)*var(--peek))-(var(--shrink)*var(--height))))_scale(var(--scale))]',
                'border-surface text-light rounded-lg border bg-white bg-clip-padding p-4 shadow-md select-none',
                'after:absolute after:top-full after:left-0 after:h-[calc(var(--gap)+1px)] after:w-full after:content-[\'\']',
                'data-[ending-style]:opacity-0',
                'data-[expanded]:[transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--offset-y)))]',
                'data-[limited]:opacity-0',
                'data-[starting-style]:[transform:translateY(150%)]',
                '[&[data-ending-style]:not([data-limited]):not([data-swipe-direction])]:[transform:translateY(150%)]',
                'data-[ending-style]:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))]',
                'data-[expanded]:data-[ending-style]:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))]',
                'data-[ending-style]:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))]',
                'data-[expanded]:data-[ending-style]:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))]',
                'data-[ending-style]:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))]',
                'data-[expanded]:data-[ending-style]:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))]',
                'data-[ending-style]:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))]',
                'data-[expanded]:data-[ending-style]:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))]',
                'h-[var(--height)] data-[expanded]:h-[var(--toast-height)]',
                '[transition:transform_0.5s_cubic-bezier(0.22,1,0.36,1),opacity_0.5s,height_0.15s]'
              )}
            >

              <Toast.Content
                className={clsx(
                  'overflow-hidden transition-opacity duration-250',
                  'data-behind:pointer-events-none data-behind:opacity-0',
                  'data-expanded:pointer-events-auto data-expanded:opacity-100'
                )}
              >
                <Toast.Title
                  className='text-[0.975rem] leading-5 font-medium'
                />

                <Toast.Description
                  className='text-[0.925rem] leading-5'
                />

                <Toast.Close
                  aria-label='Close'
                  className={clsx(
                    'absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded border-none bg-transparent',
                    'hover:bg-black/10'
                  )}
                >
                  <CgClose size={14} />
                </Toast.Close>
              </Toast.Content>
            </Toast.Root>
          ))}
      </Toast.Viewport>
    </Toast.Portal>
  )
}
