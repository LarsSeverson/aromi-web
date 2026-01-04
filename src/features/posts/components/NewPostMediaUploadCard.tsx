import type { UploadTask } from '@/features/assets'
import ImageUploadCard from '@/features/assets/components/ImageUploadCard'
import React from 'react'
import { useNewPostContext } from '../contexts/NewPostContext'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import clsx from 'clsx'

export interface NewPostMediaCardProps {
  task: UploadTask
}

const NewPostMediaUploadCard = (props: NewPostMediaCardProps) => {
  const { task } = props
  const { file, progress, id } = task

  const { onDeleteAsset } = useNewPostContext()

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id })

  const previewUrl = React.useMemo(() => {
    return URL.createObjectURL(file)
  }, [file])

  const handleOnRemove = () => {
    onDeleteAsset(id)
  }

  React.useEffect(() => {
    return () => {
      URL.revokeObjectURL(previewUrl)
    }
  }, [previewUrl])

  const style = {
    transform: CSS.Translate.toString(transform),
    transition
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={clsx(
        'relative cursor-grab touch-none outline-hidden',
        isDragging && 'z-50 cursor-grabbing!'
      )}
      {...attributes}
      {...listeners}
    >
      <ImageUploadCard
        src={previewUrl}
        uploadProgress={progress}
        className='h-32 w-32 md:h-40 md:w-40'
        onRemoveClick={handleOnRemove}
      />
    </div>
  )
}

export default NewPostMediaUploadCard