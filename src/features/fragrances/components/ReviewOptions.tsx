import React from 'react'
import ReportReviewDialog from './ReportReviewDialog'
import type { AllFragranceReviewFragment } from '@/generated/graphql'

export interface ReviewOptionsProps {
  review: AllFragranceReviewFragment
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
