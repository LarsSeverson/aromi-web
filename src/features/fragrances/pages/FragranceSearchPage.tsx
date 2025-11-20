import type { FragrancePreviewFragment } from '@/generated/graphql'
import React, { useCallback } from 'react'
import { FragrancePreviewCard } from '../components/FragrancePreviewCard'
import FragrancePreviewCardSkeleton from '../components/FragrancePreviewCardSkeleton'
import { ResizeContainer } from '@/components/ResizeContainer'
import { DynamicList } from '@/components/DynamicList'
import { useSearchFragrances } from '../hooks/useSearchFragrances'
import EmptySearchSplash from '@/components/EmptySearchSplash'
import EndSearchSplash from '@/components/EndSearchSplash'

export interface FragranceSearchPageProps {
  term: string
}

const FragranceSearchPage = (props: FragranceSearchPageProps) => {
  const { term } = props

  const {
    fragrances,
    isLoading,
    isLoadingMore,
    hasMore,
    hasNoResults,
    loadMore
  } = useSearchFragrances({ term })

  const [containerRect, setContainerRect] = React.useState(new DOMRect())

  const onRenderFragrance = useCallback(
    (fragrance: FragrancePreviewFragment) => {
      return (
        <FragrancePreviewCard
          key={fragrance.id}
          fragrance={fragrance}
        />
      )
    },
    []
  )

  const onRenderFragranceSkeleton = useCallback(
    () => {
      return (
        <FragrancePreviewCardSkeleton />
      )
    },
    []
  )

  const handleOnEndReached = useCallback(
    () => {
      loadMore()
    },
    [loadMore]
  )

  return (
    <div
      className='flex flex-col p-4'
    >
      <ResizeContainer
        onResize={setContainerRect}
      >
        <DynamicList
          items={fragrances}
          containerWidth={containerRect?.width}
          isLoading={isLoading || isLoadingMore}
          onRenderItem={onRenderFragrance}
          onRenderSkeleton={onRenderFragranceSkeleton}
          onEndReached={handleOnEndReached}
        />
      </ResizeContainer>

      {hasNoResults && (
        <EmptySearchSplash />
      )}

      {!hasMore && !hasNoResults && (
        <EndSearchSplash />
      )}
    </div>
  )
}

export default FragranceSearchPage
