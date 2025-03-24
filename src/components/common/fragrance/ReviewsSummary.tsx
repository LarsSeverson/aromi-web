import { type FragranceReviewDistribution } from '@/generated/graphql'
import React from 'react'
import RatingStars from '../RatingStars'
import { Colors } from '@/styles/Colors'
import LinearScaleBar from '../LinearScaleBar'
import clsx from 'clsx'
import { formatVoteTypeNumber } from '@/common/string-utils'

export interface ReviewSummaryProps extends React.HTMLAttributes<HTMLDivElement> {
  rating: number
  reviewCount: number
  reviewDistribution: FragranceReviewDistribution
}

export const ReviewsSummary = (props: ReviewSummaryProps) => {
  const { rating, reviewCount, reviewDistribution, className, ...rest } = props

  const numbers = Object.values(reviewDistribution).filter(val => typeof val === 'number')
  const maxDistCount = (numbers.length > 0) ? Math.max(...numbers) : 1

  const getWidth = (count: number) => {
    const minWidth = 5
    return (maxDistCount === 0) ? minWidth : Math.max((count / maxDistCount) * 100, minWidth)
  }

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
          {formatVoteTypeNumber(reviewCount)} {reviewCount === 1 ? 'review' : 'reviews'}
        </p>
      </div>
      <div className='flex-[3] flex flex-col items-start min-w-48'>
        <div className='table w-full font-light text-[14px] border-spacing-3'>
          <div className='table-row'>
            <div className='table-cell pr-1 text-center align-middle w-1/6 min-w-20'>5 stars</div>
            <div className='table-cell align-middle'>
              <LinearScaleBar
                value={getWidth(reviewDistribution.five)}
                color={Colors.sinopia}
                trackColor='#f0f0f0'
                style={{ height: 10 }}
              />
            </div>
          </div>
          <div className='table-row'>
            <div className='table-cell pr-1 text-center align-middle w-1/6'>4 stars</div>
            <div className='table-cell align-middle'>
              <LinearScaleBar
                value={getWidth(reviewDistribution.four)}
                color={Colors.cocoaBrown}
                trackColor='#f0f0f0'
                style={{ height: 10 }}
              />
            </div>
          </div>
          <div className='table-row'>
            <div className='table-cell pr-1 text-center align-middle'>3 stars</div>
            <div className='table-cell align-middle'>
              <LinearScaleBar
                value={getWidth(reviewDistribution.three)}
                color={Colors.caramel}
                trackColor='#f0f0f0'
                style={{ height: 10 }}
              />
            </div>
          </div>
          <div className='table-row'>
            <div className='table-cell pr-1 text-center align-middle'>2 stars</div>
            <div className='table-cell align-middle'>
              <LinearScaleBar
                value={getWidth(reviewDistribution.two)}
                color={Colors.butterscotch}
                trackColor='#f0f0f0'
                style={{ height: 10 }}
              />
            </div>
          </div>
          <div className='table-row'>
            <div className='table-cell pr-1 text-center align-middle'>1 star</div>
            <div className='table-cell align-middle'>
              <LinearScaleBar
                value={getWidth(reviewDistribution.one)}
                color={Colors.hunyadiYellow}
                trackColor='#f0f0f0'
                style={{ height: 10 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
