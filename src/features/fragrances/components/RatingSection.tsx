import InteractableRatingStars from '@/components/InteractableRatingStars'
import { Colors } from '@/styles/Colors'
import { Field } from '@base-ui-components/react'
import React from 'react'

export interface RatingSectionProps {
  defaultRating?: number
}

const RatingSection = (props: RatingSectionProps) => {
  const { defaultRating = 0 } = props

  const [rating, setRating] = React.useState(defaultRating)

  return (
    <Field.Root
      name='rating'
      className='p-4 pt-10'
    >
      <Field.Label
        className='mb-4 text-lg font-bold'
      >
        How would you rate this fragrance?
      </Field.Label>

      <div
        className='flex w-full items-center justify-center'
      >
        <InteractableRatingStars
          size={40}
          rating={rating}
          emptyColor={Colors.empty2}
          filledColor={Colors.sinopia}
          className='text-md mt-2 flex w-fit flex-col items-center justify-center gap-3 font-medium'
          onRatingChange={setRating}
        />

        <Field.Control
          value={rating}
          required
          className='sr-only'
        />

        <Field.Error
          match='valueMissing'
          className='text-md mt-2 font-medium text-red-700'
        >
          Please add a rating before submitting your review.
        </Field.Error>
      </div>
    </Field.Root>
  )
}

export default RatingSection
