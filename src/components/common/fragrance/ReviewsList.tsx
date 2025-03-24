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
      {reviews.slice(start, end).map((review, index) => (
        <FragranceReviewCard
          key={`${review.id}-${index}`}
          review={{ ...review, review: (index + start).toString() }}
          className='mt-10'
        />
      ))}
    </div>
  )
}
