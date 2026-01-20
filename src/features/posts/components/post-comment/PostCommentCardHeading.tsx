import type { PostCommentPreviewFragment } from '@/generated/graphql'
import { formatDateRelative } from '@/utils/string-utils'
import { Link } from '@tanstack/react-router'
import React from 'react'
import { MoreOptionsPostCommentPopover } from './MoreOptionsPostCommentPopover'

export interface PostCommentCardHeadingProps {
  comment: PostCommentPreviewFragment
  showOptions?: boolean
}

export const PostCommentCardHeading = (props: PostCommentCardHeadingProps) => {
  const { comment, showOptions = true } = props
  const { user, createdAt } = comment

  const handleOnChildClick = (event: React.MouseEvent) => {
    event.stopPropagation()
  }

  return (
    <div
      className='ml-2 flex items-center'
    >
      <Link
        to='/users/$id'
        params={{ id: user.id }}
        className='truncate text-xs font-medium hover:underline'
        onClick={handleOnChildClick}
      >
        {user.username} {comment.id}
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
        <MoreOptionsPostCommentPopover
          comment={comment}
          className='ml-auto'
        />
      )}
    </div>
  )
}
