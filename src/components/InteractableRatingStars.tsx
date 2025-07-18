import clsx from 'clsx'
import React, { useCallback, useState } from 'react'
import { FaStar, FaRegStar } from 'react-icons/fa'
import BouncyButton from './BouncyButton'

export const ratingMap = {
  0: 'Select your rating',
  1: 'Terrible',
  2: 'Poor',
  3: 'Average',
  4: 'Good',
  5: 'Excellent'
}

export interface InteractableRatingStarsProps extends React.HTMLAttributes<HTMLDivElement> {
  rating: number
  size?: number
  filledColor?: string
  emptyColor?: string
  onStarClick?: (rating: number) => void
}

const InteractableRatingStars = (props: InteractableRatingStarsProps) => {
  const {
    rating,
    size = 15,
    filledColor = 'black',
    emptyColor = 'black',
    onStarClick,
    className,
    ...rest
  } = props

  const [hoveredRating, setHoveredRating] = useState<number | null>(null)
  const effectiveRating = hoveredRating ?? rating

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

  const handleStarClick = (e: React.SyntheticEvent, rating: number) => {
    e.stopPropagation()
    e.preventDefault()

    onStarClick?.(rating)
  }

  const stars = Array.from({ length: 5 }, (_, index) => {
    const startNumber = index + 1
    const fillPercentage = effectiveRating >= startNumber ? 100 : (effectiveRating - (startNumber - 1)) * 100
    const width = fillPercentage === 100 ? fillPercentage : transformFillPercentage(fillPercentage)

    return (
      <BouncyButton
        key={index}
        className={clsx(
          'relative px-0 py-0 hover:backdrop-opacity-0'
        )}
        style={{ width: size, height: size, marginRight: 2 }}
        onMouseEnter={() => { setHoveredRating(startNumber) }}
        onClick={(e) => { handleStarClick(e, startNumber) }}
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
      </BouncyButton>
    )
  })

  return (
    <div
      className={clsx(
        'flex flex-col items-center gap-3',
        className
      )}
      {...rest}
    >
      <div
        className={clsx(
          'flex'
        )}
        onMouseLeave={() => { setHoveredRating(null) }}
      >
        {stars}
      </div>

      <p
        className='text-sm opacity-50'
      >
        {ratingMap[effectiveRating as keyof typeof ratingMap] ?? ratingMap[0]}
      </p>
    </div>
  )
}

export default InteractableRatingStars
