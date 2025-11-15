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
import { useCreateFragranceReview } from '../hooks/useCreateFragranceReview'
import { useToastMessage } from '@/hooks/useToastMessage'
import { useNavigate } from '@tanstack/react-router'
import SubmitButton from '@/components/SubmitButton'

export interface FragranceReviewPageProps {
  fragrance: FragranceDetailFragment
  rating: number
}

const FragranceReviewPage = (props: FragranceReviewPageProps) => {
  const { fragrance, rating } = props
  const { id, name, brand, thumbnail } = fragrance

  const navigate = useNavigate()
  const { toastError, toastMessage } = useToastMessage()

  const { myReview } = useMyFragranceReview(id)
  const { createFragranceReview } = useCreateFragranceReview()

  const [errors, setError] = React.useState({})
  const [isLoading, setIsLoading] = React.useState(false)
  const [hasChanges, setHasChanges] = React.useState(false)

  const hasReview = myReview != null

  const handleOnCreateFragranceReview = async (input: CreateFragranceReviewInput) => {
    setIsLoading(true)
    const res = await createFragranceReview(input)
    setIsLoading(false)

    if (res.isErr()) {
      const error = res.error
      toastError(error.message)
      return
    }

    toastMessage(hasReview ? 'Your review has been updated' : 'Thanks for sharing your thoughts!')
    navigate({ to: '/fragrances/$id', params: { id } })
  }

  const handleOnSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setError({})

    const formData = new FormData(event.currentTarget as HTMLFormElement)
    const rating = Number(formData.get('rating'))
    const body = formData.get('body')

    const input = { rating, body }
    const result = ValidFragranceReview.safeParse(input)

    if (!result.success) {
      const fieldErrors = z.flattenError(result.error).fieldErrors
      setError(fieldErrors)

      return
    }

    const createInput = { ...result.data, fragranceId: id }
    handleOnCreateFragranceReview(createInput)
  }

  const handleOnBodyChange = (body: string) => {
    const difference = (myReview?.body ?? '') !== body
    setHasChanges(difference)
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
            defaultRating={rating ?? myReview?.rating}
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
          onBodyChange={handleOnBodyChange}
        />

        <div
          className='mt-4 flex w-full items-center justify-center'
        >
          <div
            className='w-full max-w-3xs'
          >
            <SubmitButton
              disabled={!hasChanges || isLoading}
              isLoading={isLoading}
              text={hasReview ? 'Update Review' : 'Submit Review'}
            />
          </div>
        </div>
      </Form>

      <div
        className='flex-1'
      />
    </div>
  )
}

export default FragranceReviewPage
