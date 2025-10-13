import React from 'react'
import UserAvatar from './UserAvatar'
import UserAttribute from './UserAttribute'
import TextButton from '@/components/TextButton'
import type { UserPreviewFragment } from '@/generated/graphql'
import { useMyContext } from '../contexts/MyContext'

export interface UserPreviewProps {
  user: UserPreviewFragment
  onEdit?: () => void
}

const UserPreview = (props: UserPreviewProps) => {
  const { user, onEdit } = props
  const { username } = user

  const { me } = useMyContext()
  const isMyProfile = me != null && me.id === user.id

  return (
    <div
      className='w-full flex flex-col gap-3 items-center'
    >
      <div
        className='max-w-60 mb-5'
      >
        <UserAvatar
          user={user}
        />
      </div>

      {isMyProfile && (
        <TextButton
          text='Edit profile'
          onClick={onEdit}
        />
      )}

      <div
        className='self-start flex flex-col gap-5'
      >
        <UserAttribute
          label='Username'
          value={username}
        />

        {isMyProfile && me.email != null && (
          <UserAttribute
            label='Email'
            value={me.email}
          />
        )}
      </div>
    </div>
  )
}

export default UserPreview
