import React from 'react'
import ReportReviewDialog from './ReportReviewDialog'
import { type IFragranceReviewSummary } from '@/features/review/types'

export interface ReviewOptionsProps {
  review: IFragranceReviewSummary
}

const ReviewOptions = (props: ReviewOptionsProps) => {
  const { review } = props

  return (
    <div
      className='w-full'
    >
      <ReportReviewDialog
        review={review}
      />
    </div>
  )
}

export default ReviewOptions
