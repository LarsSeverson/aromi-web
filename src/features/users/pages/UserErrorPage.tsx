import React from 'react'
import userSplash from '@/assets/user-splash.webp'

const UserErrorPage = () => {
  return (
    <div
      className='mt-20 flex flex-col gap-4 self-center text-center'
    >
      <img
        src={userSplash}
        alt='Error Loading User'
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
        We couldn't load this page. Perhaps the user doesn't exist or has been removed
      </span>
    </div>
  )
}

export default UserErrorPage
