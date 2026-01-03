import { DropZone } from '@/features/assets/components/drop-zone'
import ImageUploadCard from '@/features/assets/components/ImageUploadCard'
import { Field } from '@base-ui/react'
import clsx from 'clsx'
import React from 'react'
import { useNewPostContext } from '../contexts/NewPostContext'
import { MdOutlineCloudUpload } from 'react-icons/md'
import type { DropZoneFileRejection } from '@/features/assets'

const NewPostMedia = () => {
  const { uploadTasks, onUploadAsset } = useNewPostContext()
  const hasNoTasks = uploadTasks.length === 0

  const [dropZoneRejections, setDropZoneRejections] = React.useState<DropZoneFileRejection[]>([])

  const handleOnFilesRejected = (rejections: DropZoneFileRejection[]) => {
    setDropZoneRejections(rejections)
  }

  return (
    <Field.Root
      className='flex flex-col'
    >
      <Field.Label
        className='text-md mb-2 font-semibold'
      >
        Media
      </Field.Label>

      <DropZone.Root
        allowMultiple
        className={clsx(
          'h-50 w-full cursor-pointer rounded-2xl border-2 p-4',
          'group transition-opacity duration-100 hover:border-black/20',
          hasNoTasks && 'flex flex-col items-center justify-center',
          hasNoTasks && 'border-dashed'
        )}
        onFilesRejected={handleOnFilesRejected}
      >
        {uploadTasks.map(task => (
          <ImageUploadCard
            key={task.id}
            uploadProgress={task.progress}
            className='aspect-square h-full'
          />
        ))}

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
    </Field.Root>
  )
}

export default NewPostMedia
