import { DynamicList } from '@/components/DynamicList'
import { ResizeContainer } from '@/components/ResizeContainer'
import { useFragrances } from '@/features/fragrances'
import { FragrancePreviewCard } from '@/features/fragrances/components/FragrancePreviewCard'
import FragrancePreviewCardSkeleton from '@/features/fragrances/components/FragrancePreviewCardSkeleton'
import type { FragrancePreviewFragment } from '@/generated/graphql'
import { useCallback, useState } from 'react'

export const HomePage = () => {
  const { fragrances, isLoading, isLoadingMore, loadMore } = useFragrances()

  const [containerRect, setContainerRect] = useState(new DOMRect())

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
        onResize={setContainerRect}
      >
        <DynamicList
          items={fragrances}
          containerWidth={containerRect?.width}
          loading={isLoading || isLoadingMore}
          onRenderItem={onRenderFragrance}
          onRenderSkeleton={onRenderFragranceSkeleton}
          onEndReached={handleOnEndReached}
        />
      </ResizeContainer>
    </div>
  )
}
