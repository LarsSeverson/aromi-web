import type { PostPreviewFragment } from '@/generated/graphql'
import React from 'react'
import PostPreviewCard from './PostPreviewCard'
import Divider from '@/components/Divider'

export interface PostPageListItemCardProps {
  post: PostPreviewFragment
}

const PostPageListItemCard = (props: PostPageListItemCardProps) => {
  const { post } = props

  return (
    <div
      className='overflow-hidden'
    >
      <PostPreviewCard
        post={post}
      />

      <Divider
        horizontal
        className='mt-2 w-full self-center px-3'
      />
    </div>
  )
}

export default PostPageListItemCard
