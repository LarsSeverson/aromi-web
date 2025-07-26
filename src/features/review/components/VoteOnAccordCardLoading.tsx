import React from 'react'
import Skeleton from 'react-loading-skeleton'

const VoteOnAccordCardLoading = () => {
  return (
    <div
      className='w-full aspect-square p-2'
    >
      <div
        className='w-full h-full rounded-xl overflow-hidden'
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
    </div>
  )
}

export default VoteOnAccordCardLoading
