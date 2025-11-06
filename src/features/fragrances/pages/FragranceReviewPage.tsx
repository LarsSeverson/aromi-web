import React from 'react'
import Divider from '@/components/Divider'
import { Accordion, Form } from '@base-ui-components/react'
import type { CreateFragranceReviewInput, FragranceDetailFragment } from '@/generated/graphql'
import { useMyFragranceReview } from '../hooks/useMyFragranceReview'
import PageBackButton from '@/components/PageBackButton'
import VoteOnGenderSection from '../components/VoteOnGenderSection'
import VoteOnAccordsSection from '../components/VoteOnAccordsSection'
import VoteOnNotesSection from '../components/VoteOnNotesSection'
import blankPreviewThumbnail from '@/assets/blank-fragrance-thumbnail.svg'
import ProgressiveImage from '@/components/ProgressiveImage'
import VoteOnTraitsSection from '../components/VoteOnTraitsSection'
import WriteReviewSection from '../components/WriteReviewSection'
import RatingSection from '../components/RatingSection'
import { ValidFragranceReview } from '../utils/validation'
import z from 'zod'
import { set } from 'lodash'

export interface FragranceReviewPageProps {
  fragrance: FragranceDetailFragment
  rating: number
}

const FragranceReviewPage = (props: FragranceReviewPageProps) => {
  const { fragrance, rating } = props
  const { id, name, brand, thumbnail } = fragrance

  const { myReview } = useMyFragranceReview(id)

  const [errors, setError] = React.useState({})

  const handleOnCreateFragranceReview = async (input: CreateFragranceReviewInput) => { 
    //
  }

  const handleOnSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setError({})

    const formData = new FormData(event.currentTarget as HTMLFormElement)
    const result = ValidFragranceReview.safeParse(Object.fromEntries(formData))

    if (!result.success) {
      const fieldErrors = z.flattenError(result.error).fieldErrors
      setError(fieldErrors)

      return
    }


    const input = { body}
    handleOnCreateFragranceReview(result.data)
  }

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

      <Form
        errors={errors}
        className='w-full max-w-4xl flex-6 flex-col gap-5 pb-40'
        onSubmit={handleOnSubmit}
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
          <RatingSection
            defaultRating={myReview?.rating ?? rating}
          />

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
      </Form>

      <div
        className='flex-1'
      />
    </div>
  )
}

export default FragranceReviewPage
