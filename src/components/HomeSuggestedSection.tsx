import useSuggestedFragrances from '@/features/fragrance/hooks/useSuggestedFragances'
import React, { useCallback } from 'react'
import { MasonryList } from './MasonryList'
import { useMainLayoutContext } from '@/contexts/MainLayoutContext'
import { FragrancePreviewCard, type FragrancePreviewCardFragrance } from '../features/fragrance/components/FragrancePreviewCard'
import FragrancePreviewCardLoading from '../features/fragrance/components/FragrancePreviewCardLoading'
import { useElementScrollRestoration } from '@tanstack/react-router'

export const HomeSuggestedSection = () => {
  const { mainContentRect } = useMainLayoutContext()
  const { data, loading, loadingMore, loadMore } = useSuggestedFragrances()

  const scrollEntry = useElementScrollRestoration({
    getKey: () => 'homeScrollPos',
    getElement: () => window
  })

  const onRenderFragrance = useCallback((item: FragrancePreviewCardFragrance) => {
    return (
      <FragrancePreviewCard
        fragrance={item}
      />
    )
  }, [])

  const onRenderSkeleton = useCallback(() => {
    return (
      <FragrancePreviewCardLoading />
    )
  }, [])

  return (
    <div className='flex flex-col gap-5'>
      <MasonryList
        items={data}
        containerWidth={mainContentRect.width}
        loading={loading || loadingMore}
        initialScrollOffset={scrollEntry?.scrollY}
        onRenderItem={onRenderFragrance}
        onRenderSkeleton={onRenderSkeleton}
        onEndReached={loadMore}
      />
    </div>
  )
}
