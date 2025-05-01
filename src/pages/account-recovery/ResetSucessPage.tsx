import { Link } from '@tanstack/react-router'
import React from 'react'

const ResetSucessPage = () => {
  return (
    <div className='h-full flex flex-col items-center'>
      <div className='max-w-md w-full text-center'>
        <h1 className='text-3xl font-semibold'>Password Reset</h1>
        <p className='mt-3'>
          Your password has been reset. You can now log in using your new credentials.
        </p>
        <Link
          to='/'
          search={{ showLogin: 'true' }}
          className='mt-6 inline-block bg-sinopia text-white px-5 py-2 rounded-xl font-semibold hover:brightness-105'
        >
          Log In
        </Link>
      </div>
    </div>
  )
}

export default ResetSucessPage
