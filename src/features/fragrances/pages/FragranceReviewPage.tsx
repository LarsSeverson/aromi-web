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
import VoteOnNotesSection from '../components/VoteOnNotesSection'
import blankPreviewThumbnail from '@/assets/blank-fragrance-thumbnail.svg'
import ProgressiveImage from '@/components/ProgressiveImage'
import VoteOnTraitsSection from '../components/VoteOnTraitsSection'
import WriteReviewSection from '../components/WriteReviewSection'

export interface FragranceReviewPageProps {
  fragrance: FragranceDetailFragment
  rating: number
}

const FragranceReviewPage = (props: FragranceReviewPageProps) => {
  const { fragrance, rating } = props
  const { id, name, brand, thumbnail } = fragrance

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
        className='w-full max-w-4xl flex-6 flex-col gap-5 pb-40'
      >
        <div
          className='flex h-26 gap-4'
        >
          <div
            className='h-full w-20 overflow-hidden rounded-xl'
          >
            <ProgressiveImage
              src={thumbnail?.url ?? blankPreviewThumbnail}
              alt={`Thumbnail image for ${name} by ${brand.name}`}
              placeholderColor={thumbnail?.primaryColor}
              fallbackImage={blankPreviewThumbnail}
            />
          </div>

          <div>
            <p
              className='truncate text-xl font-semibold'
            >
              {name}
            </p>

            <p
              className='text-lg font-light'
            >
              {brand.name}
            </p>
          </div>
        </div>

        <div
          className='my-3 w-full px-3'
        >
          <Divider
            horizontal
          />
        </div>

        <Accordion.Root
          className='flex flex-col gap-7'
          defaultValue={['gender', 'accords', 'notes', 'traits']}
        >
          <div
            className='p-4 pt-10'
          >
            <h1
              className='mb-4 text-lg font-bold'
            >
              How would you rate this fragrance?
            </h1>

            <div
              className='flex w-full items-center justify-center'
            >
              <InteractableRatingStars
                size={40}
                rating={currentRating}
                emptyColor={Colors.empty2}
                filledColor={Colors.sinopia}
                className='text-md mt-2 flex w-fit flex-col items-center justify-center gap-3 font-medium'
                onRatingChange={setCurrentRating}
              />
            </div>
          </div>

          <div
            className='flex flex-col gap-5'
          >
            <VoteOnGenderSection
              fragranceId={id}
            />

            <VoteOnAccordsSection
              fragranceId={id}
            />

            <VoteOnNotesSection
              fragranceId={id}
            />

            <VoteOnTraitsSection
              fragranceId={id}
            />
          </div>
        </Accordion.Root>

        <WriteReviewSection
          fragranceId={id}
        />
      </div>

      <div
        className='flex-1'
      />
    </div>
  )
}

export default FragranceReviewPage
