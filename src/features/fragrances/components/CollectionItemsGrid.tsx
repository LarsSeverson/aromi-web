import React, { useCallback } from 'react'
import { useFragranceCollectionItems } from '../hooks/useFragranceCollectionItems'
import { ResizeContainer } from '@/components/ResizeContainer'
import type { AllFragranceCollectionItemFragment } from '@/generated/graphql'
import FragrancePreviewCardSkeleton from './FragrancePreviewCardSkeleton'
import DraggableDynamicList from '@/components/DraggableDynamicList'
import CollectionItemCard from './CollectionItemCard'
import { useDebounce } from '@/hooks/useDebounce'
import { useMoveFragranceCollectionItems } from '../hooks/useMoveFragranceCollectionItems'
import { useToastMessage } from '@/hooks/useToastMessage'
import { DynamicList } from '@/components/DynamicList'

export interface CollectionItemsGridProps {
  collectionId: string
  isMyCollection?: boolean
}

const CollectionItemsGrid = (props: CollectionItemsGridProps) => {
  const { collectionId, isMyCollection = false } = props

  const { toastError } = useToastMessage()

  const { moveItems } = useMoveFragranceCollectionItems()
  const { items, isLoading, isLoadingMore, loadMore } = useFragranceCollectionItems(collectionId)

  const [containerRect, setContainerRect] = React.useState(new DOMRect())

  const handleMoveItem = useDebounce(
    async (rangeStart: string, insertBefore: string | null) => {
      const res = await moveItems({ collectionId, rangeStart, insertBefore })

      res.match(
        () => {
          // do nothing
        },
        _ => {
          toastError('')
        }
      )
    },
    undefined,
    [collectionId]
  )

  const handleOnItemMove = useCallback(
    (movedId: string, beforeId: string | null) => {
      handleMoveItem(movedId, beforeId)
    },
    [handleMoveItem]
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
