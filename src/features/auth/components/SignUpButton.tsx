import { Dialog } from '@base-ui-components/react'
import clsx from 'clsx'
import React from 'react'

const SignUpButton = () => {
  return (
    <Dialog.Trigger
      className={clsx(
        'flex h-[33px] items-center justify-center px-3.5 select-none align-middle',
        'rounded-md text-white',
        'text-sm font-medium leading-none',
        'bg-sinopia cursor-pointer hover:brightness-105',
        'focus-visible:outline-2 focus-visible:-outline-offset-1'
      )}
    >
      Sign Up
    </Dialog.Trigger>
  )
}

export default SignUpButton
