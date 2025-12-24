import type { UserPreviewFragment } from '@/generated/graphql'
import React from 'react'
import { useUserFollowers } from '../hooks/useUserFollowers'
import { useUserFollowing } from '../hooks/useUserFollowing'
import { useVirtualizer } from '@tanstack/react-virtual'
import UserPreviewCardMini from './UserPreviewCardMini'
import UserPreviewCardMiniSkeleton from './UserPreviewCardMiniSkeleton'
import { useMyContext } from '../context/MyContext'

const SKELETON_COUNT = 6
const ESTIMATE_HEIGHT = 56
const OVERSCAN = 5
const LOAD_MORE_THRESHOLD = 200

const getEmptyText = (type: 'followers' | 'following', isMyProfile = false) => {
  if (type === 'followers') {
    return isMyProfile
      ? 'You have no followers yet.'
      : 'This user has no followers yet.'
  }

  return isMyProfile
    ? 'You are not following anyone yet.'
    : 'This user is not following anyone yet.'
}

export interface UserRelationshipListProps {
  user: UserPreviewFragment
  type: 'followers' | 'following'
}

const UserRelationshipList = (props: UserRelationshipListProps) => {
  const { user, type } = props
  const { id } = user

  const { me } = useMyContext()
  const isMyProfile = me?.id === id

  const followersHook = useUserFollowers(id)
  const followingHook = useUserFollowing(id)

  const {
    isLoading,
    isLoadingMore,
    loadMore
  } = type === 'followers' ? followersHook : followingHook

  const relationships = type === 'followers'
    ? followersHook.followers
    : followingHook.following

  const parentRef = React.useRef<HTMLDivElement>(null)

  const skeletonCount = isLoading || isLoadingMore ? SKELETON_COUNT : 0
  const totalCount = relationships.length + skeletonCount

  const rowVirtualizer = useVirtualizer({
    count: totalCount,
    getScrollElement: () => parentRef.current,
    estimateSize: () => ESTIMATE_HEIGHT,
    overscan: OVERSCAN
  })

  React.useEffect(
    () => {
      const el = parentRef.current
      if (el == null) return

      const handleScoll = () => {
        const { scrollTop, scrollHeight, clientHeight } = el
        if (scrollHeight - scrollTop - clientHeight < LOAD_MORE_THRESHOLD) {
          loadMore()
        }
      }

      el.addEventListener('scroll', handleScoll)
      return () => { el.removeEventListener('scroll', handleScoll) }
    },
    [loadMore]
  )

  return (
    <div
      ref={parentRef}
      className='w-full overflow-auto'
      style={{ scrollbarGutter: 'stable' }}
    >
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: '100%',
          position: 'relative'
        }}
      >
        {rowVirtualizer
          .getVirtualItems()
          .map(virtualItem => {
            const index = virtualItem.index
            const relationship = relationships[index]
            const isSkeleton = index >= relationships.length
            const key = isSkeleton ? `skeleton-${index}` : relationship.id

            return (
              <div
                key={key}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: `${virtualItem.size}px`,
                  transform: `translateY(${virtualItem.start}px)`
                }}
              >
                {isSkeleton ?
                  (
                    <UserPreviewCardMiniSkeleton />
                  )
                  :
                  (
                    <UserPreviewCardMini
                      user={relationship.user}
                    />
                  )
                }
              </div>
            )
          })
        }
      </div>

      {!isLoading && relationships.length === 0 && (
        <div
          className='my-6 w-full text-center text-black/30'
        >
          {getEmptyText(type, isMyProfile)}
        </div>
      )}
    </div>
  )
}

export default UserRelationshipList
