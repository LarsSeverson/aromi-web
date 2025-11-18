import type { FragrancePreviewFragment } from '@/generated/graphql'
import React, { useCallback } from 'react'
import { FragrancePreviewCard } from '../components/FragrancePreviewCard'
import FragrancePreviewCardSkeleton from '../components/FragrancePreviewCardSkeleton'
import { ResizeContainer } from '@/components/ResizeContainer'
import { DynamicList } from '@/components/DynamicList'
import { useSearchFragrances } from '../hooks/useSearchFragrances'
import noResultsImage from '@/assets/no-search-results.png'

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
        <div
          className='mt-20 flex flex-col gap-4 self-center text-center'
        >
          <img
            src={noResultsImage}
            alt='No results'
            className='aspect-square h-60 object-contain'
          />

          <span
            className='text-2xl font-medium'
          >
            No results found
          </span>

          <span
            className='text-md font-medium text-black/70'
          >
            Try adjusting your search term
          </span>
        </div>
      )}

      {!hasMore && !hasNoResults && (
        <span
          className='mt-20 self-center text-center font-medium text-black/80'
        >
          No more results
        </span>
      )}
    </div>
  )
}

export default FragranceSearchPage
