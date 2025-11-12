import React, { useCallback, useEffect } from 'react'
import { useFragranceCollectionItems } from '../hooks/useFragranceCollectionItems'
import { ResizeContainer } from '@/components/ResizeContainer'
import { DynamicList } from '@/components/DynamicList'
import type { AllFragranceCollectionItemFragment } from '@/generated/graphql'
import { FragrancePreviewCard } from './FragrancePreviewCard'
import FragrancePreviewCardSkeleton from './FragrancePreviewCardSkeleton'
import { DndContext } from '@dnd-kit/core'

export interface CollectionItemsGridProps {
  collectionId: string
}

const CollectionItemsGrid = (props: CollectionItemsGridProps) => {
  const { collectionId } = props

  const { items, isLoading, isLoadingMore, loadMore } = useFragranceCollectionItems(collectionId)

  const [renderedItems, setRenderedItems] = React.useState(items)
  const [containerRect, setContainerRect] = React.useState(new DOMRect())

  const onRenderItem = useCallback(
    (item: AllFragranceCollectionItemFragment) => {
      return (
        <FragrancePreviewCard
          key={item.id}
          fragrance={item.fragrance}
        />
      )
    },
    []
  )

  const onRenderItemSkeleton = useCallback(
    () => (
      <FragrancePreviewCardSkeleton />
    ),
    []
  )

  const handleLoadMore = async () => {
    const newItems = (await loadMore().unwrapOr([])) ?? []

    if (newItems.length === 0) return

    setRenderedItems(prevItems => {
      const existing = new Set(prevItems.map(i => i.id))
      const merged = prevItems.slice()

      for (const newItem of newItems) {
        if (!existing.has(newItem.id)) {
          merged.push(newItem)
        }
      }

      return merged
    })
  }

  const handleOnEndReached = () => {
    handleLoadMore()
  }

  return (
    <div
      className='mt-10'
    >
      <ResizeContainer
        onResize={setContainerRect}
      >
        <DndContext>
          <DynamicList
            items={items}
            isLoading={isLoading || isLoadingMore}
            containerWidth={containerRect?.width}
            onRenderItem={onRenderItem}
            onRenderSkeleton={onRenderItemSkeleton}
            onEndReached={handleOnEndReached}
          />
        </DndContext>
      </ResizeContainer>
    </div>
  )
}

export default CollectionItemsGrid
