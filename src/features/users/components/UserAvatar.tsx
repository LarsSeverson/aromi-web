import React, { useState } from 'react'
import type { UserPreviewFragment } from '@/generated/graphql'
import EmptyAvatarSvg from '@/components/EmptyAvatarSvg'
import type { Nullable } from '@/utils/util'

export interface UserAvatarProps {
  user: Nullable<Omit<UserPreviewFragment, 'relationship'>>
}

const UserAvatar = (props: UserAvatarProps) => {
  const { user } = props
  const { avatar } = user ?? {}

  const [showAvatar, setShowAvatar] = useState(avatar?.url != null)

  return (
    <div
      className='bg-empty aspect-square h-full overflow-hidden rounded-full border'
    >
      {showAvatar
        ? (
          <img
            src={avatar?.url ?? undefined}
            alt={`Avatar of ${user?.username ?? 'Unknown user'}`}
            onError={setShowAvatar.bind(null, false)}
          />
        )
        : (
          <EmptyAvatarSvg
            color='#AAAAAA'
          />
        )}
    </div>
  )
}

export default UserAvatar
