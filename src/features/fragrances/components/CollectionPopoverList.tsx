import React, { useEffect, useRef } from 'react'
import CollectionPreviewBarCheck from './CollectionPreviewBarCheck'
import Divider from '@/components/Divider'
import type { FragrancePreviewFragment } from '@/generated/graphql'
import CreateCollectionDialog from './CreateCollectionDialog'
import { useSaveFragranceContext } from '../contexts/SaveFragranceContext'
import { useVirtualizer } from '@tanstack/react-virtual'
import CollectionPreviewBarSkeleton from './CollectionPreviewBarSkeleton'

const SKELETON_COUNT = 6
const ESTIMATE_HEIGHT = 64
const OVERSCAN = 5
const LOAD_MORE_THRESHOLD = 200

export interface CollectionPopoverListProps {
  fragrance: FragrancePreviewFragment
}

const CollectionPopoverList = (props: CollectionPopoverListProps) => {
  const { fragrance } = props

  const { collections, isLoading, isLoadingMore, loadMore } = useSaveFragranceContext()

  const parentRef = useRef<HTMLDivElement>(null)

  const skeletonCount = isLoading || isLoadingMore ? SKELETON_COUNT : 0
  const totalCount = collections.length + skeletonCount

  const rowVirtualizer = useVirtualizer({
    count: totalCount,
    getScrollElement: () => parentRef.current,
    estimateSize: () => ESTIMATE_HEIGHT,
    overscan: OVERSCAN
  })

  useEffect(
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
      className='overflow-auto w-full mb-4'
      style={{ scrollbarGutter: 'stable' }}
    >
      <CreateCollectionDialog
        fragrance={fragrance}
      />

      <Divider
        horizontal
      />

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
            const isSkeleton = index >= collections.length
            const key = isSkeleton
              ? `skeleton-${index}`
              : collections[index].id

            const collection = collections[index]

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
                    <CollectionPreviewBarSkeleton />
                  )
                  :
                  (
                    <CollectionPreviewBarCheck
                      collection={collection}
                      defaultChecked={collection.hasFragrance}
                    />
                  )
                }
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default CollectionPopoverList
