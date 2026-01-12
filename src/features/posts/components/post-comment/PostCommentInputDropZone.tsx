import { DropZone, type FileRejection } from '@/features/assets'
import React from 'react'
import { MAX_POST_COMMENT_ASSET_SIZE, ValidPostCommentAssetType } from '../../utils/validation'
import clsx from 'clsx'
import { MdOutlineCloudUpload } from 'react-icons/md'
import { truncate } from 'lodash'
import { useNewPostCommentContext } from '../../contexts/NewPostCommentContext'

export interface PostCommentInputDropZoneProps {
  isVisible?: boolean
  onDropZoneErrors?: (errorMessages: string[]) => void
}

const PostCommentInputDropZone = (props: PostCommentInputDropZoneProps) => {
  const { onDropZoneErrors } = props

  const { onUploadAsset } = useNewPostCommentContext()

  const handleOnFilesDropped = (files: File[]) => {
    const first = files[0]
    if (first == null) return

    onUploadAsset(first)
  }

  const handleOnFilesRejected = (errors: FileRejection[]) => {
    const errorMessages = errors.map(error =>
      `Failed to upload ${truncate(error.file.name, { length: 20 })}: ${error.errors.at(0)}`
    )

    onDropZoneErrors?.(errorMessages)
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
      onFilesRejected={handleOnFilesRejected}
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

export default PostCommentInputDropZone
