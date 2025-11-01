import React from 'react'
import LinearScaleBar from '@/components/LinearScaleBar'
import { Colors } from '@/styles/Colors'
import clsx from 'clsx'
import type { AllFragranceReviewInfoFragment } from '@/generated/graphql'

export interface ReviewDistributionLadderProps extends React.HTMLAttributes<HTMLDivElement> {
  distribution: AllFragranceReviewInfoFragment['distribution']
}

const ReviewDistributionLadder = (props: ReviewDistributionLadderProps) => {
  const { distribution, className, ...rest } = props

  const counts = distribution.map(entry => entry.count)
  const maxCount = Math.max(...counts, 1)

  const getWidth = (count: number) => {
    const minWidth = 5
    return Math.max((count / maxCount) * 100, minWidth)
  }

  const getColor = (rating: number) => {
    if (rating === 5) return Colors.sinopia
    if (rating === 4) return Colors.cocoaBrown
    if (rating === 3) return Colors.caramel
    if (rating === 2) return Colors.butterscotch
    return Colors.hunyadiYellow
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
        {[5, 4, 3, 2, 1].map(
          rating => {
            const entry = distribution.find(d => d.rating === rating)
            const count = entry?.count ?? 0
            const color = getColor(rating)

            return (
              <div
                key={rating}
                className='table-row'
              >
                <div
                  className='table-cell text-center align-middle w-1/6 min-w-20'
                >
                  {rating} {rating === 1 ? 'star' : 'stars'}
                </div>

                <div
                  className='table-cell align-middle'
                >
                  <LinearScaleBar
                    value={getWidth(count)}
                    color={color}
                    trackColor='#f0f0f0'
                    style={{ height: 10 }}
                  />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ReviewDistributionLadder
