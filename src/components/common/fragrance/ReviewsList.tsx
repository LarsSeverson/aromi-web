import React from 'react'
import { type CardFragranceReview, FragranceReviewCard } from './FragranceReviewCard'

export interface ReviewsListProps {
  reviews: CardFragranceReview[]
  currentPage: number
  reviewsPerPage?: number
}

export const ReviewsList = (props: ReviewsListProps) => {
  const { reviews, currentPage, reviewsPerPage = 5 } = props

  const start = currentPage * reviewsPerPage
  const end = start + reviewsPerPage

  return (
    <div className='w-full'>
      {reviews.slice(start, end).map((review) => (
        <FragranceReviewCard
          key={review.id}
          review={review}
          className='mt-10'
        />
      ))}
    </div>
  )
}
