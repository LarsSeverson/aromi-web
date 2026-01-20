import type { PostCommentPreviewFragment } from '@/generated/graphql'
import clsx from 'clsx'
import React from 'react'
import { PostCommentCard } from './PostCommentCard'

export interface PostCommentCardReplyProps {
  reply: PostCommentPreviewFragment
  shouldCutOff?: boolean
}

export const PostCommentCardReply = (props: PostCommentCardReplyProps) => {
  const {
    reply,
    shouldCutOff = false
  } = props

  return (
    <div
      key={reply.id}
      className='contents'
    >
      <div
        className={clsx(
          'relative flex items-start justify-end',
          shouldCutOff && 'bg-white'
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

      <PostCommentCard
        key={reply.id}
        comment={reply}
      />
    </div>
  )
}
