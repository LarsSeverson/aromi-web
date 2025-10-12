import BouncyButton from '@/components/BouncyButton'
import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { useUpsertFragranceReview } from '../../reviews/hooks/useUpsertFragranceReview'
import Spinner from '@/components/Spinner'
import { useMyReview } from '@/features/user'
import { useToastError } from '@/hooks/useToastError'
import { useToastMessage } from '@/hooks/useToastMessage'
import { useNavigate } from '@tanstack/react-router'

export interface WriteAReviewSectionProps {
  fragranceId: number
  rating: number
}

const WriteAReviewSection = (props: WriteAReviewSectionProps) => {
  const { fragranceId, rating } = props

  const navigate = useNavigate()
  const { toastMessage } = useToastMessage()
  const { toastApolloError } = useToastError()

  const { data: myReview } = useMyReview(fragranceId)
  const { upsertFragranceReview: createFragranceReview } = useUpsertFragranceReview()

  const inputRef = useRef<HTMLTextAreaElement>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmitReview = async (review: string) => {
    if (review === myReview?.text && rating === myReview?.rating) return

    if (rating === 0) {
      toastMessage('Please select a rating before submitting the review')
      return
    }

    setIsLoading(true)

    await createFragranceReview({ fragranceId, rating, review })
      .match(
        () => {
          const feedback = myReview != null ? 'Your review has been updated' : 'Thanks for sharing your thoughts!'
          toastMessage(feedback)
          void navigate({ to: '/fragrance/$id', params: { id: String(fragranceId) } })
        },
        toastApolloError
      )

    setIsLoading(false)
  }

  const handleSubmitReviewClick = (event: React.SyntheticEvent) => {
    event.preventDefault()
    event.stopPropagation()

    const review = inputRef.current?.value ?? ''

    void handleSubmitReview(review)
  }

  useEffect(() => {
    if (inputRef.current == null) return

    inputRef.current.value = myReview?.text ?? ''
  }, [myReview])

  return (
    <div
      className='p-3 w-full'
    >

      <div
        className='flex justify-between'
      >
        <h1
          className='text-lg font-bold'
        >
          {`${myReview != null ? 'My review' : 'Tell us about your experience'}`}
        </h1>
      </div>

      <div
        className='w-full mt-3'
      >
        <TextareaAutosize
          ref={inputRef}
          placeholder='Got compliments or regrets? Tell us here...'
          className={clsx(
            'overflow-auto w-full border border-gray-300 rounded-md p-4 min-h-44 resize-none outline-none hover:border-sinopia',
            'transition-colors ease-in-out duration-150 focus:border-sinopia focus:border-2 focus:outline-none'
          )}
        />
      </div>

      <BouncyButton
        className='bg-sinopia text-white px-12 h-[44px] active:scale-[1] rounded-md hover:brightness-105 mt-4'
        onClick={handleSubmitReviewClick}
      >
        {isLoading && <Spinner />}

        <p
          className={clsx(
            'text-base font-medium',
            isLoading && 'opacity-0'
          )}
        >
          {`${myReview != null ? 'Edit' : 'Submit'} Review`}
        </p>
      </BouncyButton>
    </div>
  )
}

export default WriteAReviewSection
