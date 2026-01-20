import type { PostCommentPreviewFragment } from '@/generated/graphql'
import React from 'react'
import { PostCommentCardAvatar } from './PostCommentCardAvatar'
import { PostCommentCardHeading } from './PostCommentCardHeading'
import { PostCommentCardContent } from './PostCommentCardContent'
import { PostCommentCardActions } from './PostCommentCardActions'
import { usePostCommentCommentsLazy } from '../../hooks/usePostCommentCommentsLazy'
import clsx from 'clsx'
import { PostCommentCardReply } from './PostCommentCardReply'
import { PostCommentCardFooter } from './PostCommentCardFooter'
import { PostCommentCardInput } from './PostCommentCardInput'
import { NewPostCommentProvider } from '../../contexts/providers/NewPostCommentProvider'

export interface PostCommentCardProps {
  comment: PostCommentPreviewFragment
}

export const PostCommentCard = (props: PostCommentCardProps) => {
  const {
    comment
  } = props

  const { post, user, commentCount = 0 } = comment ?? {}

  const {
    comments,

    hasMore,

    loadMore
  } = usePostCommentCommentsLazy({
    parentId: comment.id,
    input: { first: 5 }
  })

  const hasComments = commentCount > 0
  const hasCommentsToDisplay = comments.length > 0

  const [isExpanded, setIsExpanded] = React.useState(false)

  const handleOnLoadMore = React.useCallback(
    async () => {
      await loadMore()
      setIsExpanded(true)
    },
    [loadMore]
  )

  const handleOnToggleExpanded = React.useCallback(
    () => {
      if (!hasCommentsToDisplay) {
        loadMore()
      }

      setIsExpanded((prev) => !prev)
    },
    [hasCommentsToDisplay, loadMore]
  )

  const handleOnNewComment = React.useCallback(
    (_newComment: PostCommentPreviewFragment) => {
      if (!hasCommentsToDisplay) {
        loadMore()
      }

      setIsExpanded(true)
    },
    [hasCommentsToDisplay, loadMore]
  )

  const onRenderReply = React.useCallback(
    (reply: PostCommentPreviewFragment, index: number) => {
      return (
        <PostCommentCardReply
          key={reply.id}
          reply={reply}
          shouldCutOff={(index === comments.length - 1 && !hasMore)}
        />
      )
    },
    [comments.length, hasMore]
  )

  return (
    <div
      className="group/thread relative"
    >
      <div
        className="grid grid-cols-[32px_minmax(0,1fr)]"
      >
        <PostCommentCardAvatar
          user={user}
        />

        <PostCommentCardHeading
          comment={comment}
        />
      </div>

      <div
        className={clsx(
          'relative grid grid-cols-[32px_minmax(0,1fr)]'
        )}
      >
        <div
          className={clsx(
            'group absolute start-0 top-0 bottom-0 flex w-8 cursor-pointer items-center justify-center',
            'z-0 mb-2 pt-1'
          )}
        >
          <div
            className={clsx(
              'h-full w-px bg-gray-200',
              !hasComments && 'opacity-0'
            )}
          />
        </div>

        <div
          className='contents'
        >
          <div />

          <PostCommentCardContent
            comment={comment}
          />
        </div>

        <NewPostCommentProvider
          post={post}
          parent={comment}
          onNewComment={handleOnNewComment}
        >
          <PostCommentCardActions
            comment={comment}
            isExpanded={isExpanded}
            onToggleExpanded={handleOnToggleExpanded}
          />

          <PostCommentCardInput />
        </NewPostCommentProvider>

        <div
          className={clsx('contents', !isExpanded && 'hidden')}
        >
          {comments.map((reply, index) => onRenderReply(reply, index))}
        </div>

        <PostCommentCardFooter
          isExpanded={isExpanded}
          commentCount={commentCount}
          commentsDisplayedLength={comments.length}
          onLoadMore={handleOnLoadMore}
        />
      </div>
    </div>
  )
}
