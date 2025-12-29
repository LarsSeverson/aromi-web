/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import * as React from 'react'
import { Field } from '@base-ui/react'
import { ratingMap } from './RatingStars'
import { FaStar } from 'react-icons/fa'
import clsx from 'clsx'
import { useAuthHelpers } from '@/features/auth/hooks/useAuthHelpers'

export interface StarRatingProps {
  value: number
  maxStars?: number
  onChange?: (value: number) => void
}

export const StarRating = (props: StarRatingProps) => {
  const {
    value,
    maxStars = 5,
    onChange
  } = props

  const { checkAuthenticated } = useAuthHelpers()

  const [hoverValue, setHoverValue] = React.useState(0)

  const handleOnStarClick = (starValue: number) => {
    const shouldContinue = checkAuthenticated()
    if (!shouldContinue) return

    onChange?.(starValue)
  }

  return (
    <Field.Root
      name='rating'
      className="flex flex-col items-center justify-center"
    >
      <div
        className='flex flex-row-reverse justify-end'
      >
        {Array
          .from({ length: maxStars })
          .map((_, i) => {
            const starValue = maxStars - i
            const isActive = (hoverValue ? hoverValue >= starValue : value >= starValue)

            return (
              <label
                key={starValue}
                className={clsx(
                  'cursor-pointer px-1 transition-colors',
                  'hover:text-sinopia text-gray-300'
                )}
                onMouseEnter={setHoverValue.bind(null, starValue)}
                onMouseLeave={setHoverValue.bind(null, 0)}
              >
                <Field.Control
                  type="radio"
                  name="rating"
                  value={starValue}
                  checked={value === starValue}
                  onChange={handleOnStarClick.bind(null, starValue)}
                  className="sr-only"
                />

                <FaStar
                  size={40}
                  className={clsx(
                    'transition-colors',
                    isActive ? 'text-sinopia' : 'text-gray-300'
                  )}
                />
              </label>
            )
          })}
      </div>

      <Field.Description
        className='text-md mt-2 text-gray-600'
      >
        {ratingMap[(hoverValue || value) as keyof typeof ratingMap] ?? ratingMap[0]}
      </Field.Description>

      <Field.Error
        match='valueMissing'
        className='mt-2 text-red-700'
      >
        Please add a rating before submitting your review
      </Field.Error>
    </Field.Root>
  )
}

export default StarRating