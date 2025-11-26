import React from 'react'
import fourOFour from '@/assets/404.png'

const FragranceErrorPage = () => {
  return (
    <div
      className='mt-20 flex flex-col gap-4 self-center text-center'
    >
      <img
        src={fourOFour}
        alt='404 Not Found'
        className='aspect-square h-60 object-contain'
      />

      <span
        className='text-2xl font-medium'
      >
        Something went wrong
      </span>

      <span
        className='text-md font-medium text-black/70'
      >
        We couldn't load this page. Perhaps the fragrance doesn't exist or has been removed
      </span>
    </div>
  )
}

export default FragranceErrorPage
