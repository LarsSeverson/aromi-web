import React from 'react'
import fragranceCrackedSplash from '@/assets/fragrance-cracked-splash.webp'

const NotFoundPage = () => {
  return (
    <div
      className='mt-20 flex flex-col gap-4 self-center text-center'
    >
      <img
        src={fragranceCrackedSplash}
        alt='404 Not Found'
        className='aspect-square h-60 object-contain'
      />

      <span
        className='text-2xl font-medium'
      >
        Oops! The page you're looking for doesn't exist
      </span>

      <span
        className='text-md font-medium text-black/70'
      >
        It might have been moved or deleted. Please check the URL or return to the homepage
      </span>
    </div>
  )
}

export default NotFoundPage
