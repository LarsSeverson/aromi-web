import useSuggestedFragrances, { type SuggestedFragrancesFragrance } from '@/hooks/useSuggestedFragances'
import React, { useCallback } from 'react'
import { MasonryList } from './MasonryList'
import { useMainLayoutContext } from '@/contexts/MainLayoutContext'
import { FragrancePreviewCard } from '../fragrance/FragrancePreviewCard'

export const HomeSuggestedSection = () => {
  const { mainContentRect } = useMainLayoutContext()
  const { data } = useSuggestedFragrances()

  const onRenderFragrance = useCallback((item: SuggestedFragrancesFragrance) => {
    return (
      <FragrancePreviewCard
        fragrance={item}
      />
    )
  }, [])

  return (
    <div className='flex flex-col gap-5'>
      <h1 className='font-pd text-2xl'>
        Suggested for you
      </h1>
      <MasonryList
        items={data}
        containerWidth={mainContentRect.width}
        onRenderItem={onRenderFragrance}
      />
    </div>
  )
}
