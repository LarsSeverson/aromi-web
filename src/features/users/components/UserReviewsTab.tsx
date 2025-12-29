'use no memo'

import type { UserPreviewFragment } from '@/generated/graphql'
import React, { useEffect } from 'react'
import { useMyContext } from '../context/MyContext'
import { useUserReviews } from '../hooks/useUserReviews'
import { useWindowVirtualizer } from '@tanstack/react-virtual'
import { FragranceReviewCard } from '@/features/fragrances/components/FragranceReviewCard'
import FragranceReviewCardSkeleton from '@/features/fragrances/components/FragranceReviewCardSkeleton'
import EmptyTab from './EmptyTab'
import clsx from 'clsx'

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

  const skeletonCount = isLoading || isLoadingMore ? SKELETON_COUNT : 0
  const totalCount = reviews.length + skeletonCount
  const isEmpty = reviews.length === 0 && !isLoading
  const areMyReviews = me?.id === id
  const { headline, body } = emptyReviewsText(areMyReviews, username)

  const rowVirtualizer = useWindowVirtualizer({
    count: totalCount,
    overscan: OVERSCAN,
    estimateSize: () => ESTIMATE_HEIGHT,
    measureElement: el => el.getBoundingClientRect().height
  })

  useEffect(
    () => {
      const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement
        if (scrollHeight - scrollTop - clientHeight <= END_SCROLL_THRESHOLD) {
          loadMore()
        }
      }

      window.addEventListener('scroll', handleScroll)
      return () => { window.removeEventListener('scroll', handleScroll) }
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
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            position: 'relative',
            width: '100%'
          }}
        >
          {rowVirtualizer
            .getVirtualItems()
            .map(virtualItem => {
              const index = virtualItem.index
              const isSkeleton = index >= reviews.length
              const key = isSkeleton
                ? `skeleton-${index}`
                : reviews[index].id

              const review = reviews[index]

              return (
                <div
                  key={key}
                  data-index={index}
                  ref={rowVirtualizer.measureElement}
                  className={clsx('absolute top-0 left-0 w-full py-2 md:py-4')}
                  style={{
                    transform: `translateY(${virtualItem.start}px)`
                  }}
                >
                  {isSkeleton ?
                    (
                      <FragranceReviewCardSkeleton />
                    )
                    :
                    (
                      <FragranceReviewCard
                        review={review}
                        isFragranceFocused
                      />
                    )
                  }
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default UserReviewsTab
