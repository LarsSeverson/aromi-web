import React from 'react'
import UserAvatar from './UserAvatar'
import MenuItem from '@/components/MenuItem'
import { Link } from '@tanstack/react-router'
import type { MeFragment } from '@/generated/graphql'

export interface AccountInfoItemProps {
  user: MeFragment
}

const AccountInfoItem = (props: AccountInfoItemProps) => {
  const { user } = props
  const { id, username, email } = user

  return (
    <MenuItem>
      <Link
        to='/users/$id'
        params={{ id }}
        className='flex'
      >
        <div
          className='h-16'
        >
          <UserAvatar
            user={user}
          />
        </div>

        <div
          className='flex flex-col justify-center ml-3'
        >
          <span
            className='font-semibold'
          >
            {username}
          </span>

          <span
            className='font-light text-black/80 mt-1'
          >
            {email}
          </span>
        </div>
      </Link>
    </MenuItem>
  )
}

export default AccountInfoItem
