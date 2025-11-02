import clsx from 'clsx'
import React, { useCallback, useState } from 'react'
import { FaStar, FaRegStar } from 'react-icons/fa'
import BouncyButton from './BouncyButton'
import { ratingMap } from './RatingStars'

export interface InteractableRatingStarsProps extends React.HTMLAttributes<HTMLDivElement> {
  rating: number
  size?: number
  filledColor?: string
  emptyColor?: string
  onRatingChange?: (rating: number) => void
}

const InteractableRatingStars = (props: InteractableRatingStarsProps) => {
  const {
    rating,
    size = 15,
    filledColor = 'black',
    emptyColor = 'black',
    onRatingChange,
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

    onRatingChange?.(rating)
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
        onMouseEnter={setHoveredRating.bind(null, startNumber)}
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
      className={className}
      {...rest}
    >
      <div
        className='flex'
        onMouseLeave={setHoveredRating.bind(null, null)}
      >
        {stars}
      </div>

      <p
        className='text-black/60'
      >
        {ratingMap[effectiveRating as keyof typeof ratingMap] ?? ratingMap[0]}
      </p>
    </div>
  )
}

export default InteractableRatingStars
