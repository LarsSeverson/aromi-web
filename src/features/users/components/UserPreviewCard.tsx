import type { UserPreviewFragment } from '@/generated/graphql'
import React from 'react'
import UserAvatar from './UserAvatar'
import { formatNumber } from '@/utils/string-utils'
import { Link } from '@tanstack/react-router'
import UserFollowButton from './UserFollowButton'
import { useFollowUser } from '../hooks/useFollowUser'
import { useUnfollowUser } from '../hooks/useUnfollowUser'
import { useDebounce } from '@/hooks/useDebounce'
import { useToastMessage } from '@/hooks/useToastMessage'
import { useMyContext } from '../context/MyContext'

export interface UserPreviewCardProps {
  user: UserPreviewFragment
}

const UserPreviewCard = (props: UserPreviewCardProps) => {
  const { user } = props
  const { id, username, relationship } = user

  const { me } = useMyContext()

  const { toastError } = useToastMessage()

  const { follow } = useFollowUser()
  const { unfollow } = useUnfollowUser()

  const isMe = me?.id === id

  const handleOnRelationshipChange = useDebounce(
    async (newValue: boolean) => {
      const fn = newValue ? follow : unfollow

      const res = await fn({ userId: id })

      if (res.isErr()) {
        toastError('')
      }
    },
    300,
    [id]
  )

  const handleOnIsFollowingChange = (newValue: boolean) => {
    handleOnRelationshipChange(newValue)
  }

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
        <UserFollowButton
          isMe={isMe}
          relationship={relationship}
          onIsFollowingChange={handleOnIsFollowingChange}
        />
      </div>
    </div>
  )
}

export default UserPreviewCard
