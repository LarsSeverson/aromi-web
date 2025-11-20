'use no memo'

import type { UserPreviewFragment } from '@/generated/graphql'
import { useWindowVirtualizer } from '@tanstack/react-virtual'
import React from 'react'
import UserPreviewCardSkeleton from './UserPreviewCardSkeleton'
import UserPreviewCard from './UserPreviewCard'

const DEFAULT_SKELETON_COUNT = 10
const ESTIMATE_SIZE = 96
const OVERSCAN = 10
const GAP = 10
const ON_END_REACHED_THRESHOLD = 1000

export interface UserWindowListProps {
  users: UserPreviewFragment[]
  isLoading?: boolean
  onEndReached?: () => void
}

const UserWindowList = (props: UserWindowListProps) => {
  const { users, isLoading = false, onEndReached } = props

  const skeletonCount = isLoading ? DEFAULT_SKELETON_COUNT : 0
  const rowCount = users.length + skeletonCount

  const rowVirtualizer = useWindowVirtualizer({
    count: rowCount,
    estimateSize: () => ESTIMATE_SIZE,
    overscan: OVERSCAN,
    gap: GAP
  })

  React.useEffect(
    () => {
      const checkEnd = () => {
        const total = rowVirtualizer.getTotalSize()
        const viewport = window.innerHeight
        const { scrollTop } = document.documentElement

        if (
          total <= viewport + ON_END_REACHED_THRESHOLD ||
          total - (scrollTop + viewport) <= ON_END_REACHED_THRESHOLD
        ) {
          onEndReached?.()
        }
      }

      checkEnd()
      window.addEventListener('scroll', checkEnd)
      return () => { window.removeEventListener('scroll', checkEnd) }
    },
    [rowVirtualizer, onEndReached]
  )

  return (
    <div
      className='relative'
      style={{ height: `${rowVirtualizer.getTotalSize()}px` }}
    >
      {rowVirtualizer
        .getVirtualItems()
        .map(
          virtualRow => {
            const index = virtualRow.index
            const user = users[index]
            const isSkeleton = index >= users.length
            const key = isSkeleton ? `skeleton-${index}` : user.id

            return (
              <div
                key={key}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: `${virtualRow.size}px`,
                  transform: `translateY(${virtualRow.start}px)`
                }}
              >
                {isSkeleton
                  ? (
                    <UserPreviewCardSkeleton />
                  )
                  : (
                    <UserPreviewCard
                      user={user}
                    />
                  )
                }
              </div>
            )
          }
        )
      }
    </div>
  )
}

export default UserWindowList
