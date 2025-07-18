import BouncyButton from '@/components/BouncyButton'
import clsx from 'clsx'
import React from 'react'
import TextareaAutosize from 'react-textarea-autosize'

const WriteAReviewSection = () => {
  return (
    <div
      className='p-3 w-full'
    >
      <h1
        className='text-lg font-bold'
      >
        Tell us about your experience
      </h1>

      <div
        className='w-full mt-3'
      >
        <TextareaAutosize
          placeholder='Got compliments or regrets? Tell us here...'
          className={clsx(
            'overflow-auto w-full border border-gray-300 rounded-md p-4 min-h-44 resize-none outline-none hover:border-sinopia',
            'transition-colors ease-in-out duration-150 focus:border-sinopia focus:border-2 focus:outline-none'
          )}
        />
      </div>

      <BouncyButton
        className='bg-sinopia text-white px-12 h-[44px] active:scale-[1] rounded-md hover:brightness-105 mt-4'
      >
        <p
          className='text-base font-medium'
        >
          Submit Review
        </p>
      </BouncyButton>
    </div>
  )
}

export default WriteAReviewSection
