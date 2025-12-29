import { Dialog } from '@base-ui/react'
import clsx from 'clsx'
import React from 'react'

const SignUpButton = () => {
  return (
    <Dialog.Trigger
      className={clsx(
        'flex h-8.25 items-center justify-center px-3.5 align-middle select-none',
        'rounded-md text-white',
        'text-sm leading-none font-medium',
        'bg-sinopia cursor-pointer hover:brightness-105',
        'text-nowrap focus-visible:outline-2 focus-visible:-outline-offset-1'
      )}
    >
      Sign Up
    </Dialog.Trigger>
  )
}

export default SignUpButton
