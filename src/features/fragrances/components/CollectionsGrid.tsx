import React from 'react'
import { useCollectionsContext } from '../contexts/CollectionsContext'
import type { Nullable } from '@/utils/util'
import type { AllFragranceCollectionFragment, UserPreviewFragment } from '@/generated/graphql'
import { CollectionPreviewCard } from './CollectionPreviewCard'
import CollectionPreviewCardSkeleton from './CollectionPreviewCardSkeleton'
import { ResizeContainer } from '@/components/ResizeContainer'
import DraggableDynamicList from '@/components/DraggableDynamicList'
import EmptyTab from '@/features/users/components/EmptyTab'
import { useMyContext } from '@/features/users'
import { DynamicList } from '@/components/DynamicList'

export interface CollectionsGridProps {
  user: UserPreviewFragment
}

const emptyCollectionText = (areMyCollections: boolean, username: string) => ({
  headline: areMyCollections ? 'You have no collections' : `${username} has no collections`,
  body: areMyCollections
    ? 'Start building your collections with fragrances you love, and they\'ll show up here'
    : 'Check back later to see what new collections they create'
})

export const CollectionsGrid = (props: CollectionsGridProps) => {
  const { user } = props

  const { me } = useMyContext()

  const {
    collections,
    isLoading,
    isLoadingMore,

    loadMore,
    moveCollection
  } = useCollectionsContext()

  const [containerRect, setContainerRect] = React.useState(new DOMRect())

  const areMyCollections = me?.id === user.id
  const isEmpty = collections.length === 0 && !isLoading
  const { headline, body } = emptyCollectionText(areMyCollections, user.username)

  const handleOnCollectionMove = React.useCallback(
    (movedId: string, beforeId: Nullable<string>, updatedCollections?: AllFragranceCollectionFragment[]) => {
      moveCollection(movedId, beforeId, updatedCollections ?? [])
    },
    [moveCollection]
  )

  const onRenderCollection = React.useCallback(
    (collection: AllFragranceCollectionFragment, _: number, isDragging?: boolean) => {
      return (
        <CollectionPreviewCard
          collection={collection}
          isDragging={isDragging}
        />
      )
    },
    []
  )

  const onRenderSkeleton = React.useCallback(
    () => {
      return (
        <CollectionPreviewCardSkeleton />
      )
    },
    []
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
    <div>
      <ResizeContainer
        onResize={setContainerRect}
      >
        {areMyCollections
          ? (
            <DraggableDynamicList
              items={collections}
              isLoading={isLoading || isLoadingMore}
              containerWidth={containerRect.width}
              gap={25}
              onRenderItem={onRenderCollection}
              onRenderSkeleton={onRenderSkeleton}
              onEndReached={loadMore}
              onItemMove={handleOnCollectionMove}
            />
          )
          : (
            <DynamicList
              items={collections}
              isLoading={isLoading || isLoadingMore}
              containerWidth={containerRect.width}
              gap={25}
              onRenderItem={onRenderCollection}
              onRenderSkeleton={onRenderSkeleton}
              onEndReached={loadMore}
            />
          )
        }
      </ResizeContainer>
    </div>
  )
}
