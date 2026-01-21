import { TipTapRenderer } from '@/components/tiptap/TipTapRenderer'
import type { PostCommentPreviewFragment } from '@/generated/graphql'
import type { JSONContent } from '@tiptap/core'
import React from 'react'
import { PostCommentCardAssets } from './PostCommentCardAssets'

export interface PostCommentCardContentProps {
  comment: PostCommentPreviewFragment
}

export const PostCommentCardContent = (props: PostCommentCardContentProps) => {
  const { comment } = props
  const { assets } = comment

  return (
    <div
      className='z-10 ml-2 pt-1'
    >
      <PostCommentCardAssets
        commentAssets={assets}
      />

      <TipTapRenderer
        content={comment.content as JSONContent}
        className='text-sm text-black/80'
      />
    </div>
  )
}
