import { Colors } from '@/styles/Colors'
import React from 'react'
import { formatDate } from '@/utils/string-utils'
import { VoteButtonGroup } from '@/components/VoteButtonGroup'
import RatingStars from '@/components/RatingStars'
import clsx from 'clsx'
import type { AllFragranceReviewFragment } from '@/generated/graphql'
import UserAvatar from '@/features/users/components/UserAvatar'
import MoreOptionsReviewPopover from './MoreOptionsReviewPopover'

export interface FragranceReviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
  review: AllFragranceReviewFragment
}

export const FragranceReviewCard = (props: FragranceReviewCardProps) => {
  const { review, ...rest } = props
  const { author, rating, body, votes, createdAt } = review
  const { username } = author

  const showBody = body != null && body.length > 0

  return (
    <div
      className={clsx(
        'flex w-full flex-col gap-5 p-5',
        rest.className
      )}
      {...rest}
    >
      <div
        className='flex flex-row gap-5'
      >
        <div
          className='h-14'
        >
          <UserAvatar
            user={author}
          />
        </div>

        <div
          className='flex flex-col gap-2'
        >
          <div
            className='flex w-full min-w-0 flex-row items-center gap-3 self-start'
          >
            <p
              className='truncate'
            >
              <span
                className='text-md font-medium'
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
          />
        </div>

      </div>

      {showBody && (
        <p
          className='px-5'
        >
          {body}
        </p>
      )}

      <div
        className='ml-auto'
      >
        <VoteButtonGroup
          votes={votes}
        />
      </div>
    </div>
  )
}
