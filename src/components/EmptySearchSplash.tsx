import React from 'react'
import noResultsImage from '@/assets/no-search-results.png'

const EmptySearchSplash = () => {
  return (
    <div
      className='mt-20 flex flex-col gap-4 self-center text-center'
    >
      <img
        src={noResultsImage}
        alt='No results'
        className='aspect-square h-60 object-contain'
      />

      <span
        className='text-2xl font-medium'
      >
        No results found
      </span>

      <span
        className='text-md font-medium text-black/70'
      >
        Try changing your search term or adjusting the search filters
      </span>
    </div>
  )
}

export default EmptySearchSplash
