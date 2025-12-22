import { Popover } from '@base-ui-components/react'
import { Link } from '@tanstack/react-router'
import clsx from 'clsx'
import React from 'react'
import { CgClose } from 'react-icons/cg'
import { FaCog } from 'react-icons/fa'

export interface SettingsPopoverProps {
  isActive?: boolean
}

const SettingsPopover = (props: SettingsPopoverProps) => {
  const { isActive = false } = props

  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Popover.Root
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <Popover.Trigger
        className={clsx(
          'relative mt-auto flex items-center justify-center p-3 backdrop-brightness-100 select-none hover:backdrop-brightness-90',
          'transition-transform active:scale-95',
          'aspect-square cursor-pointer rounded-xl',
          isActive && 'bg-black/10'
        )}
      >
        <FaCog
          size={20}
        />
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Positioner
          side='right'
          sideOffset={18}
        >
          <Popover.Popup
            className={clsx(
              'flex max-h-128 w-104 flex-col items-center justify-center overflow-hidden rounded-xl bg-white p-3',
              'shadow-symmetrical'
            )}
          >
            <Popover.Title
              className='flex w-full items-center justify-between p-3 font-semibold'
            >
              Settings & Support

              <button
                className='cursor-pointer rounded-lg p-2 hover:bg-black/10'
                onClick={setIsOpen.bind(null, false)}
              >
                <CgClose
                  size={20}
                />
              </button>
            </Popover.Title>

            <div
              className='w-full'
            >

              <div
                className='text-md p-3 text-black/80'
              >
                Settings
              </div>

              <Link
                to='/settings'
                className='text-md flex w-full items-center justify-between rounded-lg p-3 pr-5 font-medium hover:bg-black/10'
                onClick={setIsOpen.bind(null, false)}
              >
                Your Settings
              </Link>

              <div
                className='mt-5'
              >
                <div
                  className='text-md p-3 text-black/80'
                >
                  Support
                </div>

                <Link
                  to='/auth/account-recovery'
                  className='text-md block w-full rounded-lg p-3 font-medium hover:bg-black/10'
                  onClick={setIsOpen.bind(null, false)}
                >
                  Account Recovery
                </Link>

                <Link
                  to='/privacy'
                  className='text-md block w-full rounded-lg p-3 font-medium hover:bg-black/10'
                  onClick={setIsOpen.bind(null, false)}
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default SettingsPopover
