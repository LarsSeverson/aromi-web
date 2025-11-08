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

      <DeleteReviewDialog />
    </div>
  )
}

export default MyReviewOptions
