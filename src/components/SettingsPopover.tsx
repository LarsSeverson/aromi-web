import { useAuthContext } from '@/features/auth'
import { useToastMessage } from '@/hooks/useToastMessage'
import { Popover } from '@base-ui-components/react'
import { Link } from '@tanstack/react-router'
import clsx from 'clsx'
import React from 'react'
import { CgClose } from 'react-icons/cg'
import { FaCog, FaDiscord } from 'react-icons/fa'
import { HiOutlineLogout } from 'react-icons/hi'
import Spinner from './Spinner'
import { DISCORD_INVITE_URL } from '@/utils/constants'

export interface SettingsPopoverProps {
  isActive?: boolean
}

const SettingsPopover = (props: SettingsPopoverProps) => {
  const { isActive = false } = props

  const { isAuthenticated, logOut } = useAuthContext()
  const { toastApolloError } = useToastMessage()

  const [isLoading, setIsLoading] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)

  const handleLogOut = async () => {
    if (isLoading) return

    setIsLoading(true)

    await logOut()
      .match(
        () => {
          window.location.reload()
        },
        toastApolloError
      )

    setIsLoading(false)
  }

  const handleOnItemClick = (e: React.SyntheticEvent) => {
    e.preventDefault()
    handleLogOut()
  }

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

                <a
                  href={DISCORD_INVITE_URL}
                  target='_blank'
                  rel='noreferrer'
                  className='text-md flex w-full items-center gap-2 rounded-lg p-3 font-medium hover:bg-black/10'
                  onClick={setIsOpen.bind(null, false)}
                >
                  Join our Discord!

                  <FaDiscord
                    size={20}
                    className='text-[#5865F2]'
                  />
                </a>

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

                {isAuthenticated && (
                  <button
                    disabled={isLoading}
                    onClick={handleOnItemClick}
                    className={clsx(
                      'mt-5 w-full rounded-lg',
                      'cursor-pointer outline-none select-none',
                      'relative flex items-center p-3 text-sm leading-4',
                      'data-highlighted:z-0 ',
                      'data-highlighted:before:absolute data-highlighted:before:content-[""]',
                      'data-highlighted:before:inset-x-1 data-highlighted:before:inset-y-0',
                      'data-highlighted:before:z-[-1] data-highlighted:before:rounded',
                      'data-highlighted:before:bg-empty cursor-pointer hover:bg-black/10 hover:text-red-700'
                    )}
                  >
                    <HiOutlineLogout
                      size={18}
                      className='mr-1'
                    />

                    <span
                      className='leading-none'
                    >
                      Log out
                    </span>

                    {isLoading && (
                      <div
                        className='absolute right-8'
                      >
                        <Spinner
                          size={3}
                        />
                      </div>
                    )}
                  </button>
                )}
              </div>
            </div>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default SettingsPopover