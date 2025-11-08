import React from 'react'
import { Link, useNavigate } from '@tanstack/react-router'
import InteractableRatingStars from '@/components/InteractableRatingStars'
import { Colors } from '@/styles/Colors'
import type { AllFragranceReviewFragment, FragranceDetailFragment } from '@/generated/graphql'
import { PLACEHOLDER_USER, useMyContext } from '@/features/users'
import UserAvatar from '@/features/users/components/UserAvatar'
import { formatDate } from '@/utils/string-utils'
import type { Nullable } from '@/utils/util'

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
      className='shadow-symmetrical group cursor-pointer p-5'
      onClick={handleRouteToReview.bind(null, undefined)}
    >
      <div
        className='flex flex-col gap-5'
      >
        <div
          className='flex flex-row gap-5'
        >
          <div
            className='h-16'
          >
            <UserAvatar
              user={me}
            />
          </div>

          <Link
            to='/fragrances/$id/review'
            params={{ id }}
            className='flex flex-col gap-1'
          >
            <div
              className='flex items-center gap-3'
            >
              <p
                className='truncate'
              >
                <span
                  className='text-md font-medium'
                >
                  {user.username}
                </span>

                <span> • </span>

                <span
                  className='text-xs'
                >
                  {formatDate(new Date())}
                </span>
              </p>
            </div>

            <span
              className='text-tawny text-md flex-1 truncate font-medium group-hover:underline'
            >
              {hasReview ? 'Edit' : 'Start'} your review of {fragrance.name}
            </span>
          </Link>

          <InteractableRatingStars
            rating={myReview?.rating ?? 0}
            size={30}
            emptyColor={Colors.empty2}
            filledColor={Colors.sinopia}
            className='text-md ml-auto flex flex-col items-center gap-1'
            onRatingChange={handleRouteToReview}
          />
        </div>
      </div>
    </div>
  )
}

export default MyFragranceReviewButton
