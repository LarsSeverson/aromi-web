import { type User } from '@/generated/graphql'
import { Menu } from '@base-ui-components/react'
import emptyAvatar from '@/assets/avatar-empty.svg'
import { HiOutlineLogout } from 'react-icons/hi'
import React, { type SyntheticEvent, useState } from 'react'
import { useAuthContext } from '@/features/auth'

export type AccountMenuUser = Pick<User, 'email' | 'username'>

export interface AccountMenuProps {
  user: AccountMenuUser
}

export const AccountMenu = (props: AccountMenuProps) => {
  const { user } = props
  const { email, username } = user

  const auth = useAuthContext()

  const [isOpen, setIsOpen] = useState(false)

  const handleLogOutPressed = async (e: SyntheticEvent) => {
    e.preventDefault()

    await auth.logOut()

    // setIsOpen(false)
  }

  return (
    <Menu.Root
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <Menu.Trigger
        className='w-10 h-10 rounded-full overflow-hidden hover:brightness-90 focus-visible:outline-none'
      >
        <img
          src={emptyAvatar}
          className='object-cover w-full'
        />
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner
          sideOffset={8}
        >
          <Menu.Popup
            className='bg-white rounded-xl shadow-symmetrical flex flex-col p-2 overflow-hidden select-none focus:outline-none'
          >
            <Menu.Item
              className='flex gap-3 w-[360px] data-[highlighted]:bg-empty data-[highlighted]:cursor-pointer p-2 rounded-xl focus:outline-none'
            >
              <div
                className='w-16 aspect-square rounded-full overflow-hidden'
              >
                <img
                  src={emptyAvatar}
                  className='object-cover h-full'
                />
              </div>

              <div
                className='flex flex-col justify-center'
              >
                <span
                  className='font-semibold'
                >
                  {username}
                </span>
                <span
                  className='font-light text-gray-600'
                >
                  {email}
                </span>
              </div>
            </Menu.Item>
            <Menu.Item
              className='flex gap-3 w-[360px] data-[highlighted]:bg-empty data-[highlighted]:cursor-pointer p-2 rounded-xl focus:outline-none'
              closeOnClick={false}
              onClick={(e) => { void handleLogOutPressed(e) }}
            >
              <div
                className='font-semibold text-md flex items-center gap-1'
              >
                <HiOutlineLogout
                  size={22}
                />
                Log Out
              </div>
            </Menu.Item>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  )
}
