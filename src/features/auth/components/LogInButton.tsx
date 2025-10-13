import { Dialog } from '@base-ui-components/react'
import clsx from 'clsx'
import React from 'react'

const LogInButton = () => {
  return (
    <Dialog.Trigger
      className={clsx(
        'h-[33px] select-none inline-flex items-center align-middle px-3.5',
        'rounded-md bg-black/10',
        'text-sm font-medium leading-none',
        'hover:backdrop-brightness-95 cursor-pointer',
        'focus-visible:outline-2 focus-visible:-outline-offset-1'
      )}
    >
      Log In
    </Dialog.Trigger>
  )
}

export default LogInButton
