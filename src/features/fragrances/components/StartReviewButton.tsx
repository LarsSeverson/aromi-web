import React from 'react'
import { Link, useNavigate } from '@tanstack/react-router'
import InteractableRatingStars from '@/components/InteractableRatingStars'
import { Colors } from '@/styles/Colors'
import type { FragranceDetailFragment } from '@/generated/graphql'
import { PLACEHOLDER_USER, useMyContext } from '@/features/users'
import UserAvatar from '@/features/users/components/UserAvatar'
import { formatDate } from '@/utils/string-utils'

export interface StartReviewButtonProps {
  fragrance: FragranceDetailFragment
}

const StartReviewButton = (props: StartReviewButtonProps) => {
  const { fragrance } = props
  const { id } = fragrance

  const navigate = useNavigate()
  const { me } = useMyContext()

  const user = me ?? PLACEHOLDER_USER

  const handleRouteToReview = (rating?: number) => {
    navigate({
      to: '/fragrances/$id/review',
      params: { id },
      search: { rating }
    })
  }

  return (
    <div
      className='shadow-symmetrical p-5 group cursor-pointer'
      onClick={() => { handleRouteToReview() }}
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
              className='flex gap-3 items-center'
            >
              <p
                className='truncate'
              >
                <span
                  className='font-semibold text-black/80'
                >
                  {user.username}
                </span>

                <span> • </span>

                <span
                  className='text-sm text-black/70'
                >
                  {formatDate(new Date())}
                </span>
              </p>
            </div>

            <span
              className='text-tawny font-medium text-md truncate group-hover:underline flex-1'
            >
              Start your review of {fragrance.name}
            </span>
          </Link>

          <InteractableRatingStars
            rating={0}
            size={30}
            emptyColor={Colors.empty2}
            filledColor={Colors.sinopia}
            className='ml-auto text-md flex flex-col items-center gap-1'
            onRatingChange={handleRouteToReview}
          />
        </div>
      </div>
    </div>
  )
}

export default StartReviewButton
