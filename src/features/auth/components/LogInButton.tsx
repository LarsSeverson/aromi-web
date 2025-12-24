import { Dialog } from '@base-ui-components/react'
import clsx from 'clsx'
import React from 'react'

const LogInButton = () => {
  return (
    <Dialog.Trigger
      className={clsx(
        'inline-flex h-8.25 items-center px-3.5 align-middle select-none',
        'rounded-md bg-black/10',
        'text-sm leading-none font-medium',
        'cursor-pointer hover:backdrop-brightness-95',
        'text-nowrap focus-visible:outline-2 focus-visible:-outline-offset-1'
      )}
    >
      Log In
    </Dialog.Trigger>
  )
}

export default LogInButton
