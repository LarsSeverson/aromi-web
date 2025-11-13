import React, { useCallback } from 'react'
import { useFragranceCollectionItems } from '../hooks/useFragranceCollectionItems'
import { ResizeContainer } from '@/components/ResizeContainer'
import type { AllFragranceCollectionItemFragment } from '@/generated/graphql'
import FragrancePreviewCardSkeleton from './FragrancePreviewCardSkeleton'
import DraggableDynamicList from '@/components/DraggableDynamicList'
import CollectionItemCard from './CollectionItemCard'

export interface CollectionItemsGridProps {
  collectionId: string
}

const CollectionItemsGrid = (props: CollectionItemsGridProps) => {
  const { collectionId } = props

  const { items, isLoading, isLoadingMore, loadMore } = useFragranceCollectionItems(collectionId)

  const [containerRect, setContainerRect] = React.useState(new DOMRect())

  const onRenderItem = useCallback(
    (item: AllFragranceCollectionItemFragment, _: number, isDragging: boolean) => {
      return (
        <CollectionItemCard
          item={item}
          isDragging={isDragging}
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

  const handleOnEndReached = () => {
    loadMore()
  }

  return (
    <div
      className='mt-10'
    >
      <ResizeContainer
        onResize={setContainerRect}
      >
        <DraggableDynamicList
          items={items}
          isLoading={isLoading || isLoadingMore}
          containerWidth={containerRect.width}
          onEndReached={handleOnEndReached}
          onRenderItem={onRenderItem}
          onRenderSkeleton={onRenderItemSkeleton}
        />
      </ResizeContainer>
    </div>
  )
}

export default CollectionItemsGrid
