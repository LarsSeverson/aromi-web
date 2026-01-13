import clsx from 'clsx'
import React from 'react'
import { useNewPostCommentContext } from '../../contexts/NewPostCommentContext'
import PostCommentFormAsset from './PostCommentFormAsset'

const PostCommentFormAssets = () => {
  const { uploadTasks } = useNewPostCommentContext()

  return (
    <div
      className={clsx(
        'mb-2 ml-2 flex flex-wrap gap-3',
        uploadTasks.length === 0 && 'hidden'
      )}
    >
      {uploadTasks.map(task => (
        <PostCommentFormAsset
          key={task.id}
          task={task}
        />
      ))}
    </div>
  )
}

export default PostCommentFormAssets
