import React, { useState } from 'react'
import { Colors } from '@/styles/Colors'
import type { UserPreviewFragment } from '@/generated/graphql'
import EmptyAvatarSvg from '@/components/EmptyAvatarSvg'
import type { Nullable } from '@/utils/util'

export interface UserAvatarProps {
  user: Nullable<UserPreviewFragment>
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
            color={Colors.empty2}
          />
        )}
    </div>
  )
}

export default UserAvatar
