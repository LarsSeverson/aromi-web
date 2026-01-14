import React from 'react'
import Skeleton from 'react-loading-skeleton'

export const PostCommentCardSkeleton = () => {
  return (
    <div
      className='h-25 w-full overflow-hidden rounded-2xl py-2'
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
