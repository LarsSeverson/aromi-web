import React from 'react'
import { useNewPostCommentContext } from '../../contexts/NewPostCommentContext'

const PostCommentFormErrors = () => {
  const { formErrors, uploadErrors } = useNewPostCommentContext()

  const parsedFormErrors = Object
    .entries(formErrors)
    .map(([_, error]) => error as string)

  return (
    <div
      className='mt-2 ml-4 flex flex-col gap-1 text-sm text-red-700'
    >
      <div>
        {parsedFormErrors.map((error, index) => (
          <div
            key={index}
          >
            {error}
          </div>
        ))}
      </div>

      <div >
        {uploadErrors.map((error, index) => (
          <div
            key={index}
          >
            {error}
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostCommentFormErrors
