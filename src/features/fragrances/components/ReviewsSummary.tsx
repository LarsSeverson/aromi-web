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
  const { info, ...rest } = props
  const { count, averageRating, distribution } = info

  return (
    <div
      className={clsx(
        'flex flex-row flex-wrap',
        rest.className
      )}
      {...rest}
    >
      <div
        className='flex flex-col items-center justify-center px-14 gap-3 flex-1'
      >
        <h5
          className='font-pd text-xl'
        >
          {(averageRating ?? 0).toFixed(1)}
        </h5>

        <RatingStars
          rating={averageRating}
          filledColor={Colors.sinopia}
          emptyColor='#f0f0f0'
          size={32}
        />

        <p
          className='font-pd opacity-60'
        >
          {formatNumber(count)} {count === 1 ? 'review' : 'reviews'}
        </p>
      </div>

      <ReviewDistributionLadder
        distribution={distribution}
        className='flex-3'
      />
    </div>
  )
}
