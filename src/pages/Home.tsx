import { MasonryList } from '@/components/common/MasonryList'
import { ResizeContainer } from '@/components/common/ResizeContainer'
import useSuggestedFragrances from '@/hooks/useSuggestedFragances'
import React, { useCallback, useState } from 'react'

export const Home = () => {
  const { data } = useSuggestedFragrances()

  const [containerWidth, setContainerWidth] = useState(0)

  const handleResize = useCallback((rect: DOMRect) => {
    setContainerWidth(rect.width)
  }, [])

  return (
    <ResizeContainer
      onResize={handleResize}
      className='h-full'
    >
      <MasonryList
        items={data}
        gap={10}
        containerWidth={containerWidth}
      />
    </ResizeContainer>

  )
}
