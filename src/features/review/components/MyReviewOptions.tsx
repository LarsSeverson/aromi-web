import React from 'react'
import { type IFragranceReviewSummary } from '@/features/review/types'
import { MdOutlineRateReview } from 'react-icons/md'
import DeleteReviewDialog from './DeleteReviewDialog'
import { useNavigate, useParams } from '@tanstack/react-router'

export interface MyReviewOptionsProps {
  myReview: IFragranceReviewSummary
}

const MyReviewOptions = (props: MyReviewOptionsProps) => {
  const { myReview } = props

  const navigate = useNavigate()
  const { id } = useParams({ from: '/fragrance/$id' })

  const handleEditReviewClick = () => {
    void navigate({ to: '/fragrance/$id/review', params: { id } })
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
        myReview={myReview}
      />
    </div>
  )
}

export default MyReviewOptions
