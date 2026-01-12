import React from 'react'
import { useNewPostCommentContext } from '../../contexts/NewPostCommentContext'
import { Field } from '@base-ui/react'

export interface PostCommentInputErrorsProps {
  dropZoneErrors?: string[]
}

const PostCommentInputErrors = (props: PostCommentInputErrorsProps) => {
  const { dropZoneErrors = [] } = props
  const { uploadErrors } = useNewPostCommentContext()

  return (
    <div>
      <Field.Error
        className='mt-1 ml-2 text-sm font-medium text-red-700'
      />

      <div
        className='mt-2 ml-2 flex flex-col gap-1 text-sm text-red-700'
      >
        {dropZoneErrors.map((message, index) => (
          <div
            key={index}
          >
            {message}
          </div>
        ))}

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

export default PostCommentInputErrors
