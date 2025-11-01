import { Colors } from '@/styles/Colors'
import React from 'react'
import { formatDate } from '@/utils/string-utils'
import { VoteButtonGroup } from '@/components/VoteButtonGroup'
import RatingStars from '@/components/RatingStars'
import clsx from 'clsx'
import type { AllFragranceReviewFragment } from '@/generated/graphql'
import { useToastMessage } from '@/hooks/useToastMessage'
import UserAvatar from '@/features/users/components/UserAvatar'

export interface FragranceReviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
  review: AllFragranceReviewFragment
}

export const FragranceReviewCard = (props: FragranceReviewCardProps) => {
  const { review, ...rest } = props

  const { author, rating, body, votes, createdAt } = review
  const { username } = author

  const { toastError } = useToastMessage()

  return (
    <div
      className={clsx(
        'flex flex-col w-full gap-5 p-5',
        rest.className
      )}
      {...rest}
    >
      <div
        className='flex flex-row gap-5'
      >
        <UserAvatar
          user={author}
        />

        <div
          className='flex flex-col gap-2'
        >
          <div
            className='flex flex-row gap-3 self-start items-center w-full min-w-0'
          >
            <p
              className='truncate'
            >
              <span
                className='font-pd text-xl'
              >
                {username}
              </span>

              <span> • </span>

              <span
                className='text-xs'
              >
                {formatDate(createdAt)}
              </span>
            </p>
          </div>

          <RatingStars
            rating={rating}
            filledColor={Colors.sinopia}
            emptyColor={Colors.empty}
            size={18}
          />
        </div>

        <div
          className='ml-auto'
        >
          <MoreOptionsReviewPopover
            review={review}
            isMyReview={isMyReview}
          />
        </div>

      </div>

      {text.length > 0 && (
        <p
          className='px-5'
        >
          {text}
        </p>
      )}

      <VoteButtonGroup
        votes={votes.voteScore}
        myVote={votes.myVote}
        className='mr-auto'
        onVote={handleVoteOnReview}
      />
    </div>
  )
}
