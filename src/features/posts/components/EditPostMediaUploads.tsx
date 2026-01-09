import React from 'react'
import { useEditPostContext } from '../contexts/EditPostContext'
import { closestCenter, DndContext, type DragEndEvent, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { rectSortingStrategy, SortableContext, sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import EditPostMediaUploadCard from './EditPostMediaUpload'

const EditPostMediaUploads = () => {
  const { uploadTasks, onMoveAsset } = useEditPostContext()

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 }
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  )

  const handleOnDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (over != null && active.id !== over.id) {
      const oldIndex = uploadTasks.findIndex(task => task.clientId === active.id.toString())
      const newIndex = uploadTasks.findIndex(task => task.clientId === over.id.toString())

      onMoveAsset(oldIndex, newIndex)
    }
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleOnDragEnd}
    >
      <SortableContext
        items={uploadTasks.map(task => task.clientId)}
        strategy={rectSortingStrategy}
      >
        <div
          className='grid w-fit grid-cols-2 justify-items-center gap-3'
        >
          {uploadTasks.map(task => (
            <EditPostMediaUploadCard
              key={task.clientId}
              asset={task}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  )
}

export default EditPostMediaUploads
