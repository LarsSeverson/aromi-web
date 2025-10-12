import { type FragranceReviewDistribution } from '@/generated/graphql'
import React from 'react'
import LinearScaleBar from '@/components/LinearScaleBar'
import { Colors } from '@/styles/Colors'
import clsx from 'clsx'

export interface ReviewDistributionLadderProps extends React.HTMLAttributes<HTMLDivElement> {
  reviewDistribution: FragranceReviewDistribution
}

const ReviewDistributionLadder = (props: ReviewDistributionLadderProps) => {
  const { reviewDistribution, className, ...rest } = props
  const numbers = Object.values(reviewDistribution).filter(val => typeof val === 'number')
  const maxDistCount = (numbers.length > 0) ? Math.max(...numbers) : 1

  const getWidth = (count: number) => {
    const minWidth = 5
    return (maxDistCount === 0) ? minWidth : Math.max((count / maxDistCount) * 100, minWidth)
  }

  return (
    <div
      className={clsx(
        'w-full flex flex-col items-start min-w-48',
        className
      )}
      {...rest}
    >
      <div
        className='table w-full font-light text-[14px] border-spacing-y-3'
      >
        <div
          className='table-row'
        >
          <div
            className='table-cell text-center align-middle w-1/6 min-w-20'
          >
            5 stars
          </div>

          <div
            className='table-cell align-middle'
          >
            <LinearScaleBar
              value={getWidth(reviewDistribution.five)}
              color={Colors.sinopia}
              trackColor='#f0f0f0'
              style={{ height: 10 }}
            />
          </div>
        </div>

        <div
          className='table-row'
        >
          <div
            className='table-cell text-center align-middle w-1/6'
          >
            4 stars
          </div>

          <div
            className='table-cell align-middle'
          >
            <LinearScaleBar
              value={getWidth(reviewDistribution.four)}
              color={Colors.cocoaBrown}
              trackColor='#f0f0f0'
              style={{ height: 10 }}
            />
          </div>
        </div>

        <div
          className='table-row'
        >
          <div
            className='table-cell text-center align-middle'
          >
            3 stars
          </div>

          <div
            className='table-cell align-middle'
          >
            <LinearScaleBar
              value={getWidth(reviewDistribution.three)}
              color={Colors.caramel}
              trackColor='#f0f0f0'
              style={{ height: 10 }}
            />
          </div>
        </div>

        <div
          className='table-row'
        >
          <div
            className='table-cell text-center align-middle'
          >
            2 stars
          </div>

          <div
            className='table-cell align-middle'
          >
            <LinearScaleBar
              value={getWidth(reviewDistribution.two)}
              color={Colors.butterscotch}
              trackColor='#f0f0f0'
              style={{ height: 10 }}
            />
          </div>
        </div>
        <div
          className='table-row'
        >
          <div
            className='table-cell text-center align-middle'
          >
            1 star
          </div>

          <div
            className='table-cell align-middle'
          >
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
  )
}

export default ReviewDistributionLadder
