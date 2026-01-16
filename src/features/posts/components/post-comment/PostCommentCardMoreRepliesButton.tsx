import { formatNumber } from '@/utils/string-utils'
import { pluralizer2 } from '@/utils/util-functions'
import clsx from 'clsx'
import React from 'react'

export interface PostCommentCardMoreRepliesButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  replyCount?: number
  repliesShown?: number
}

export const PostCommentCardMoreRepliesButton = (props: PostCommentCardMoreRepliesButtonProps) => {
  const {
    replyCount = 0,
    repliesShown = 0,

    className,
    ...rest
  } = props

  const numberDisplayed = replyCount - repliesShown

  if (replyCount <= repliesShown) {
    return null
  }

  return (
    <button
      className={clsx(
        className,
        'group mb-2 w-min text-nowrap',
        'flex cursor-pointer items-center justify-center rounded-full',
        'hover:text-sinopia p-2 px-4 text-gray-500 hover:bg-gray-200'
      )}
      {...rest}
    >
      <span
        className='text-xs font-semibold text-gray-500! group-hover:text-black/80!'
      >
        {`Show ${formatNumber(numberDisplayed)} ${pluralizer2(numberDisplayed, 'reply', 'replies')}`}
      </span>
    </button>
  )
}
