'use no memo'

import type { AllFragranceReviewFragment, UserPreviewFragment } from '@/generated/graphql'
import { FragranceReviewCard } from '@/features/fragrances/components/FragranceReviewCard'
import FragranceReviewCardSkeleton from '@/features/fragrances/components/FragranceReviewCardSkeleton'
import React from 'react'
import { useMyContext } from '../context/MyContext'
import { useUserReviews } from '../hooks/useUserReviews'
import EmptyTab from './EmptyTab'
import { FlatList } from '@/components/FlatList'

const SKELETON_COUNT = 4
const ESTIMATE_HEIGHT = 165
const OVERSCAN = 5
const END_SCROLL_THRESHOLD = 1000

const emptyReviewsText = (areMyReviews: boolean, username: string) => ({
  headline: areMyReviews ? 'You haven\'t made any reviews yet' : `${username} hasn't made any reviews yet`,
  body: areMyReviews
    ? 'Make reviews on fragrances you\'ve experienced, and they\'ll show up here'
    : 'Check back later to see what reviews they share'
})

export interface UserReviewsTabProps {
  user: UserPreviewFragment
}

const UserReviewsTab = (props: UserReviewsTabProps) => {
  const { user } = props
  const { id, username } = user

  const { me } = useMyContext()

  const { reviews, isLoading, isLoadingMore, loadMore } = useUserReviews(id)

  const isEmpty = reviews.length === 0 && !isLoading

  const areMyReviews = me?.id === id

  const { headline, body } = emptyReviewsText(areMyReviews, username)

  const onRenderReview = React.useCallback(
    (review: AllFragranceReviewFragment) => (
      <FragranceReviewCard
        key={review.id}
        review={review}
        isFragranceFocused
      />
    ),
    []
  )

  const onRenderSkeleton = React.useCallback(
    () => (
      <FragranceReviewCardSkeleton />
    ),
    []
  )

  const handleOnEndReached = React.useCallback(
    () => {
      loadMore()
    },
    [loadMore]
  )

  if (isEmpty) {
    return (
      <EmptyTab
        headline={headline}
        body={body}
      />
    )
  }

  return (
    <div
      className='flex w-full flex-col items-center'
    >
      <div
        className='w-full max-w-4xl'
      >
        <FlatList
          items={reviews}
          estimateSize={ESTIMATE_HEIGHT}
          isLoading={isLoading || isLoadingMore}
          skeletonCount={SKELETON_COUNT}
          overscan={OVERSCAN}
          onEndReachedThreshold={END_SCROLL_THRESHOLD}
          onEndReached={handleOnEndReached}
          onRenderItem={onRenderReview}
          onRenderSkeleton={onRenderSkeleton}
        />
      </div>
    </div>
  )
}

export default UserReviewsTab