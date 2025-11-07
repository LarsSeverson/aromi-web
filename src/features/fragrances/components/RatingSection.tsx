import StarRating from '@/components/StarRating'
import { Fieldset } from '@base-ui-components/react'
import React from 'react'

export interface RatingSectionProps {
  defaultRating?: number
}

const RatingSection = (props: RatingSectionProps) => {
  const { defaultRating = 0 } = props

  const [rating, setRating] = React.useState(defaultRating)

  return (
    <Fieldset.Root
      name='rating'
      className='p-4 pt-10'
    >
      <Fieldset.Legend
        className='mb-4 text-lg font-bold'
      >
        How would you rate this fragrance?
      </Fieldset.Legend>

      <StarRating
        value={rating}
        onChange={setRating}
      />
    </Fieldset.Root>
  )
}

export default RatingSection
