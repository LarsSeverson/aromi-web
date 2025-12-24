import type { AllFragranceReviewInfoFragment } from '@/generated/graphql'
import React from 'react'
import RatingStars from '@/components/RatingStars'
import { Colors } from '@/styles/Colors'
import clsx from 'clsx'
import { formatNumber } from '@/utils/string-utils'
import ReviewDistributionLadder from './ReviewDistributionLadder'

export interface ReviewSummaryProps extends React.HTMLAttributes<HTMLDivElement> {
  info: AllFragranceReviewInfoFragment
}

export const ReviewsSummary = (props: ReviewSummaryProps) => {
  const { info, className, ...rest } = props
  const { count, averageRating, distribution } = info

  return (
    <div
      className={clsx(
        'flex flex-col md:flex-row',
        'gap-6 md:gap-0',
        className
      )}
      {...rest}
    >
      <div
        className='flex flex-1 flex-col items-center justify-center gap-2 md:gap-3'
      >
        <h5
          className='text-xl md:text-2xl'
        >
          {(averageRating ?? 0).toFixed(1)}
        </h5>

        <RatingStars
          rating={averageRating}
          filledColor={Colors.sinopia}
          emptyColor='#f0f0f0'
          className='flex size-6 items-center justify-center md:size-8'
        />

        <p
          className='text-sm opacity-60 md:text-base'
        >
          {formatNumber(count)} {count === 1 ? 'review' : 'reviews'}
        </p>
      </div>

      <ReviewDistributionLadder
        distribution={distribution}
        className='flex-3 px-2 md:px-0'
      />
    </div>
  )
}
