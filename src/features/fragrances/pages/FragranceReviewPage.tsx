import React, { useState } from 'react'
import { Colors } from '@/styles/Colors'
import Divider from '@/components/Divider'
import { Accordion } from '@base-ui-components/react'
import type { FragranceDetailFragment } from '@/generated/graphql'
import { useMyFragranceReview } from '../hooks/useMyFragranceReview'
import PageBackButton from '@/components/PageBackButton'
import InteractableRatingStars from '@/components/InteractableRatingStars'
import VoteOnGenderSection from '../components/VoteOnGenderSection'
import VoteOnAccordsSection from '../components/VoteOnAccordsSection'

export interface FragranceReviewPageProps {
  fragrance: FragranceDetailFragment
  rating: number
}

const FragranceReviewPage = (props: FragranceReviewPageProps) => {
  const { fragrance, rating } = props
  const { id, name, brand } = fragrance

  const { myReview } = useMyFragranceReview(id)

  const [currentRating, setCurrentRating] = useState(myReview?.rating ?? rating)

  return (
    <div
      className='flex flex-wrap gap-5'
    >
      <div
        className='flex-1 pl-4'
      >
        <PageBackButton
          className='sticky top-[87px] ml-auto'
        />
      </div>

      <div
        className='flex-6 flex-col gap-5 w-full max-w-4xl'
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
            {brand.name}
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
          className='flex flex-col gap-7'
          defaultValue={['gender', 'accords']}
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
              size={32}
              rating={currentRating}
              emptyColor={Colors.empty2}
              filledColor={Colors.sinopia}
              className='mr-auto flex items-center justify-center w-fit text-md gap-3 mt-2'
              onRatingChange={setCurrentRating}
            />
          </div>

          <div
            className='flex flex-col gap-25'
          >
            <VoteOnGenderSection
              fragrance={fragrance}
            />

            <VoteOnAccordsSection
              fragranceId={id}
            />
          </div>

          {/* <VoteOnAccordsSection
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
          /> */}
        </Accordion.Root>
      </div>

      <div
        className='flex-1'
      />
    </div>
  )
}

export default FragranceReviewPage
