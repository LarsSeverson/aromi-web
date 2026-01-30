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
      className='flex w-full items-center'
    >
      <Link
        to='/users/$id'
        params={{ id: user.id }}
        className='truncate text-xs font-medium hover:underline md:text-sm'
        onClick={handleOnChildClick}
      >
        {user.username}
      </Link>

      <span
        className='mx-1.5 text-[10px] text-black/50 md:text-xs'
      >
        •
      </span>

      <span
        className='text-[11px] text-nowrap text-black/50 md:text-xs'
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
