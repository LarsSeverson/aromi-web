import { TiptapRenderer } from '@/components/tiptap/TiptapRenderer'
import { PostType, type PostPreviewFragment } from '@/generated/graphql'
import type { JSONContent } from '@tiptap/core'
import React from 'react'
import PostPreviewCardAssets from './PostPreviewCardAssets'

export interface PostPreviewCardContentProps {
  post: PostPreviewFragment
}

const PostPreviewCardContent = (props: PostPreviewCardContentProps) => {
  const { post } = props
  const { type, assets } = post

  return (
    <div>
      {type === PostType.Text && (
        <TiptapRenderer
          content={post.content as JSONContent}
          className='line-clamp-6 text-sm text-black/70 select-none'
        />
      )}

      {type === PostType.Media && (
        <PostPreviewCardAssets
          assets={assets}
        />
      )}
    </div>
  )
}

export default PostPreviewCardContent
