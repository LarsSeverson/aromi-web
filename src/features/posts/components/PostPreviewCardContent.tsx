import { TipTapRenderer } from '@/components/tiptap/TipTapRenderer'
import { PostType, type PostPreviewFragment } from '@/generated/graphql'
import type { JSONContent } from '@tiptap/core'
import React from 'react'
import PostPreviewCardAssets from './PostPreviewCardAssets'
import PostPreviewCardFragrance from './PostPreviewCardFragrance'

export interface PostPreviewCardContentProps {
  post: PostPreviewFragment
}

const PostPreviewCardContent = (props: PostPreviewCardContentProps) => {
  const { post } = props
  const { type, assets } = post

  return (
    <div
      className='z-10'
    >
      {type === PostType.Text && (
        <TipTapRenderer
          content={post.content as JSONContent}
          className='line-clamp-6 text-sm text-black/70 select-none'
        />
      )}

      {type === PostType.Media && (
        <PostPreviewCardAssets
          postAssets={assets}
        />
      )}

      {type === PostType.Fragrance && (
        <PostPreviewCardFragrance
          fragrance={post.fragrance}
        />
      )}
    </div>
  )
}

export default PostPreviewCardContent
