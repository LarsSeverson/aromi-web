import React, { useEffect, useState } from 'react'
import VoteOnAccordsSection from '@/features/review/components/VoteOnAccordsSection'
import InteractableRatingStars from '@/components/InteractableRatingStars'
import { Colors } from '@/styles/Colors'
import Divider from '@/components/Divider'
import FragranceBackButton from '../../fragrance/components/FragranceBackButton'
import { type IFragranceSummary } from '../../fragrance/types'
import VoteOnCharacteristicsSection from '../components/VoteOnCharacteristicsSection'
import { Accordion } from '@base-ui-components/react'
import VoteOnNotesSection from '../components/VoteOnNotesSection'
import WriteAReviewSection from '../components/WriteAReviewSection'
import { useMyReview } from '@/features/user'

export interface FragranceReviewPageProps {
  fragrance: IFragranceSummary
  rating: number
}

const FragranceReviewPage = (props: FragranceReviewPageProps) => {
  const { fragrance, rating } = props
  const { id, name, brand } = fragrance

  const { data: myReview } = useMyReview(id)

  const [currentRating, setCurrentRating] = useState(rating)

  useEffect(() => {
    if (myReview != null && rating === 0) {
      setCurrentRating(myReview.rating)
    }
  }, [rating, myReview])

  return (
    <div
      className='flex flex-wrap gap-5'
    >
      <div
        className='flex-1'
      >
        <FragranceBackButton
          className='sticky top-[87px] ml-auto'
        />
      </div>

      <div
        className='flex-[6] flex-col gap-5 w-full max-w-3xl'
      >
        <div
          className='px-4'
        >
          <p
            className='font-semibold text-xl truncate'
          >
            {name}
          </p>

          <p
            className='font-light text-lg'
          >
            {brand}
          </p>
        </div>

        <div
          className='w-full px-3 my-3'
        >
          <Divider
            horizontal
          />
        </div>

        <Accordion.Root
          className='flex flex-col'
        >
          <div
            className='p-4'
          >
            <h1
              className='text-lg font-bold'
            >
              How would you rate this fragrance?
            </h1>

            <InteractableRatingStars
              rating={currentRating}
              size={32}
              emptyColor={Colors.empty2}
              filledColor={Colors.sinopia}
              className='mr-auto text-md flex items-center gap-1 mt-2'
              onRatingChange={setCurrentRating}
            />
          </div>

          <VoteOnAccordsSection
            fragranceId={id}
          />

          <VoteOnCharacteristicsSection
            fragranceId={id}
          />

          <VoteOnNotesSection
            fragranceId={id}
          />

          <WriteAReviewSection
            fragranceId={id}
            rating={currentRating}
          />
        </Accordion.Root>
      </div>

      <div
        className='flex-1'
      />

    </div>
  )
}

export default FragranceReviewPage
