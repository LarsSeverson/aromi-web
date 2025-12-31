import React from 'react'
import { MdOutlineRateReview } from 'react-icons/md'
import DeleteReviewDialog from './DeleteReviewDialog'
import { useNavigate } from '@tanstack/react-router'
import type { AllFragranceReviewFragment } from '@/generated/graphql'
import { useDeleteFragranceReview } from '../hooks/useDeleteFragranceReview'
import { useToastMessage } from '@/hooks/useToastMessage'

export interface MyReviewOptionsProps {
  review: AllFragranceReviewFragment
}

const MyReviewOptions = (props: MyReviewOptionsProps) => {
  const { review } = props
  const { id: reviewId, fragrance } = review
  const { id: fragranceId } = fragrance

  const { toastError, toastMessage } = useToastMessage()
  const navigate = useNavigate()

  const { deleteReview } = useDeleteFragranceReview()

  const handleDeleteReview = async () => {
    const res = await deleteReview({ reviewId })

    res.match(
      () => {
        toastMessage('Your review has been deleted')
      },
      error => {
        toastError(error.message)
      }
    )
  }

  const handleEditReviewClick = () => {
    const params = { id: fragranceId }
    const search = { rating: review.rating }
    navigate({ to: '/fragrances/$id/review', params, search })
  }

  const handleOnConfirmDelete = () => {
    handleDeleteReview()
  }

  return (
    <div
      className='w-full'
    >
      <button
        className='flex w-full cursor-pointer items-center justify-start gap-2 rounded-xl bg-white p-3 hover:brightness-95'
        onClick={handleEditReviewClick}
      >
        <MdOutlineRateReview
          size={20}
        />

        <span
          className='text-md font-semibold'
        >
          Edit review
        </span>
      </button>

      <DeleteReviewDialog
        onConfirm={handleOnConfirmDelete}
      />
    </div>
  )
}

export default MyReviewOptions
