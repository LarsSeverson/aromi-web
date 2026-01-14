import type { PostCommentPreviewFragment } from '@/generated/graphql'
import React from 'react'
import { PostCommentCardAvatar } from './PostCommentCardAvatar'
import { PostCommentCardHeading } from './PostCommentCardHeading'
import { PostCommentCardContent } from './PostCommentCardContent'
import { PostCommentCardFooter } from './PostCommentCardFooter'
import { usePostCommentComments } from '../../hooks/usePostCommentComments'

export interface PostCommentCardProps {
  comment: PostCommentPreviewFragment
}

export const PostCommentCard = (props: PostCommentCardProps) => {
  const { comment } = props
  const { user } = comment

  const { comments } = usePostCommentComments(comment.id)

  return (
    <div
      className='group flex w-full flex-col overflow-hidden rounded-lg p-3 pb-1'
    >
      <div
        className='flex gap-2'
      >
        <PostCommentCardAvatar
          user={user}
        />

        <div
          className='flex w-full min-w-0 flex-col gap-1'
        >
          <PostCommentCardHeading
            comment={comment}
          />

          <PostCommentCardContent
            comment={comment}
          />

          <PostCommentCardFooter
            comment={comment}
          />
        </div>
      </div>
    </div>
  )
}
