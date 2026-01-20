import type { PostCommentPreviewFragment } from '@/generated/graphql'
import { useToastMessage } from '@/hooks/useToastMessage'
import React from 'react'
import { useVoteOnPostComment } from '../../hooks/useVoteOnPostComment'
import { useDebounce } from '@/hooks/useDebounce'
import { LikeButton } from '@/components/LikeButton'
import { ReplyButton } from '@/components/ReplyButton'
import { PostCommentCardExpandButton } from './PostCommentCardExpandButton'
import { useNewPostCommentContext } from '../../contexts/NewPostCommentContext'
import { MAX_POST_COMMENT_DEPTH } from '../../utils/validation'

export interface PostCommentCardActionsProps {
  comment: PostCommentPreviewFragment

  isExpanded?: boolean

  onToggleExpanded?: () => void
}

export const PostCommentCardActions = (props: PostCommentCardActionsProps) => {
  const {
    comment,

    isExpanded = false,

    onToggleExpanded
  } = props

  const { commentCount, depth, votes } = comment
  const isExpandable = commentCount > 0

  const { onIsActiveChange } = useNewPostCommentContext()

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

  const handleOnReply = () => {
    onIsActiveChange(true)
  }

  return (
    <div
      className='contents'
    >
      <div
        className='contents'
      >
        <PostCommentCardExpandButton
          isExpanded={isExpanded}
          isExpandable={isExpandable}
          onToggleExpanded={onToggleExpanded}
        />
      </div>

      <div
        className='mt-1 mb-1 flex items-center gap-0.5'
      >
        <LikeButton
          votes={votes}
          onVote={handleOnVote}
        />

        {depth < MAX_POST_COMMENT_DEPTH && (
          <ReplyButton
            onClick={handleOnReply}
          />
        )}
      </div>
    </div>
  )
}
