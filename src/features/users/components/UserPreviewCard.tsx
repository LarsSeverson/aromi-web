import type { UserPreviewFragment } from '@/generated/graphql'
import React from 'react'
import UserAvatar from './UserAvatar'
import { formatNumber } from '@/utils/string-utils'
import clsx from 'clsx'
import { Link } from '@tanstack/react-router'

export interface UserPreviewCardProps {
  user: UserPreviewFragment
}

const UserPreviewCard = (props: UserPreviewCardProps) => {
  const { user } = props
  const { id, username } = user

  return (
    <div
      className='group flex rounded-lg pr-5 hover:bg-gray-100'
    >
      <Link
        to='/users/$id'
        params={{ id }}
        className='flex w-full cursor-pointer gap-2 p-2'
      >
        <div
          className='h-20 w-20'
        >
          <UserAvatar
            user={user}
          />
        </div>

        <div
          className='flex flex-col justify-center gap-2'
        >
          <span
            className='font-medium'
          >
            {username}
          </span>

          <span
            className='text-md font-medium text-black/70'
          >
            {formatNumber(user.followerCount)}{user.followerCount === 1 ? ' follower' : ' followers'}
          </span>
        </div>
      </Link>

      <div
        className='ml-auto self-center'
      >
        <button
          className={clsx(
            'bg-sinopia cursor-pointer rounded-xl px-4 py-2 font-medium text-white',
            'hover:brightness-105'
          )}
        >
          Follow
        </button>
      </div>
    </div>
  )
}

export default UserPreviewCard
