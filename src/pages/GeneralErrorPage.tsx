import { Colors } from '@/styles/Colors'
import React from 'react'
import { MdOutlineErrorOutline } from 'react-icons/md'

const GeneralErrorPage = () => {
  return (
    <div
      className='mt-20 flex flex-col items-center gap-4 self-center text-center'
    >
      <MdOutlineErrorOutline
        size={96}
        color={Colors.sinopia}
      />

      <span
        className='text-2xl font-medium'
      >
        Something went wrong
      </span>

      <span
        className='text-md font-medium text-black/70'
      >
        We couldn't load this page. Please try again later
      </span>
    </div>
  )
}

export default GeneralErrorPage
