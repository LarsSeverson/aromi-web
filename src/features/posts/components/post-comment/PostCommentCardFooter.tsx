import type { PostCommentPreviewFragment } from '@/generated/graphql'
import { useToastMessage } from '@/hooks/useToastMessage'
import React from 'react'
import { useVoteOnPostComment } from '../../hooks/useVoteOnPostComment'
import { useDebounce } from '@/hooks/useDebounce'
import VoteButtonGroup from '@/components/VoteButtonGroup'

export interface PostCommentCardFooterProps {
  comment: PostCommentPreviewFragment
}

export const PostCommentCardFooter = (props: PostCommentCardFooterProps) => {
  const { comment } = props
  const { commentCount, votes } = comment

  const { toastError } = useToastMessage()

  const { voteOnPostComment } = useVoteOnPostComment()

  const handleVoteOnPostComment = useDebounce(
    async (userVote: number) => {
      const res = await voteOnPostComment({ commentId: comment.id, vote: userVote })

      res.match(
        () => {
          //
        },
        () => {
          toastError('', 'Something went wrong')
        }
      )
    },
    150,
    [comment.id]
  )

  const handleOnVote = (vote: number) => {
    handleVoteOnPostComment(vote)
  }

  return (
    <div
      className='mt-2 flex items-center gap-3'
    >
      <VoteButtonGroup
        className='bg-empty border-none'
        noSeparator
        votes={votes}
        onVote={handleOnVote}
      />

      {/* <Link
        to='/community/posts/$id'
        params={{ id: post.id }}
        className='bg-empty flex items-center gap-2 rounded-full p-2 px-4 text-sm hover:bg-gray-200'
      >
        <FaRegComment
          className='size-4.5'
        />

        {formatNumber(commentCount)}
      </Link> */}

      {/* <SharePostPopover
        post={post}
      /> */}
    </div>
  )
}
