import type { PostPreviewFragment } from '@/generated/graphql'
import { useNavigate } from '@tanstack/react-router'
import React from 'react'
import PostPreviewCardContent from './PostPreviewCardContent'
import PostPreviewCardAvatar from './PostPreviewCardAvatar'
import PostPreviewCardHeading from './PostPreviewCardHeading'
import PostPreviewCardFooter from './PostPreviewCardFooter'
import PostPreviewCardTitle from './PostPreviewCardTitle'

export interface PostPreviewCardProps {
  post: PostPreviewFragment
}

const PostPreviewCard = (props: PostPreviewCardProps) => {
  const { post } = props
  const { title, user } = post

  const navigate = useNavigate()

  const handleOnCardClick = () => {
    navigate({
      to: '/community/posts/$id',
      params: { id: post.id }
    })
  }

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleOnCardClick()
    }
  }

  return (
    <div
      tabIndex={0}
      onClick={handleOnCardClick}
      onKeyDown={handleOnKeyDown}
      className='group hover:bg-empty2 flex w-full cursor-pointer flex-col overflow-hidden rounded-lg p-3 pb-1'
    >
      <div
        className='flex gap-2'
      >
        <PostPreviewCardAvatar
          user={user}
        />

        <div
          className='flex w-full min-w-0 flex-col gap-1'
        >
          <PostPreviewCardHeading
            post={post}
          />

          <PostPreviewCardTitle
            title={title}
          />

          <PostPreviewCardContent
            post={post}
          />

          <PostPreviewCardFooter
            post={post}
          />
        </div>
      </div>
    </div>
  )
}

export default PostPreviewCard
