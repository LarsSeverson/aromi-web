import React from 'react'
import { FragranceReviewCard } from '@/features/fragrance/components/FragranceReviewCard'
import clsx from 'clsx'
import { type IFragranceReviewSummary } from '../types'

export interface ReviewsListProps extends React.HTMLAttributes<HTMLDivElement> {
  reviews: IFragranceReviewSummary[]
  currentPage: number
  reviewsPerPage?: number
}

export const ReviewsList = (props: ReviewsListProps) => {
  const { reviews, currentPage, reviewsPerPage = 5, className, ...rest } = props

  const start = currentPage * reviewsPerPage
  const end = start + reviewsPerPage

  return (
    <div
      className={clsx(
        'w-full',
        className
      )}
      {...rest}
    >
      {reviews.slice(start, end).map((review) => (
        <FragranceReviewCard
          key={review.id}
          review={review}
        />
      ))}
    </div>
  )
}
