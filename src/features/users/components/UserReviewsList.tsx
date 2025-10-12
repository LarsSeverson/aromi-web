import React from 'react'
import UserReviewCard, { type CardUserFragranceReview } from './UserReviewCard'
import Divider from '@/components/Divider'

export interface UserReviewsListProps {
  reviews: CardUserFragranceReview[]
  currentPage: number
  reviewsPerPage?: number
}

export const UserReviewsList = (props: UserReviewsListProps) => {
  const { reviews, currentPage, reviewsPerPage = 5 } = props

  const start = currentPage * reviewsPerPage
  const end = start + reviewsPerPage

  return (
    <div className='w-full'>
      {reviews.slice(start, end).map((review) => (
        <div
          key={review.id}
        >
          <UserReviewCard
            review={review}
          />
          <Divider
            horizontal
            className='my-4'
          />
        </div>
      ))}
    </div>
  )
}
