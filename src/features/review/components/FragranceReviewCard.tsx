import { Colors } from '@/styles/Colors'
import React from 'react'
import { formatDate } from '@/common/string-utils'
import { VoteButton } from '@/components/VoteButton'
import RatingStars from '@/components/RatingStars'
import clsx from 'clsx'
import UserAvatar from '@/features/user/components/UserAvatar'
import { useVoteOnReview } from '../hooks/useVoteOnReview'
import { useToastError } from '@/hooks/useToastError'
import { type IFragranceReviewSummary } from '@/features/review/types'
import MoreOptionsReviewPopover from './MoreOptionsReviewPopover'

export interface FragranceReviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
  review: IFragranceReviewSummary
  isMyReview?: boolean | null | undefined
}

export const FragranceReviewCard = (props: FragranceReviewCardProps) => {
  const {
    review,
    isMyReview,

    className,
    ...rest
  } = props

  const { user, rating, text, votes, audit } = review
  const { username } = user

  const { toastApolloError } = useToastError()
  const { voteOnReview } = useVoteOnReview()

  const handleVoteOnReview = async (vote: boolean | null) => {
    await voteOnReview({ reviewId: review.id, vote })
      .match(
        () => {},
        toastApolloError
      )
  }

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
        <UserAvatar
          user={user}
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
                {formatDate(audit.createdAt)}
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

      <VoteButton
        votes={votes.voteScore}
        myVote={votes.myVote}
        className='mr-auto'
        onVote={handleVoteOnReview}
      />
    </div>
  )
}
