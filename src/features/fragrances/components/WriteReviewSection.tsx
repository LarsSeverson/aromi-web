import React from 'react'
import { useMyFragranceReview } from '../hooks/useMyFragranceReview'
import TextAreaAutoSize from 'react-textarea-autosize'
import clsx from 'clsx'
import SubmitButton from '@/components/SubmitButton'
import { MIN_REVIEW_BODY_LENGTH } from '../utils/validation'
import { useCreateFragranceReview } from '../hooks/useCreateFragranceReview'
import { useToastMessage } from '@/hooks/useToastMessage'

export interface WriteReviewSectionProps {
  fragranceId: string
  rating?: number
}

const WriteReviewSection = (props: WriteReviewSectionProps) => {
  const { fragranceId, rating } = props

  const { toastError, toastMessage } = useToastMessage()

  const { createFragranceReview } = useCreateFragranceReview()
  const { myReview, isLoading } = useMyFragranceReview(fragranceId)

  const [body, setBody] = React.useState(myReview?.body ?? '')
  const isValidBody = body.trim().length >= MIN_REVIEW_BODY_LENGTH

  const handleOnBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setBody(value)
  }

  const handleCreateFragranceReview = async () => {
    if (!isValidBody) return

    const res = await createFragranceReview({
      fragranceId,
      rating: rating ?? myReview?.rating ?? 0,
      body: body.trim()
    })

    res.match(
      _ => {
        toastMessage('Thanks for sharing your thoughts!')
      },
      error => {
        toastError('Error submitting review', error.message)
      }
    )
  }

  const handleOnSubmitReview = () => {
    // handleCreateFragranceReview()
  }

  if (isLoading) return null

  return (
    <div
      className='flex w-full flex-col'
    >
      <div
        className='p-3'
      >
        <span
          className='text-lg font-bold'
        >
          {myReview == null ? 'Tell us about your experience' : 'Your review'}
        </span>
      </div>

      <div
        className='mt-3 w-full px-10 pb-8'
      >
        <TextAreaAutoSize
          value={body}
          placeholder='Got compliments or regrets? Tell us here...'
          className={clsx(
            'hover:border-sinopia min-h-44 w-full resize-none overflow-auto rounded-md border-2 p-4',
            'focus:border-sinopia transition-colors duration-150 ease-in-out focus:outline-none'
          )}
          onChange={handleOnBodyChange}
        />

        <div
          className={clsx(
            'mt-1 transition-opacity duration-200 ease-in-out',
            isValidBody && 'opacity-0'
          )}
        >
          <span
            className='text-sm text-black/80'
          >
            Reviews need to be at least {MIN_REVIEW_BODY_LENGTH} characters.
          </span>
        </div>
      </div>

      <div
        className='w-full max-w-2xs self-center'
      >
        <SubmitButton
          text='Submit Review'
          // onClick={handleOnSubmitReview}
        />
      </div>
    </div>
  )
}

export default WriteReviewSection
