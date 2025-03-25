import BouncyButton from '@/components/BouncyButton'
import { type FragranceReview } from '@/generated/graphql'
import { Colors } from '@/styles/Colors'
import React from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'
import empty from '@/assets/avatar-empty.svg'
import { formatDate } from '@/common/string-utils'
import { VoteButton } from '../VoteButton'
import RatingStars from '../RatingStars'
import clsx from 'clsx'

export type CardFragranceReview = FragranceReview

export interface FragranceReviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
  review: CardFragranceReview
  onVote?: (myVote: boolean | null) => void
}

export const FragranceReviewCard = (props: FragranceReviewCardProps) => {
  const { review, className, ...rest } = props
  const { dCreated, author, rating, review: text, votes } = review

  return (
    <div
      className={clsx(
        'flex flex-col w-full gap-5',
        className
      )}
      {...rest}
    >
      <div className='flex flex-row gap-5'>
        <img
          className='rounded-full min-w-16 w-16 aspect-square overflow-hidden object-cover'
          style={{ backgroundColor: Colors.empty }}
          src={empty}
        />
        <div className='flex flex-col gap-2'>
          <div className='flex flex-row gap-3 self-start items-center w-full min-w-0'>
            <p className='truncate'>
              <span className='font-pd text-xl'>{author}</span>
              <span> • </span>
              <span className='text-xs'>{formatDate(dCreated)}</span>
            </p>
          </div>
          <RatingStars
            rating={rating}
            filledColor={Colors.sinopia}
            emptyColor={Colors.empty}
            size={18}
          />
        </div>
        <BouncyButton
          className='aspect-square rounded-full mb-auto ml-auto px-2'
        >
          <HiDotsHorizontal
            size={22}
          />
        </BouncyButton>
      </div>
      <p
        className='px-5'
      >
        {text}
      </p>
      <VoteButton
        votes={votes}
        className='mr-auto'
      />
    </div>
  )
}
