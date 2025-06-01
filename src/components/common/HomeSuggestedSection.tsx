import useSuggestedFragrances, { type SuggestedFragrancesFragrance } from '@/hooks/useSuggestedFragances'
import React, { useCallback } from 'react'
import { MasonryList } from './MasonryList'
import { useMainLayoutContext } from '@/contexts/MainLayoutContext'
import { FragrancePreviewCard } from '../fragrance/FragrancePreviewCard'
import FragrancePreviewCardLoading from '../fragrance/FragrancePreviewCardLoading'

export const HomeSuggestedSection = () => {
  const { mainContentRect } = useMainLayoutContext()
  const { data, loading, loadingMore, getMore } = useSuggestedFragrances()

  const onRenderFragrance = useCallback((item: SuggestedFragrancesFragrance) => {
    return (
      <FragrancePreviewCard fragrance={item} />
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
        onRenderItem={onRenderFragrance}
        onRenderSkeleton={onRenderSkeleton}
        onEndReached={getMore}
      />
    </div>
  )
}
