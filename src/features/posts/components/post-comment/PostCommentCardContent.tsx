import { TipTapRenderer } from '@/components/tiptap/TipTapRenderer'
import type { PostCommentPreviewFragment } from '@/generated/graphql'
import type { JSONContent } from '@tiptap/core'
import React from 'react'
import { PostCommentCardAssets } from './PostCommentCardAssets'
import { PostCommentEditor } from './PostCommentEditor'
import { EditPostCommentProvider } from '../../contexts/providers/EditPostCommentProvider'

export interface PostCommentCardContentProps {
  comment: PostCommentPreviewFragment
  isEditing?: boolean
  onIsEditingChange?: (isEditing: boolean) => void
}

export const PostCommentCardContent = (props: PostCommentCardContentProps) => {
  const {
    comment,
    isEditing = false,
    onIsEditingChange
  } = props

  const { assets } = comment

  return (
    <div
      className='z-10 ml-2 flex flex-col gap-1 pt-1'
    >
      <PostCommentCardAssets
        commentAssets={assets}
      />

      {isEditing
        ? (
          <EditPostCommentProvider
            comment={comment}
            onIsEditingChange={onIsEditingChange}
          >
            <PostCommentEditor />
          </EditPostCommentProvider>
        )
        : (
          <TipTapRenderer
            content={comment.content as JSONContent}
            className='text-sm text-black/80'
          />
        )
      }

    </div>
  )
}
