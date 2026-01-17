import React from 'react'
import PostCommentForm from './PostCommentForm'
import clsx from 'clsx'
import { useNewPostCommentContext } from '../../contexts/NewPostCommentContext'

export interface PostCommentCardInputProps {
}

export const PostCommentCardInput = () => {
  const {
    isActive
  } = useNewPostCommentContext()

  return (
    <div
      className='contents'
    >
      <div />

      <div
        className='mt-1 mb-1 flex items-center gap-0.5'
      >
        <PostCommentForm
          showCancel
          className={clsx(
            'w-full overflow-hidden',
            !isActive && 'h-0'
          )}
        />
      </div>
    </div>
  )
}
