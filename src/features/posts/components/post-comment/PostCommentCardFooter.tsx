import type { PostCommentWithCommentsFragment } from '@/generated/graphql'
import clsx from 'clsx'
import React from 'react'
import { PostCommentCardMoreRepliesButton } from './PostCommentCardMoreRepliesButton'

export interface PostCommentCardFooterProps {
  comment: PostCommentWithCommentsFragment
  commentsLoadedLength?: number
  isExpanded?: boolean
  hasMore?: boolean

  onLoadMore?: () => void
}

export const PostCommentCardFooter = (props: PostCommentCardFooterProps) => {
  const {
    comment,
    commentsLoadedLength = 0,
    isExpanded = false,
    hasMore = false,

    onLoadMore
  } = props

  const { commentCount } = comment

  if (!hasMore) return null

  return (
    <div
      className={clsx(
        'contents'
      )}
    >
      <div
        className={clsx(
          'relative flex items-start justify-end',
          'bg-white'
        )}
      >
        <div
          className={clsx(
            'relative box-border h-4 w-[calc(50%+0.5px)] cursor-pointer',
            'border-0 border-s border-solid border-gray-200',
            'after:absolute after:bottom-0 after:left-0 after:h-px after:bg-gray-200',
            'after:w-[calc(100%-4px)]'
          )}
        />
      </div>

      <PostCommentCardMoreRepliesButton
        replyCount={commentCount}
        repliesShown={isExpanded ? commentsLoadedLength : 0}
        onClick={onLoadMore}
      />
    </div>
  )
}
