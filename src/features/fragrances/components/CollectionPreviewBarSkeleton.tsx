import React from 'react'
import Skeleton from 'react-loading-skeleton'

const CollectionPreviewBarSkeleton = () => {
  return (
    <div
      className='h-full w-full p-1'
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

export default CollectionPreviewBarSkeleton
