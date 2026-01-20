import clsx from 'clsx'
import React from 'react'
import { PostCommentCardMoreRepliesButton } from './PostCommentCardMoreRepliesButton'

export interface PostCommentCardFooterProps {
  isExpanded?: boolean
  commentCount?: number
  commentsDisplayedLength?: number

  onLoadMore?: () => void | Promise<void>
}

export const PostCommentCardFooter = (props: PostCommentCardFooterProps) => {
  const {
    isExpanded = false,
    commentCount = 0,
    commentsDisplayedLength = 0,

    onLoadMore
  } = props

  const hasComments = commentCount > 0
  const repliesRemaining = isExpanded ? commentCount - commentsDisplayedLength : commentCount

  const [isLoading, setIsLoading] = React.useState(false)

  const handleOnLoadMore = async () => {
    setIsLoading(true)

    await onLoadMore?.()

    setIsLoading(false)
  }

  const handleOnClick = () => {
    if (isLoading) return
    handleOnLoadMore()
  }

  if (!hasComments) return null
  if (isExpanded && repliesRemaining <= 0) return null

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
        disabled={isLoading}
        repliesRemaining={repliesRemaining}
        onClick={handleOnClick}
      />
    </div>
  )
}
