import type { Nullable } from '@/utils/util'
import clsx from 'clsx'
import React, { useCallback, useState } from 'react'
import { FaStar, FaRegStar } from 'react-icons/fa'

export const ratingMap = {
  0: 'Select your rating',
  1: 'Terrible',
  2: 'Poor',
  3: 'Average',
  4: 'Good',
  5: 'Excellent'
}

export interface RatingStarsProps extends React.HTMLAttributes<HTMLDivElement> {
  rating: Nullable<number>
  size?: number
  filledColor?: string
  emptyColor?: string
  interactable?: boolean
  to?: string
}

const RatingStars = (props: RatingStarsProps) => {
  const {
    rating,
    size = 15,
    filledColor = 'black',
    emptyColor = 'black',
    interactable = false,
    to,
    className,
    ...rest
  } = props

  const [hoveredRating, setHoveredRating] = useState<number | null>(null)
  const effectiveRating = interactable && hoveredRating !== null ? hoveredRating : rating ?? 0

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
    const fillPercentage = effectiveRating >= startNumber ? 100 : (effectiveRating - (startNumber - 1)) * 100
    const width = fillPercentage === 100 ? fillPercentage : transformFillPercentage(fillPercentage)

    return (
      <div
        key={index}
        className={clsx(
          'relative',
          interactable && 'cursor-pointer'
        )}
        style={{ width: size, height: size, marginRight: 2 }}
        onMouseEnter={interactable ? () => { setHoveredRating(startNumber) } : undefined}
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
        className,
        interactable && 'flex flex-col items-center gap-3'
      )}
      {...rest}
    >
      <div
        className={clsx(
          'flex'
        )}
        onMouseLeave={interactable ? () => { setHoveredRating(null) } : undefined}
      >
        {stars}
      </div>

      {interactable && (
        <p
          className='font-medium opacity-50'
        >
          {ratingMap[effectiveRating as keyof typeof ratingMap] ?? ratingMap[0]}
        </p>
      )}
    </div>
  )
}

export default RatingStars
