import type { FragranceCollectionPreviewFragment, UserPreviewFragment } from '@/generated/graphql'
import React, { useCallback } from 'react'
import { useMyContext } from '../context/MyContext'
import { useUserCollections } from '../hooks/useUserCollections'
import { ResizeContainer } from '@/components/ResizeContainer'
import { DynamicList } from '@/components/DynamicList'
import { CollectionPreviewCard } from '@/features/fragrances/components/CollectionPreviewCard'
import CollectionPreviewCardSkeleton from '@/features/fragrances/components/CollectionPreviewCardSkeleton'
import EmptyTab from './EmptyTab'

const emptyCollectionText = (areMyCollections: boolean, username: string) => ({
  headline: areMyCollections ? 'You have no collections' : `${username} has no collections`,
  body: areMyCollections
    ? 'Start building your collections with fragrances you love, and they\'ll show up here'
    : 'Check back later to see what new collections they create'
})

export interface UserCollectionsTabProps {
  user: UserPreviewFragment
}

export const UserCollectionsTab = (props: UserCollectionsTabProps) => {
  const { user } = props
  const { id, username } = user

  const { me } = useMyContext()
  const { collections, isLoading, isLoadingMore, loadMore } = useUserCollections(id)

  const [containerRect, setContainerRect] = React.useState(new DOMRect())

  const areMyCollections = me?.id === id
  const isEmpty = collections.length === 0 && !isLoading
  const { headline, body } = emptyCollectionText(areMyCollections, username)

  const onRenderCollection = useCallback(
    (collection: FragranceCollectionPreviewFragment) => {
      return (
        <CollectionPreviewCard
          collection={collection}
        />
      )
    },
    []
  )

  const onRenderSkeleton = useCallback(
    () => {
      return (
        <CollectionPreviewCardSkeleton />
      )
    },
    []
  )

  const handleOnEndReached = () => {
    loadMore()
  }

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
      className='w-full p-10'
    >
      <ResizeContainer
        onResize={setContainerRect}
      >
        <DynamicList
          items={collections}
          isLoading={isLoading || isLoadingMore}
          containerWidth={containerRect?.width}
          itemHeight={300}
          itemWidth={350}
          gap={25}
          onRenderItem={onRenderCollection}
          onRenderSkeleton={onRenderSkeleton}
          onEndReached={handleOnEndReached}
        />
      </ResizeContainer>
    </div>
  )
}
