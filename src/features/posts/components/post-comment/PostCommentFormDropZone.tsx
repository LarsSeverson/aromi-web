import { DropZone } from '@/features/assets'
import React from 'react'
import { MAX_POST_COMMENT_ASSET_SIZE, ValidPostCommentAssetType } from '../../utils/validation'
import clsx from 'clsx'
import { MdOutlineCloudUpload } from 'react-icons/md'
import { useNewPostCommentContext } from '../../contexts/NewPostCommentContext'

const PostCommentFormDropZone = () => {
  const { onUploadAsset, onAssetsRejected } = useNewPostCommentContext()

  const handleOnFilesDropped = (files: File[]) => {
    const first = files[0]
    if (first == null) return

    onUploadAsset(first)
  }

  return (
    <DropZone.Root
      acceptedFileTypes={ValidPostCommentAssetType.options}
      maxFileSizeInBytes={MAX_POST_COMMENT_ASSET_SIZE}
      className={({ isDraggingWindow, isDragging }) => clsx(
        'absolute inset-0 z-50 flex flex-col items-center justify-center transition-all duration-100',
        'min-h-50 rounded-xl border border-dashed shadow-2xl backdrop-blur-md',
        (isDraggingWindow || isDragging) ? 'h-full opacity-100' : 'pointer-events-none h-0 opacity-0',
        isDragging
          ? 'border-blue-600 bg-blue-400/70'
          : 'border-blue-500 bg-blue-400/50'
      )}
      onFilesDropped={handleOnFilesDropped}
      onFilesRejected={onAssetsRejected}
    >
      <div
        className={clsx(
          'flex cursor-pointer flex-col items-center gap-2 text-sm text-blue-600'
        )}
      >
        <div
          className='flex h-10 w-10 items-center justify-center self-center rounded-full p-2'
        >
          <MdOutlineCloudUpload
            size={20}
          />
        </div>

        Drop files here
      </div>
    </DropZone.Root>
  )
}

export default PostCommentFormDropZone
