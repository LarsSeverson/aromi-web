import type { UserPreviewFragment } from '@/generated/graphql'
import React from 'react'
import UserAvatar from './UserAvatar'
import { Link } from '@tanstack/react-router'
import UserRelationshipButton from './UserRelationshipButton'
import { useFollowUser } from '../hooks/useFollowUser'
import { useUnfollowUser } from '../hooks/useUnfollowUser'
import { useDebounce } from '@/hooks/useDebounce'
import { useToastMessage } from '@/hooks/useToastMessage'
import { useMyContext } from '../context/MyContext'

export interface UserPreviewCardMiniProps {
  user: UserPreviewFragment
}

const UserPreviewCardMini = (props: UserPreviewCardMiniProps) => {
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
      className='group flex w-full rounded-lg pr-2 hover:bg-gray-100'
    >
      <Link
        to='/users/$id'
        params={{ id }}
        className='flex w-full cursor-pointer gap-3 p-2'
      >
        <div
          className='h-10 w-10'
        >
          <UserAvatar
            user={user}
          />
        </div>

        <div
          className='flex flex-col justify-center'
        >
          <span
            className='text-sm font-medium'
          >
            {username}
          </span>
        </div>
      </Link>

      <div
        className='ml-auto self-center'
      >
        <UserRelationshipButton
          isMe={isMe}
          relationship={relationship}
          className='text-sm'
          onIsFollowingChange={handleOnIsFollowingChange}
        />
      </div>
    </div>
  )
}

export default UserPreviewCardMini
