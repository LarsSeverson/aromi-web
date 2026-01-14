import type { PostPreviewFragment } from '@/generated/graphql'
import React from 'react'
import { useVirtualComments } from '../../hooks/useVirtualComments'
import { PostCommentCard } from './PostCommentCard'

export interface PostCommentsProps {
  post: PostPreviewFragment
}

export const PostComments = (props: PostCommentsProps) => {
  const { post } = props

  const { virtualItems } = useVirtualComments(post.id)

  return (
    <div
      className='flex w-full flex-col gap-2 pt-4'
    >
      {virtualItems.map((comment) => (
        <PostCommentCard
          key={comment.id}
          comment={comment}
        />
      ))}
    </div>
  )
}
