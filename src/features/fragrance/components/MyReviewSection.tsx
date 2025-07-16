import React from 'react'
import PageCategory from '@/components/PageCategory'
import MyReviewCard, { type MyReviewCardReview } from '@/features/user/components/MyReviewCard'

export interface MyReviewSectionProps {
  myReview: MyReviewCardReview
}

const MyReviewSection = (props: MyReviewSectionProps) => {
  const { myReview } = props

  return (
    <PageCategory
      title='My review'
    >
      <div
        className='w-full flex justify-center'
      >
        <div
          className='w-full max-w-4xl'
        >
          <MyReviewCard
            myReview={myReview}
          />
        </div>
      </div>
    </PageCategory>
  )
}

export default MyReviewSection
