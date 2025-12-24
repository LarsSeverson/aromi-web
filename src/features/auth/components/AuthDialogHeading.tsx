import React from 'react'
import { Dialog } from '@base-ui-components/react'
import clsx from 'clsx'
import { IoClose } from 'react-icons/io5'
import ErrorFeedback from '@/components/ErrorFeedback'
import LogoSvg from '@/components/LogoSvg'

export interface AuthDialogHeadingProps {
  error: string | null
}

const AuthDialogHeading = (props: AuthDialogHeadingProps) => {
  const { error } = props

  return (
    <>
      <div
        className='absolute top-3 right-3 flex gap-4'
      >
        <Dialog.Close
          className={clsx(
            'flex aspect-square h-9 items-center justify-center rounded-full select-none',
            'bg-empty border hover:bg-black/10',
            'text-base font-medium',
            'focus-visible:outline-2 focus-visible:-outline-offset-1'
          )}
        >
          <IoClose
            className='ml-[0.3px]'
          />
        </Dialog.Close>
      </div>

      <div
        className='mt-3 flex flex-col items-center justify-center gap-4'
      >
        <LogoSvg
          width={48}
          height={48}
        />

        <h1
          className='font-jp text-center text-3xl'
        >
          Welcome to aromi
        </h1>

        <ErrorFeedback
          error={error}
        />
      </div>
    </>
  )
}

export default AuthDialogHeading
