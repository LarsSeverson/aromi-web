import type { AllAccordFragment } from '@/generated/graphql'
import { useVirtualizer } from '@tanstack/react-virtual'
import React from 'react'
import VoteOnAccordsPopoverItemSkeleton from './VoteOnAccordsPopoverItemSkeleton'
import VoteOnAccordsPopoverItem from './VoteOnAccordsPopoverItem'

const SKELETON_COUNT = 6
const ESTIMATE_HEIGHT = 50
const OVERSCAN = 5
const LOAD_MORE_THRESHOLD = 200

export interface VoteOnAccordsPopoverListProps {
  accords: AllAccordFragment[]
  isLoading?: boolean
  onLoadMore?: () => void
}

const VoteOnAccordsPopoverList = (props: VoteOnAccordsPopoverListProps) => {
  const { accords, isLoading = false, onLoadMore } = props

  const listRef = React.useRef<HTMLDivElement>(null)

  const skeletonCount = isLoading ? SKELETON_COUNT : 0
  const totalCount = accords.length + skeletonCount

  const rowVirtualizer = useVirtualizer({
    count: totalCount,
    getScrollElement: () => listRef.current,
    estimateSize: () => ESTIMATE_HEIGHT,
    overscan: OVERSCAN
  })

  React.useEffect(
    () => {
      const el = listRef.current
      if (el == null) return

      const handleScoll = () => {
        const { scrollTop, scrollHeight, clientHeight } = el
        if (scrollHeight - scrollTop - clientHeight < LOAD_MORE_THRESHOLD) {
          onLoadMore?.()
        }
      }

      el.addEventListener('scroll', handleScoll)
      return () => { el.removeEventListener('scroll', handleScoll) }
    },
    [onLoadMore]
  )

  if (totalCount === 0) {
    return (
      <div
        className='text-center text-md font-medium text-black/70 py-4 px-1 w-full'
      >
        No accords found.
      </div>
    )
  }

  return (
    <div
      ref={listRef}
      className='flex-1 overflow-y-auto py-4 px-1 scrollbar-thin'
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
          .map(virtualRow => {
            const index = virtualRow.index
            const isSkeleton = index >= accords.length
            const key = isSkeleton
              ? `skeleton-${index}`
              : accords[index].id

            const accord = accords[index]

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
                {isSkeleton ?
                  (
                    <VoteOnAccordsPopoverItemSkeleton />
                  )
                  :
                  (
                    <VoteOnAccordsPopoverItem
                      accord={accord}
                    />
                  )
                }
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default VoteOnAccordsPopoverList
