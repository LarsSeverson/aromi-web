import type { PostPreviewFragment } from '@/generated/graphql'
import { formatDateRelative } from '@/utils/string-utils'
import { Link } from '@tanstack/react-router'
import React from 'react'
import MoreOptionsPostPopover from './MoreOptionsPostPopover'

export interface PostPreviewCardHeadingProps {
  post: PostPreviewFragment
  showOptions?: boolean
}

const PostPreviewCardHeading = (props: PostPreviewCardHeadingProps) => {
  const { post, showOptions = true } = props
  const { user, createdAt } = post

  const handleOnChildClick = (event: React.MouseEvent) => {
    event.stopPropagation()
  }

  return (
    <div
      className='flex items-center'
    >
      <Link
        to='/users/$id'
        params={{ id: user.id }}
        className='truncate text-sm font-medium hover:underline'
        onClick={handleOnChildClick}
      >
        {user.username}
      </Link>

      <span
        className='mx-1.5 text-xs text-black/50'
      >
        •
      </span>

      <span
        className='text-xs text-nowrap text-black/50'
      >
        {formatDateRelative(createdAt)}
      </span>

      {showOptions && (
        <MoreOptionsPostPopover
          post={post}
          className='ml-auto'
        />
      )}
    </div>
  )
}

export default PostPreviewCardHeading
