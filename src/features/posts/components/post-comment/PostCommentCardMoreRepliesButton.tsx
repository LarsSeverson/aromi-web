import { formatNumber } from '@/utils/string-utils'
import { pluralizer2 } from '@/utils/util-functions'
import clsx from 'clsx'
import React from 'react'

export interface PostCommentCardMoreRepliesButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  repliesRemaining?: number
}

export const PostCommentCardMoreRepliesButton = (props: PostCommentCardMoreRepliesButtonProps) => {
  const {
    repliesRemaining = 0,

    className,
    ...rest
  } = props

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
        {`Show ${formatNumber(repliesRemaining)} ${pluralizer2(repliesRemaining, 'reply', 'replies')}`}
      </span>
    </button>
  )
}
