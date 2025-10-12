import React from 'react'
import { type IUserSummary } from '../types'
import { Colors } from '@/styles/Colors'
import emptyUserAvatar from '@/assets/avatar-empty.svg'

export interface UserAvatarProps {
  user?: IUserSummary | null | undefined
}

const UserAvatar = (props: UserAvatarProps) => {
  // const { user } = props

  return (
    <img
      src={emptyUserAvatar}
      className='rounded-full min-w-16 w-16 aspect-square overflow-hidden object-cover'
      style={{ backgroundColor: Colors.empty }}
    />
  )
}

export default UserAvatar
