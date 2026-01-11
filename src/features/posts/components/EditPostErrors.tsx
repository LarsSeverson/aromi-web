import React from 'react'
import { useEditPostContext } from '../contexts/EditPostContext'

const EditPostErrors = () => {
  const { formErrors } = useEditPostContext()

  const fieldPaths = ['type', 'title', 'content', 'fragranceId', 'assets']
  const catchAllErrors = Object.entries(formErrors)
    .filter(([key]) => !fieldPaths.includes(key))
    .map(([_, error]) => error as string)
    .filter(Boolean)

  if (catchAllErrors.length === 0) return null

  return (
    <div
      className='flex flex-col gap-2'
    >
      {catchAllErrors.map((error, index) => (
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

export default EditPostErrors
