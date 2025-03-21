import clsx from 'clsx'
import React, { useCallback } from 'react'
import { FaStar, FaRegStar } from 'react-icons/fa'

export interface RatingStarsProps extends React.HTMLAttributes<HTMLDivElement> {
  rating: number
  size?: number
  filledColor?: string
  emptyColor?: string
}

const RatingStars = (props: RatingStarsProps) => {
  const {
    rating,
    size = 15,
    filledColor = 'black',
    emptyColor = 'black',
    className,
    ...rest
  } = props

  const transformFillPercentage = useCallback((percentage: number): number => {
    const center = 50

    if (percentage <= center) {
      return Math.max(0, percentage)
    }

    const deviation = percentage - center
    const scalingFactor = 1 - Math.abs(deviation) / 50
    const adjusted = center + deviation * scalingFactor

    return Math.max(0, Math.min(100, adjusted))
  }, [])

  const stars = Array.from({ length: 5 }, (_, index) => {
    const startNumber = index + 1
    const fillPercentage = rating >= startNumber ? 100 : (rating - (startNumber - 1)) * 100
    const width = fillPercentage === 100 ? fillPercentage : transformFillPercentage(fillPercentage)

    return (
      <div
        key={index}
        style={{ width: size, height: size, marginRight: 2 }}
        className='relative'
      >
        <FaRegStar
          size={size}
          color={emptyColor}
        />
        <div
          className='absolute top-0 left-0 overflow-hidden'
          style={{ width: `${width}%`, height: size }}
        >
          <FaStar
            size={size}
            color={filledColor}
          />
        </div>
      </div>
    )
  })

  return (
    <div
      className={clsx(
        'flex flex-row',
        className
      )}
      {...rest}
    >
      {stars}
    </div>
  )
}

export default RatingStars
