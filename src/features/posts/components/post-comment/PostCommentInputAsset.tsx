import type { UploadTask } from '@/features/assets'
import ImageUploadCard from '@/features/assets/components/ImageUploadCard'
import React from 'react'
import { useNewPostCommentContext } from '../../contexts/NewPostCommentContext'

export interface PostCommentInputAssetProps {
  task: UploadTask
}

const PostCommentInputAsset = (props: PostCommentInputAssetProps) => {
  const { task } = props
  const { file, progress } = task

  const { onDeleteAsset } = useNewPostCommentContext()

  const previewUrl = React.useMemo(() => {
    return file == null ? undefined : URL.createObjectURL(file)
  }, [file])

  const handleOnRemove = () => {
    onDeleteAsset(task.id)
  }

  React.useEffect(() => {
    return () => {
      if (previewUrl != null) {
        URL.revokeObjectURL(previewUrl)
      }
    }
  }, [previewUrl])

  return (
    <ImageUploadCard
      src={previewUrl}
      uploadProgress={progress}
      className='h-40 w-40 rounded-2xl!'
      onRemoveClick={handleOnRemove}
    />
  )
}

export default PostCommentInputAsset
