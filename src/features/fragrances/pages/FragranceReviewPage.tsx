import React from 'react'
import Divider from '@/components/Divider'
import { Form } from '@base-ui/react'
import type { CreateFragranceReviewInput, FragranceDetailFragment } from '@/generated/graphql'
import { useMyFragranceReview } from '../hooks/useMyFragranceReview'
import PageBackButton from '@/components/PageBackButton'
import blankPreviewThumbnail from '@/assets/blank-fragrance-thumbnail.svg'
import ProgressiveImage from '@/components/ProgressiveImage'
import WriteReviewSection from '../components/WriteReviewSection'
import RatingSection from '../components/RatingSection'
import { ValidFragranceReview } from '../utils/validation'
import z from 'zod'
import { useCreateFragranceReview } from '../hooks/useCreateFragranceReview'
import { useToastMessage } from '@/hooks/useToastMessage'
import { useNavigate } from '@tanstack/react-router'
import SubmitButton from '@/components/SubmitButton'
import clsx from 'clsx'

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

  const [errors, setErrors] = React.useState({})
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
    setErrors({})

    const formData = new FormData(event.currentTarget as HTMLFormElement)
    const ratingValue = Number(formData.get('rating'))
    const body = formData.get('body')

    const input = { rating: ratingValue, body }
    const result = ValidFragranceReview.safeParse(input)

    if (!result.success) {
      const fieldErrors = z.flattenError(result.error).fieldErrors
      setErrors(fieldErrors)

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
      className={clsx(
        'flex flex-col gap-4 px-4 py-6',
        'md:flex-row md:gap-5 md:px-0 md:py-10'
      )}
    >
      <div
        className={clsx(
          'flex-none',
          'md:flex-1 md:pl-4'
        )}
      >
        <PageBackButton
          className={clsx(
            'static',
            'md:sticky md:top-24 md:ml-auto'
          )}
        />
      </div>

      <Form
        errors={errors}
        className={clsx(
          'flex w-full flex-col gap-4 pb-20',
          'md:max-w-4xl md:flex-6 md:gap-5 md:pb-40'
        )}
        onSubmit={handleOnSubmit}
      >
        <div
          className={clsx(
            'flex h-20 gap-3',
            'md:h-26 md:gap-4'
          )}
        >
          <div
            className={clsx(
              'h-full w-16 shrink-0 overflow-hidden rounded-lg',
              'md:w-20 md:rounded-xl'
            )}
          >
            <ProgressiveImage
              src={thumbnail?.url ?? blankPreviewThumbnail}
              alt={`Thumbnail image for ${name} by ${brand.name}`}
              placeholderColor={thumbnail?.primaryColor}
              fallbackImage={blankPreviewThumbnail}
            />
          </div>

          <div
            className='flex flex-col justify-center gap-1'
          >
            <p
              className={clsx(
                'text-md truncate leading-tight font-semibold',
                'md:text-xl'
              )}
            >
              {name}
            </p>

            <p
              className={clsx(
                'mb-auto text-sm font-light',
                'md:text-lg'
              )}
            >
              {brand.name}
            </p>
          </div>
        </div>

        <div
          className='my-2 w-full md:my-3'
        >
          <Divider
            horizontal
          />
        </div>

        <RatingSection
          defaultRating={rating ?? myReview?.rating}
          onRatingChange={setHasChanges.bind(null, true)}
        />

        <WriteReviewSection
          fragranceId={id}
          onBodyChange={handleOnBodyChange}
        />

        <div
          className='mt-6 flex w-full items-center justify-center'
        >
          <div
            className='w-full max-w-xs'
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
        className='hidden md:block md:flex-1'
      />
    </div>
  )
}

export default FragranceReviewPage