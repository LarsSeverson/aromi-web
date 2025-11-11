import React from 'react'
import Skeleton from 'react-loading-skeleton'

const FragrancePreviewCardSkeleton = () => {
  return (
    <div
      className='h-full overflow-hidden rounded-2xl'
    >
      <Skeleton
        height='100%'
        enableAnimation={false}
        style={{
          display: 'block',
          animation: 'blink 2s infinite'
        }}
      />
    </div>
  )
}

export default FragrancePreviewCardSkeleton
