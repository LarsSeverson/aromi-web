import { DropZone } from '@/features/assets/components/drop-zone'
import { Field } from '@base-ui/react'
import clsx from 'clsx'
import React from 'react'
import { useNewPostContext } from '../contexts/NewPostContext'
import { MdOutlineCloudUpload } from 'react-icons/md'
import type { FileRejection } from '@/features/assets'
import { MAX_POST_ASSET_SIZE, MAX_POST_ASSETS, ValidPostAssetType } from '../utils/validation'
import { truncate } from 'lodash'
import NewPostMediaUploads from './NewPostMediaUploads'

const NewPostMedia = () => {
  const { uploadTasks, uploadErrors, onUploadAsset } = useNewPostContext()
  const hasNoTasks = uploadTasks.length === 0

  const [dropZoneRejections, setDropZoneRejections] = React.useState<FileRejection[]>([])
  const shouldShowErrors = dropZoneRejections.length > 0 || uploadErrors.length > 0

  const uploadAssets = async (files: File[]) => {
    const promises = files.map(file => onUploadAsset(file))
    await Promise.all(promises)
  }

  const handleOnFiledDropped = (files: File[]) => {
    uploadAssets(files)
  }

  const handleOnFilesRejected = (rejections: FileRejection[]) => {
    setDropZoneRejections(rejections)

    setTimeout(() => {
      setDropZoneRejections([])
    }, 10000)
  }

  return (
    <Field.Root
      name='assets'
      className='flex flex-col'
    >
      <div
        className='mb-2 flex items-center justify-between'
      >
        <Field.Label
          className='text-md font-semibold'
        >
          Media
        </Field.Label>

        <span
          className='text-xs text-black/70'
        >
          {uploadTasks.length} / {MAX_POST_ASSETS}
        </span>
      </div>

      <DropZone.Root
        allowMultiple
        acceptedFileTypes={ValidPostAssetType.options}
        maxFileSizeInBytes={MAX_POST_ASSET_SIZE}
        className={({ isDragging }) => clsx(
          'flex min-h-50 w-full cursor-pointer flex-col items-center justify-center rounded-2xl border-2 p-4',
          'group transition-opacity duration-100 hover:border-black/20',
          hasNoTasks && 'border-dashed',
          isDragging && 'border-blue-400! bg-blue-100/10'
        )}
        onFilesRejected={handleOnFilesRejected}
        onFilesDropped={handleOnFiledDropped}
      >
        <NewPostMediaUploads />

        {hasNoTasks && (
          <DropZone.Trigger
            className='flex cursor-pointer flex-col items-center gap-2 text-sm text-black/70'
          >
            <div
              className='flex h-10 w-10 items-center justify-center self-center rounded-full bg-gray-200 p-2 group-hover:bg-gray-300'
            >
              <MdOutlineCloudUpload
                size={20}
              />
            </div>

            Choose a file or drag and drop it here
          </DropZone.Trigger>
        )}
      </DropZone.Root>

      {shouldShowErrors && (
        <div
          className='mt-2 ml-2 flex flex-col gap-1 text-sm text-red-700'
        >
          {dropZoneRejections.map((rejection, index) => (
            <div
              key={index}
            >
              Failed to upload {truncate(rejection.file.name, { length: 20 })}: {rejection.errors.at(0)}
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
      )}

      <Field.Error
        className='mt-2 ml-2 text-sm font-medium text-red-700'
      />
    </Field.Root>
  )
}

export default NewPostMedia
