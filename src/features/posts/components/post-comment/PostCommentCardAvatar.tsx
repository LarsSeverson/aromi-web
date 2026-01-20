import UserAvatar from '@/features/users/components/UserAvatar'
import type { UserPreviewFragment } from '@/generated/graphql'
import { Link } from '@tanstack/react-router'
import React from 'react'

export interface PostCommentCardAvatarProps {
  user: UserPreviewFragment
}

export const PostCommentCardAvatar = (props: PostCommentCardAvatarProps) => {
  const { user } = props

  const handleOnLinkClick = (event: React.MouseEvent) => {
    event.stopPropagation()
  }

  return (
    <Link
      to='/users/$id'
      params={{ id: user.id }}
      className='aspect-square w-full'
      onClick={handleOnLinkClick}
    >
      <UserAvatar
        user={user}
      />
    </Link>
  )
}
