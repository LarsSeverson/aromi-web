import React from 'react'
import { MdOutlineRateReview } from 'react-icons/md'
import DeleteReviewDialog from './DeleteReviewDialog'
import { useNavigate } from '@tanstack/react-router'
import type { AllFragranceReviewFragment } from '@/generated/graphql'

export interface MyReviewOptionsProps {
  review: AllFragranceReviewFragment
}

const MyReviewOptions = (props: MyReviewOptionsProps) => {
  const { review } = props
  const { fragrance } = review
  const { id } = fragrance

  const navigate = useNavigate()

  const handleEditReviewClick = () => {
    navigate({ to: '/fragrances/$id/review', params: { id } })
  }

  return (
    <div
      className='w-full'
    >
      <button
        className='w-full flex p-3 hover:brightness-95 bg-white rounded-xl gap-2 items-center justify-start'
        onClick={handleEditReviewClick}
      >
        <MdOutlineRateReview
          size={20}
        />

        <span
          className='font-semibold text-md'
        >
          Edit review
        </span>
      </button>

      <DeleteReviewDialog
        review={review}
      />
    </div>
  )
}

export default MyReviewOptions
