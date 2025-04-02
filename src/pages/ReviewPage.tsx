import AccordPreviewCard from '@/components/common/fragrance/AccordPreviewCard'
import InteractableRatingStars from '@/components/common/InteractableRatingStars'
import PageCategory from '@/components/common/PageCategory'
import useFragranceAccords from '@/hooks/useFragranceAccords'
import { Colors } from '@/styles/Colors'
import React from 'react'

export interface ReviewPageProps {
  fragranceId: number
  rating: number
}

const ReviewPage = (props: ReviewPageProps) => {
  const { fragranceId, rating } = props

  const { data: accords } = useFragranceAccords(fragranceId, 24, true)

  return (
    <div
      className='w-full flex flex-col items-center'
    >
      <div
        className='w-full max-w-4xl'
      >
        <PageCategory
          title='How would you rate this fragrance?'
        >
          <InteractableRatingStars
            rating={rating}
            size={42}
            filledColor={Colors.sinopia}
            emptyColor={Colors.empty2}
          />
        </PageCategory>
        <PageCategory
          title='How are the accords?'
        >
          <div
            className='flex items-center justify-center'
          >
            <div className='grid grid-cols-6 w-fit'>
              {accords.map(accord => (
                <AccordPreviewCard
                  key={accord.id}
                  accord={accord}
                  className='w-32'
                />
              ))}
            </div>
          </div>
        </PageCategory>
        <PageCategory
          title='How would you rate its characteristics?'
        />
        <PageCategory
          title='How do the notes develop?'
        >
          {}
        </PageCategory>
        <PageCategory
          title='How was your experience?'
        >
          {}
        </PageCategory>
      </div>
    </div>
  )
}

export default ReviewPage
