import type { PostCommentPreviewFragment, PostCommentWithCommentsFragment } from '@/generated/graphql'
import React from 'react'
import { PostCommentCardAvatar } from './PostCommentCardAvatar'
import { PostCommentCardHeading } from './PostCommentCardHeading'
import { PostCommentCardContent } from './PostCommentCardContent'
import { PostCommentCardActions } from './PostCommentCardActions'
import { usePostCommentCommentsLazy } from '../../hooks/usePostCommentCommentsLazy'
import clsx from 'clsx'
import { PostCommentCardReply } from './PostCommentCardReply'
import { PostCommentCardFooter } from './PostCommentCardFooter'

export interface PostCommentCardProps {
  comment: PostCommentWithCommentsFragment
}

export const PostCommentCard = (props: PostCommentCardProps) => {
  const {
    comment
  } = props

  const { user, commentCount } = comment

  const {
    comments,

    hasMore,

    loadMore
  } = usePostCommentCommentsLazy({
    parentId: comment.id,
    input: { first: 5 },
    parentData: comment
  })

  const hasComments = comments.length > 0
  const isExpandable = commentCount > 0
  const [isExpanded, setIsExpanded] = React.useState(hasComments)

  const handleOnLoadMore = React.useCallback(
    () => {
      loadMore()
    },
    [loadMore]
  )

  const handleOnToggleExpanded = React.useCallback(
    () => {
      setIsExpanded((prev) => !prev)
    },
    []
  )

  const onRenderReply = React.useCallback(
    (reply: PostCommentPreviewFragment, index: number) => (
      <PostCommentCardReply
        key={reply.id}
        reply={reply as PostCommentWithCommentsFragment}
        shouldCutOff={(index === comments.length - 1 && !hasMore)}
      />
    ),
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

        <PostCommentCardActions
          comment={comment}
          isExpanded={isExpanded}
          isExpandable={isExpandable}
          onToggleExpanded={handleOnToggleExpanded}
        />

        <div
          className={clsx('contents', !isExpanded && 'hidden')}
        >
          {comments.map((reply, index) => onRenderReply(reply, index))}
        </div>

        <PostCommentCardFooter
          comment={comment}
          commentsLoadedLength={comments.length}
          isExpanded={isExpanded}
          hasMore={hasMore}
          onLoadMore={handleOnLoadMore}
        />
      </div>
    </div>
  )
}
