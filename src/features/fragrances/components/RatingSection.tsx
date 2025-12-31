import StarRating from '@/components/StarRating'
import { Fieldset } from '@base-ui/react'
import React from 'react'
import clsx from 'clsx'

export interface RatingSectionProps {
  defaultRating?: number
  onRatingChange?: (rating: number) => void
}

const RatingSection = (props: RatingSectionProps) => {
  const { defaultRating = 0, onRatingChange } = props

  const [rating, setRating] = React.useState(defaultRating)

  const handleOnRatingChange = (newRating: number) => {
    setRating(newRating)
    onRatingChange?.(newRating)
  }

  return (
    <Fieldset.Root
      name='rating'
      className={clsx(
        'px-2 py-6',
        'md:p-4 md:pt-10'
      )}
    >
      <Fieldset.Legend
        className={clsx(
          'mb-3 text-base font-bold',
          'md:mb-4 md:text-left md:text-lg'
        )}
      >
        How would you rate this fragrance?
      </Fieldset.Legend>

      <StarRating
        value={rating}
        onChange={handleOnRatingChange}
      />
    </Fieldset.Root>
  )
}

export default RatingSection