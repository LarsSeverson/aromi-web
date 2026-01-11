import VoteButtonGroup from '@/components/VoteButtonGroup'
import type { PostPreviewFragment } from '@/generated/graphql'
import { useToastMessage } from '@/hooks/useToastMessage'
import React from 'react'
import { useVoteOnPost } from '../hooks/useVoteOnPost'
import { useDebounce } from '@/hooks/useDebounce'
import { Link } from '@tanstack/react-router'
import { FaRegComment } from 'react-icons/fa'
import { formatNumber } from '@/utils/string-utils'
import SharePostPopover from './SharePostPopover'

export interface PostPreviewCardFooterProps {
  post: PostPreviewFragment
}

const PostPreviewCardFooter = (props: PostPreviewCardFooterProps) => {
  const { post } = props
  const { commentCount, votes } = post

  const { toastError } = useToastMessage()

  const { voteOnPost } = useVoteOnPost()

  const handleVoteOnPost = useDebounce(
    async (userVote: number) => {
      const res = await voteOnPost({ postId: post.id, vote: userVote })

      res.match(
        () => {
          //
        },
        () => {
          toastError('', 'Something went wrong')
        }
      )
    },
    150
  )

  const handleOnVote = (vote: number) => {
    handleVoteOnPost(vote)
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

      <Link
        to='/community/posts/$id'
        params={{ id: post.id }}
        className='bg-empty flex items-center gap-2 rounded-full p-2 px-4 text-sm hover:bg-gray-200'
      >
        <FaRegComment
          className='size-4.5'
        />

        {formatNumber(commentCount)}
      </Link>

      <SharePostPopover
        post={post}
      />
    </div>
  )
}

export default PostPreviewCardFooter
