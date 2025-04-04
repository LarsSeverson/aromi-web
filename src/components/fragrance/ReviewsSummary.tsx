import { type FragranceReviewDistribution } from '@/generated/graphql'
import React from 'react'
import RatingStars from '../common/RatingStars'
import { Colors } from '@/styles/Colors'
import clsx from 'clsx'
import { formatNumber } from '@/common/string-utils'
import ReviewDistributionLadder from './ReviewDistributionLadder'

export interface ReviewSummaryProps extends React.HTMLAttributes<HTMLDivElement> {
  rating: number
  reviewCount: number
  reviewDistribution: FragranceReviewDistribution
}

export const ReviewsSummary = (props: ReviewSummaryProps) => {
  const { rating, reviewCount, reviewDistribution, className, ...rest } = props

  return (
    <div
      className={clsx(
        'flex flex-row flex-wrap',
        className
      )}
      {...rest}
    >
      <div className='flex flex-col items-center justify-center px-14 gap-3 flex-1'>
        <h5 className='font-pd text-xl'>
          {rating.toFixed(1)}
        </h5>
        <RatingStars
          rating={rating}
          filledColor={Colors.sinopia}
          emptyColor='#f0f0f0'
          size={32}
        />
        <p
          className='font-pd opacity-60'
        >
          {formatNumber(reviewCount)} {reviewCount === 1 ? 'review' : 'reviews'}
        </p>
      </div>
      <ReviewDistributionLadder
        reviewDistribution={reviewDistribution}
        className='flex-[3]'
      />
    </div>
  )
}
