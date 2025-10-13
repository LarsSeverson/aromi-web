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
        className='absolute right-3 top-3 flex gap-4'
      >
        <Dialog.Close
          className={clsx(
            'flex h-9 aspect-square items-center justify-center select-none rounded-full',
            'border border-surface2 bg-empty hover:bg-black/10',
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
        className='gap-4 flex flex-col justify-center items-center mt-3'
      >
        <LogoSvg
          width={48}
          height={48}
        />

        <h1
          className='text-3xl text-center font-jp'
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
