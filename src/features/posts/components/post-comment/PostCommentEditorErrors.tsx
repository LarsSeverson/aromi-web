import React from 'react'
import { useEditPostCommentContext } from '../../contexts/EditPostCommentContext'

export const PostCommentEditorErrors = () => {
  const { formErrors } = useEditPostCommentContext()

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
    </div>
  )
}
