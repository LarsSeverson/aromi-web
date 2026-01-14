import type { PostCommentWithCommentsFragment } from '@/generated/graphql'
import React from 'react'
import { PostCommentCardAvatar } from './PostCommentCardAvatar'
import { PostCommentCardHeading } from './PostCommentCardHeading'
import { PostCommentCardContent } from './PostCommentCardContent'
import { PostCommentCardFooter } from './PostCommentCardFooter'
import { usePostCommentCommentsLazy } from '../../hooks/usePostCommentCommentsLazy'
import clsx from 'clsx'

export interface PostCommentCardProps {
  comment: PostCommentWithCommentsFragment
}

export const PostCommentCard = (props: PostCommentCardProps) => {
  const {
    comment
  } = props
  
  const { user } = comment

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

  const handleOnLoadMore = React.useCallback(
    () => {
      loadMore()
    },
    [loadMore]
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
        className='relative grid grid-cols-[32px_minmax(0,1fr)]'
      >
        <div
          className={clsx(
            'group absolute start-0 top-0 bottom-0 flex w-8 cursor-pointer items-center justify-center',
            'z-0'
          )}
        >
          <div
            className={clsx(
              'h-full w-px bg-gray-200',
              !hasComments && 'hidden'
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

        <div
          className='contents'
        >
          <div />

          {hasComments && (
            <>
              {comments.map(reply => (
                <PostCommentCard
                  key={reply.id}
                  comment={reply as PostCommentWithCommentsFragment}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
