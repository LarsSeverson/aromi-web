import React from 'react'
import { type FragranceReview, type User } from '@/generated/graphql'
import { FragranceReviewCard } from '@/features/fragrance/components/FragranceReviewCard'

export type MyReviewUser = Pick<User, 'username' | 'id'>
export type CardMyReview = Omit<FragranceReview, 'fragrance' | 'user'> & { user: MyReviewUser }

export interface MyReviewCardProps {
  myReview: CardMyReview
}

const MyReviewCard = (props: MyReviewCardProps) => {
  const { myReview } = props

  return (
    <div>
      <FragranceReviewCard
        review={myReview}
      />
    </div>
  )
}

export default MyReviewCard
