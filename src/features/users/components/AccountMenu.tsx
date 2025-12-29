import React from 'react'
import { Menu } from '@base-ui/react'
import UserAvatar from './UserAvatar'
import MenuPopup from '@/components/MenuPopup'
import LogOutItem from './LogOutItem'
import AccountInfoItem from './AccountInfoItem'
import type { MeFragment } from '@/generated/graphql'

export interface AccountMenuProps {
  user: MeFragment
}

const AccountMenu = (props: AccountMenuProps) => {
  const { user } = props

  return (
    <Menu.Root>
      <Menu.Trigger
        className='h-full cursor-pointer'
      >
        <UserAvatar
          user={user}
        />
      </Menu.Trigger>

      <Menu.Portal>
        <Menu.Positioner
          sideOffset={8}
        >
          <MenuPopup>
            <AccountInfoItem
              user={user}
            />

            <Menu.Separator
              className='mx-4 my-1.5 h-px bg-black/10'
            />

            <LogOutItem />
          </MenuPopup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  )
}

export default AccountMenu
