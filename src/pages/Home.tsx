import { FragrancePreviewCard } from '@/components/common/fragrance/FragrancePreviewCard'
import { MasonryList } from '@/components/common/MasonryList'
import { useMainLayoutContext } from '@/contexts/MainLayoutContext'
import { useScrollState } from '@/hooks/useScrollState'
import useSuggestedFragrances, { type SuggestedFragrancesFragrance } from '@/hooks/useSuggestedFragances'
import React, { useCallback } from 'react'

export const Home = () => {
  const { mainContentRect, mainContentRef } = useMainLayoutContext()
  const { data } = useSuggestedFragrances()
  useScrollState(mainContentRef, 'homeScrollPos')

  const onRenderFragrance = useCallback((item: SuggestedFragrancesFragrance) => {
    return (
      <FragrancePreviewCard fragrance={item} />
    )
  }, [])

  return (
    <MasonryList
      items={data}
      containerWidth={mainContentRect?.width}
      scrollRef={mainContentRef}
      onRenderItem={onRenderFragrance}
    />
  )
}
