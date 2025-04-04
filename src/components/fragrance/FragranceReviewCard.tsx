import { type User, type FragranceReview } from '@/generated/graphql'
import { Colors } from '@/styles/Colors'
import React from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'
import empty from '@/assets/avatar-empty.svg'
import { formatDate } from '@/common/string-utils'
import { VoteButton } from '../common/VoteButton'
import RatingStars from '../common/RatingStars'
import clsx from 'clsx'
import BouncyButton from '../common/BouncyButton'

type CardFragranceReviewUsaer = Pick<User, 'id' | 'username'>
export type CardFragranceReview = Omit<FragranceReview, 'fragrance' | 'user'> & { user: CardFragranceReviewUsaer }

export interface FragranceReviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
  review: CardFragranceReview
  onVote?: (myVote: boolean | null) => void
}

export const FragranceReviewCard = (props: FragranceReviewCardProps) => {
  const { review, onVote, className, ...rest } = props
  const { user, rating, review: text, votes, myVote, dCreated } = review
  const { username } = user

  return (
    <div
      className={clsx(
        'flex flex-col w-full gap-5 p-5',
        className
      )}
      {...rest}
    >
      <div
        className='flex flex-row gap-5'
      >
        <img
          src={empty}
          className='rounded-full min-w-16 w-16 aspect-square overflow-hidden object-cover'
          style={{ backgroundColor: Colors.empty }}
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
                {formatDate(dCreated)}
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
        <BouncyButton
          className='aspect-square rounded-full mb-auto ml-auto px-2'
        >
          <HiDotsHorizontal
            size={22}
          />
        </BouncyButton>
      </div>
      {text.length > 0 && (
        <p
          className='px-5'
        >
          {text}
        </p>
      )}
      <VoteButton
        votes={votes}
        myVote={myVote}
        className='mr-auto'
        onVote={onVote}
      />
    </div>
  )
}
