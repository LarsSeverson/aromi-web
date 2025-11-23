import { DynamicList } from '@/components/DynamicList'
import { ResizeContainer } from '@/components/ResizeContainer'
import { useFragrances } from '@/features/fragrances'
import { FragrancePreviewCard } from '@/features/fragrances/components/FragrancePreviewCard'
import FragrancePreviewCardSkeleton from '@/features/fragrances/components/FragrancePreviewCardSkeleton'
import type { FragrancePreviewFragment } from '@/generated/graphql'
import { useContainerRect } from '@/hooks/useContainerRect'
import { useElementScrollRestoration } from '@tanstack/react-router'
import { useCallback } from 'react'

export const HomePage = () => {
  const { fragrances, isLoading, isLoadingMore, loadMore } = useFragrances()

  const { rect, updateRect } = useContainerRect('homePageContainer')
  const scrollEntry = useElementScrollRestoration({
    getElement: () => window
  })

  const onRenderFragrance = useCallback(
    (fragrance: FragrancePreviewFragment) => (
      <FragrancePreviewCard
        key={fragrance.id}
        fragrance={fragrance}
      />
    ),
    []
  )

  const onRenderFragranceSkeleton = useCallback(
    () => (
      <FragrancePreviewCardSkeleton />
    ),
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
      className='p-4'
    >
      <ResizeContainer
        onResize={updateRect}
      >
        <DynamicList
          items={fragrances}
          containerWidth={rect.width}
          isLoading={isLoading || isLoadingMore}
          initialScrollOffset={scrollEntry?.scrollY}
          onRenderItem={onRenderFragrance}
          onRenderSkeleton={onRenderFragranceSkeleton}
          onEndReached={handleOnEndReached}
        />
      </ResizeContainer>
    </div>
  )
}
