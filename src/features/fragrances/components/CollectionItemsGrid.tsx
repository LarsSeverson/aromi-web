import React, { useCallback } from 'react'
import { ResizeContainer } from '@/components/ResizeContainer'
import type { AllFragranceCollectionItemFragment } from '@/generated/graphql'
import FragrancePreviewCardSkeleton from './FragrancePreviewCardSkeleton'
import DraggableDynamicList from '@/components/DraggableDynamicList'
import CollectionItemCard from './CollectionItemCard'
import { DynamicList } from '@/components/DynamicList'
import { useCollectionItemsContext } from '../contexts/CollectionItemsContext'
import type { Nullable } from '@/utils/util'

export interface CollectionItemsGridProps {
  isMyCollection?: boolean
}

const CollectionItemsGrid = (props: CollectionItemsGridProps) => {
  const { isMyCollection = false } = props

  const {
    items,
    isLoading,
    isLoadingMore,

    loadMore,
    moveItem
  } = useCollectionItemsContext()

  const [containerRect, setContainerRect] = React.useState(new DOMRect())

  const handleOnItemMove = useCallback(
    (movedId: string, beforeId: Nullable<string>, updatedItems?: AllFragranceCollectionItemFragment[]) => {
      moveItem(movedId, beforeId, updatedItems ?? [])
    },
    [moveItem]
  )

  const onRenderItem = useCallback(
    (item: AllFragranceCollectionItemFragment, _: number, isDragging?: boolean) => {
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
        {isMyCollection ?
          (
            <DraggableDynamicList
              items={items}
              isLoading={isLoading || isLoadingMore}
              containerWidth={containerRect.width}
              onEndReached={handleOnEndReached}
              onRenderItem={onRenderItem}
              onRenderSkeleton={onRenderItemSkeleton}
              onItemMove={handleOnItemMove}
            />
          )
          :
          (
            <DynamicList
              items={items}
              isLoading={isLoading || isLoadingMore}
              containerWidth={containerRect.width}
              onEndReached={handleOnEndReached}
              onRenderItem={onRenderItem}
              onRenderSkeleton={onRenderItemSkeleton}
            />
          )
        }
      </ResizeContainer>
    </div>
  )
}

export default CollectionItemsGrid
