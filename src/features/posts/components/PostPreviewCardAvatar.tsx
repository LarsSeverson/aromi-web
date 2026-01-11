import UserAvatar from '@/features/users/components/UserAvatar'
import type { UserPreviewFragment } from '@/generated/graphql'
import { Link } from '@tanstack/react-router'
import React from 'react'

export interface PostPreviewCardAvatarProps {
  user: UserPreviewFragment
}

const PostPreviewCardAvatar = (props: PostPreviewCardAvatarProps) => {
  const { user } = props

  const handleOnLinkClick = (event: React.MouseEvent) => {
    event.stopPropagation()
  }

  return (
    <Link
      to='/users/$id'
      params={{ id: user.id }}
      className='flex h-10.5 w-10.5'
      onClick={handleOnLinkClick}
    >
      <UserAvatar
        user={user}
      />
    </Link>
  )
}

export default PostPreviewCardAvatar
