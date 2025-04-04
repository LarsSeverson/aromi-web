import { UserReviewsList } from '@/components/profile/UserReviewsList'
import { type User } from '@/generated/graphql'
import useUserReviews from '@/hooks/useUserReviews'
import React, { useState } from 'react'

export type ReviewsUser = Pick<User, 'id' | 'username'>

const emptyReviewsText = (myReviews: boolean, username: string) => ({
  headline: myReviews ? "You haven't made any reviews yet" : `${username} hasn't made any reviews yet`,
  body: myReviews
    ? "Make reviews on fragrances you've experienced, and they'll show up here"
    : 'Check back later to see what reviews they share'
})

export interface ReviewsTabProps {
  user: ReviewsUser
  myReviews?: boolean | undefined
}

const ReviewsTab = (props: ReviewsTabProps) => {
  const { user, myReviews = false } = props
  const { id, username } = user
  const { headline, body } = emptyReviewsText(myReviews, username)

  const { data: reviews, loading } = useUserReviews(id)
  const empty = reviews.length === 0

  const [currentPage] = useState(0)

  if (loading) return null

  return (
    <div className='w-full flex flex-col items-center'>
      {empty && (
        <div
          className='text-center space-y-5'
        >
          <h2
            className='font-pd text-2xl'
          >
            {headline}
          </h2>
          <h5
            className='font-p text-xl'
          >
            {body}
          </h5>
        </div>
      )}

      <div
        className='max-w-5xl w-full'
      >
        <UserReviewsList
          reviews={reviews}
          currentPage={currentPage}
          reviewsPerPage={10}
        />
      </div>
    </div>
  )
}

export default ReviewsTab
