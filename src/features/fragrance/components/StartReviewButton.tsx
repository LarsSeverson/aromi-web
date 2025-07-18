import React from 'react'
import { Link, useNavigate } from '@tanstack/react-router'
import { type IFragrancePreviewSummary } from '../types'
import InteractableRatingStars from '@/components/InteractableRatingStars'
import { Colors } from '@/styles/Colors'
import { useMyContext } from '@/features/user'
import UserAvatar from '@/features/user/components/UserAvatar'
import { PLACEHOLDER_USER } from '@/features/user/types'
import { formatDate } from '@/common/string-utils'

export interface StartReviewButtonProps {
  fragrance: IFragrancePreviewSummary
}

const StartReviewButton = (props: StartReviewButtonProps) => {
  const { fragrance } = props

  const navigate = useNavigate()
  const myContext = useMyContext()

  const user = myContext.me ?? PLACEHOLDER_USER

  const handleRouteToReview = (rating?: number | undefined) => {
    void navigate({
      from: '/fragrance/$id',
      to: 'review',
      search: {
        rating
      }
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
          <UserAvatar
            user={myContext.me}
          />

          <Link
            to='/fragrance/$id/review'
            params={{ id: String(fragrance.id) }}
            className='flex flex-col gap-1'
          >
            <div
              className='flex gap-3 items-center'
            >
              <p
                className='truncate'
              >
                <span
                  className='font-pd text-xl'
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
              className='text-tawny font-semibold text-md truncate group-hover:underline flex-1'
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
            onStarClick={handleRouteToReview}
          />
        </div>
      </div>
    </div>
  )
}

export default StartReviewButton
