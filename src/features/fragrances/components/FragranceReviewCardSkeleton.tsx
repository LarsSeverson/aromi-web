import React from 'react'
import Skeleton from 'react-loading-skeleton'

const FragranceReviewCardSkeleton = () => {
  return (
    <div
      className='h-full w-full overflow-hidden'
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

export default FragranceReviewCardSkeleton
