import { type FragranceReview } from '@/generated/graphql'
import { Colors } from '@/styles/Colors'
import clsx from 'clsx'
import emptyFragrance from '@/assets/fall-back-fi.svg'
import React from 'react'
import { type FlattenType } from '@/common/util-types'
import { formatDate } from '@/common/string-utils'
import RatingStars from '../RatingStars'
import BouncyButton from '@/components/BouncyButton'
import { HiDotsHorizontal } from 'react-icons/hi'
import { VoteButton } from '../VoteButton'
import { Overlay } from '../Overlay'

type FlattenedReview = FlattenType<FragranceReview>
type UserReviewFragrance = Pick<FlattenedReview['fragrance'], 'brand' | 'name' | 'images'>
export type CardUserFragranceReview = Omit<FlattenedReview, 'fragrance' | 'user'> & { fragrance: UserReviewFragrance }

export interface UserFragranceReviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
  review: CardUserFragranceReview
  onVote?: (myVote: boolean | null) => void
}

const UserReviewCard = (props: UserFragranceReviewCardProps) => {
  const { review, onVote, className, ...rest } = props
  const { fragrance, rating, review: text, votes, myVote, dCreated } = review
  const { name, brand, images } = fragrance

  return (
    <div
      className={clsx(
        'flex flex-col w-full gap-5',
        className
      )}
      {...rest}
    >
      <div
        className='flex flex-row gap-5'
      >
        <div
          className='w-20 aspect-square rounded-xl overflow-hidden self-start relative'
        >
          <img
            src={images.at(0)?.url ?? emptyFragrance}
            className='overflow-hidden object-cover w-full h-full'
            style={{ backgroundColor: Colors.empty }}
          />
          <Overlay />
        </div>
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
                {name}
              </span>
              <span> • </span>
              <span
                className='text-xs'
              >
                {brand}
              </span>
            </p>
          </div>

          <div className='flex gap-2 items-center'>
            <RatingStars
              rating={rating}
              filledColor={Colors.sinopia}
              emptyColor={Colors.empty}
              size={18}
            />
            <p className='text-xs'>
              {formatDate(dCreated)}
            </p>
          </div>
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
        <p>
          {text}
        </p>)}
      <VoteButton
        votes={votes}
        myVote={myVote}
        className='mr-auto'
        onVote={onVote}
      />
    </div>
  )
}

export default UserReviewCard
