import React from 'react'
import { Link, useNavigate } from '@tanstack/react-router'
import InteractableRatingStars from '@/components/InteractableRatingStars'
import { Colors } from '@/styles/Colors'
import type { AllFragranceReviewFragment, FragranceDetailFragment } from '@/generated/graphql'
import { PLACEHOLDER_USER, useMyContext } from '@/features/users'
import UserAvatar from '@/features/users/components/UserAvatar'
import { formatDate } from '@/utils/string-utils'
import type { Nullable } from '@/utils/util'
import clsx from 'clsx'

export interface MyFragranceReviewButtonProps {
  fragrance: FragranceDetailFragment
  myReview?: Nullable<AllFragranceReviewFragment>
}

const MyFragranceReviewButton = (props: MyFragranceReviewButtonProps) => {
  const { fragrance, myReview } = props
  const { id } = fragrance

  const navigate = useNavigate()
  const { me } = useMyContext()

  const user = me ?? PLACEHOLDER_USER
  const hasReview = myReview != null

  const handleRouteToReview = (rating?: number) => {
    const searchRating = rating ?? myReview?.rating

    navigate({
      to: '/fragrances/$id/review',
      params: { id },
      search: { rating: searchRating }
    })
  }

  return (
    <div
      className={clsx(
        'shadow-symmetrical group cursor-pointer p-4 md:p-5',
        'rounded-xl md:rounded-2xl'
      )}
      onClick={handleRouteToReview.bind(null, undefined)}
    >
      <div
        className='flex flex-col gap-4 md:gap-5'
      >
        <div
          className='flex flex-row items-center gap-3 md:gap-5'
        >
          <div
            className='size-12 shrink-0 md:size-16'
          >
            <UserAvatar
              user={me}
            />
          </div>

          <Link
            to='/fragrances/$id/review'
            params={{ id }}
            className='flex flex-1 flex-col gap-0.5 overflow-hidden md:gap-1'
          >
            <div
              className='flex items-center gap-2 md:gap-3'
            >
              <p
                className='truncate'
              >
                <span
                  className='md:text-md text-sm font-medium'
                >
                  {user.username}
                </span>

                <span className='px-0.5 text-[10px] md:text-base'> • </span>

                <span
                  className='text-[10px] md:text-xs'
                >
                  {formatDate(new Date())}
                </span>
              </p>
            </div>

            <span
              className='text-tawny md:text-md min-w-0 truncate text-xs font-medium group-hover:underline'
            >
              {hasReview ? 'Edit' : 'Start'} your review of {fragrance.name}
            </span>
          </Link>

          <InteractableRatingStars
            rating={myReview?.rating ?? 0}
            emptyColor={Colors.empty2}
            filledColor={Colors.sinopia}
            className='text-md ml-auto flex flex-col items-center gap-2'
            onRatingChange={handleRouteToReview}
          />
        </div>
      </div>
    </div>
  )
}

export default MyFragranceReviewButton
