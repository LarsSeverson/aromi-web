import React from 'react'
import { FragranceReviewCard } from '@/features/review/components/FragranceReviewCard'
import clsx from 'clsx'
import { type IFragranceReviewSummary } from '@/features/review/types'

export interface ReviewsListProps extends React.HTMLAttributes<HTMLDivElement> {
  myReview?: IFragranceReviewSummary | null | undefined
  reviews: IFragranceReviewSummary[]
  currentPage: number
  reviewsPerPage?: number
}

export const ReviewsList = (props: ReviewsListProps) => {
  const {
    myReview,
    reviews,

    currentPage,
    reviewsPerPage = 5,

    className,
    ...rest
  } = props

  const start = currentPage * reviewsPerPage
  const end = start + reviewsPerPage
  const showMyReview = myReview != null && currentPage === 0

  return (
    <div
      className={clsx(
        'w-full',
        className
      )}
      {...rest}
    >
      {showMyReview && (
        <FragranceReviewCard
          review={myReview}
          isMyReview
        />
      )}

      {reviews
        .slice(start, end)
        .map((review) => (
          <FragranceReviewCard
            key={review.id}
            review={review}
          />
        ))}
    </div>
  )
}
