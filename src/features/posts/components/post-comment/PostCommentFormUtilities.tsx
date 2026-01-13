import FilePickerButton from '@/features/assets/components/FilePickerButton'
import React from 'react'
import { MAX_POST_COMMENT_ASSET_SIZE, MAX_POST_COMMENT_ASSETS, ValidPostCommentAssetType } from '../../utils/validation'
import { useNewPostCommentContext } from '../../contexts/NewPostCommentContext'

const PostCommentFormUtilities = () => {
  const {
    onUploadAsset,
    onAssetsRejected
  } = useNewPostCommentContext()

  const handleOnFilePicked = (files: File[]) => {
    const first = files[0]
    if (first == null) return
    onUploadAsset(first)
  }

  return (
    <div
      className='flex gap-2'
    >
      <FilePickerButton
        acceptedFileTypes={ValidPostCommentAssetType.options}
        allowMultiple={false}
        maxFiles={MAX_POST_COMMENT_ASSETS}
        maxFileSizeInBytes={MAX_POST_COMMENT_ASSET_SIZE}
        onFilesSelected={handleOnFilePicked}
        onFilesRejected={onAssetsRejected}
      />
    </div>
  )
}

export default PostCommentFormUtilities
