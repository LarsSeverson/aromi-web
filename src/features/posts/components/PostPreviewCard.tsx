import VoteButtonGroup from '@/components/VoteButtonGroup'
import UserAvatar from '@/features/users/components/UserAvatar'
import type { PostPreviewFragment } from '@/generated/graphql'
import { formatDateRelative, formatNumber } from '@/utils/string-utils'
import { Link, useNavigate } from '@tanstack/react-router'
import clsx from 'clsx'
import React from 'react'
import { FaRegComment } from 'react-icons/fa'
import PostPreviewCardContent from './PostPreviewCardContent'

export interface PostPreviewCardProps {
  post: PostPreviewFragment
}

const PostPreviewCard = (props: PostPreviewCardProps) => {
  const { post } = props
  const { title, user, commentCount, votes, createdAt } = post

  const navigate = useNavigate()

  const handleOnCardClick = () => {
    navigate({
      to: '/posts/$id',
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
      // eslint-disable-next-line tailwindcss/no-custom-classname
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
          className='flex min-w-0 flex-col gap-1'
        >
          <div
            className='flex items-center'
          >
            <Link
              to='/users/$id'
              params={{ id: user.id }}
              className='text-sm font-medium hover:underline'
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
              className='text-xs text-black/50'
            >
              {formatDateRelative(createdAt)}
            </span>
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
            />

            <Link
              to='/posts/$id'
              params={{ id: post.id }}
              className='bg-empty flex items-center gap-2 rounded-full p-2 px-4 text-sm hover:bg-gray-200'
            >
              <FaRegComment
                className='size-4.5'
              />

              {formatNumber(commentCount)}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostPreviewCard
