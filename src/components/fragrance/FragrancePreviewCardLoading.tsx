import React from 'react'
import Skeleton from 'react-loading-skeleton'

const FragrancePreviewCardLoading = () => {
  return (
    <div
      className='h-full rounded-2xl overflow-hidden'
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

export default FragrancePreviewCardLoading
