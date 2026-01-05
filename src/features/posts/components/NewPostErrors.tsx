import React from 'react'
import { useNewPostContext } from '../contexts/NewPostContext'
import { getErrorMessagesForFieldErrors } from '@/utils/validation'

const NewPostErrors = () => {
  const { formErrors } = useNewPostContext()

  return (
    <div
      className='flex flex-col gap-2'
    >
      {getErrorMessagesForFieldErrors(formErrors).map((error, index) => (
        <div
          key={index}
          className='ml-2 text-sm font-medium text-red-700'
        >
          {error}
        </div>
      ))}
    </div>
  )
}

export default NewPostErrors
