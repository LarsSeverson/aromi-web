import React from 'react'
import Skeleton from 'react-loading-skeleton'

const CollectionPreviewCardSkeleton = () => {
  return (
    <div
      className='h-full w-full overflow-hidden rounded-2xl'
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

export default CollectionPreviewCardSkeleton
