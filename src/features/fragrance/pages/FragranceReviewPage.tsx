import React from 'react'
import VoteOnAccordsSection from '@/features/fragrance/components/VoteOnAccordsSection'
import InteractableRatingStars from '@/components/InteractableRatingStars'
import { Colors } from '@/styles/Colors'
import Divider from '@/components/Divider'
import FragranceBackButton from '../components/FragranceBackButton'
import { type IFragranceSummary } from '../types'
import VoteOnCharacteristicsSection from '../components/VoteOnCharacteristicsSection'
import { Accordion } from '@base-ui-components/react'
import VoteOnNotesSection from '../components/VoteOnNotesSection'
import WriteAReviewSection from '../components/WriteAReviewSection'

export interface FragranceReviewPageProps {
  fragrance: IFragranceSummary
  rating: number
}

const FragranceReviewPage = (props: FragranceReviewPageProps) => {
  const { fragrance, rating } = props
  const { id, name, brand } = fragrance

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

        <Divider
          horizontal
          className='my-3 mx-4'
        />

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
              rating={rating}
              size={32}
              emptyColor={Colors.empty2}
              filledColor={Colors.sinopia}
              className='mr-auto text-md flex items-center gap-1 mt-2'
            />
          </div>

          <VoteOnAccordsSection
            fragranceId={id}
          />

          <VoteOnCharacteristicsSection />

          <VoteOnNotesSection />

          <WriteAReviewSection />
        </Accordion.Root>
      </div>

      <div
        className='flex-1'
      />

    </div>
  )
}

export default FragranceReviewPage
