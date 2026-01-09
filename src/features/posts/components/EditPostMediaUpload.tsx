import React from 'react'
import { useEditPostContext } from '../contexts/EditPostContext'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import clsx from 'clsx'
import ImageUploadCard from '@/features/assets/components/ImageUploadCard'
import type { EditPostAsset } from '../types'

export interface EditPostMediaUploadCardProps {
  asset: EditPostAsset
}

const EditPostMediaUploadCard = (props: EditPostMediaUploadCardProps) => {
  const { asset } = props
  const { clientId, upload, postAsset } = asset

  const { onDeleteAsset } = useEditPostContext()

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: clientId })

  const previewUrl = React.useMemo(
    () => {
      if (upload?.file != null) {
        return URL.createObjectURL(upload.file)
      }

      if (postAsset != null) {
        return postAsset.url ?? undefined
      }

      return undefined
    },
    [upload, postAsset]
  )

  const handleOnRemove = () => {
    onDeleteAsset(clientId)
  }

  React.useEffect(() => {
    return () => {
      if (previewUrl != null) {
        URL.revokeObjectURL(previewUrl)
      }
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
        uploadProgress={upload?.progress}
        className='h-32 w-32 md:h-40 md:w-40'
        onRemoveClick={handleOnRemove}
      />
    </div>
  )
}

export default EditPostMediaUploadCard
