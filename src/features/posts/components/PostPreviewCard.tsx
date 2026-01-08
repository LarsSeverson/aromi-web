import VoteButtonGroup from '@/components/VoteButtonGroup'
import UserAvatar from '@/features/users/components/UserAvatar'
import type { PostPreviewFragment } from '@/generated/graphql'
import { formatDateRelative, formatNumber } from '@/utils/string-utils'
import { Link, useNavigate } from '@tanstack/react-router'
import clsx from 'clsx'
import React from 'react'
import { FaRegComment } from 'react-icons/fa'
import PostPreviewCardContent from './PostPreviewCardContent'
import SharePostPopover from './SharePostPopover'
import MoreOptionsPostPopover from './MoreOptionsPostPopover'
import { useVoteOnPost } from '../hooks/useVoteOnPost'
import { useDebounce } from '@/hooks/useDebounce'
import { useToastMessage } from '@/hooks/useToastMessage'

export interface PostPreviewCardProps {
  post: PostPreviewFragment
}

const PostPreviewCard = (props: PostPreviewCardProps) => {
  const { post } = props
  const { title, user, commentCount, votes, createdAt } = post

  const navigate = useNavigate()
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

  const handleOnCardClick = () => {
    navigate({
      to: '/community/posts/$id',
      params: { id: post.id }
    })
  }

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleOnCardClick()
    }
  }

  const handleOnChildClick = (event: React.MouseEvent) => {
    event.stopPropagation()
  }

  return (
    <div
      tabIndex={0}
      onClick={handleOnCardClick}
      onKeyDown={handleOnKeyDown}
      className='group hover:bg-empty2 flex w-full cursor-pointer flex-col overflow-hidden rounded-lg p-3 pb-1'
    >
      <div
        className='flex gap-2'
      >
        <Link
          to='/users/$id'
          params={{ id: user.id }}
          className='flex h-10.5 w-10.5'
          onClick={handleOnChildClick}
        >
          <UserAvatar
            user={user}
          />
        </Link>

        <div
          className='flex w-full min-w-0 flex-col gap-1'
        >
          <div
            className='flex items-center'
          >
            <Link
              to='/users/$id'
              params={{ id: user.id }}
              className='truncate text-sm font-medium hover:underline'
              onClick={handleOnChildClick}
            >
              {user.username}
            </Link>

            <span
              className='mx-1.5 text-xs text-black/50'
            >
              •
            </span>

            <span
              className='text-xs text-nowrap text-black/50'
            >
              {formatDateRelative(createdAt)}
            </span>

            <MoreOptionsPostPopover
              post={post}
              className='ml-auto'
            />
          </div>

          <h2
            className={clsx(
              'text-[1.125rem] font-medium text-black/90',
              'leading-tight wrap-break-word'
            )}
          >
            {title}
          </h2>

          <PostPreviewCardContent
            post={post}
          />

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
        </div>
      </div>
    </div>
  )
}

export default PostPreviewCard
