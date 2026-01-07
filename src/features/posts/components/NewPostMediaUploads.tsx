import { closestCenter, DndContext, type DragEndEvent, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { rectSortingStrategy, SortableContext, sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import React from 'react'
import { useNewPostContext } from '../contexts/NewPostContext'
import NewPostMediaUploadCard from './NewPostMediaUploadCard'

const NewPostMediaUploads = () => {
  const { uploadTasks, onMoveAsset } = useNewPostContext()

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
      const oldIndex = uploadTasks.findIndex(t => t.id === active.id.toString())
      const newIndex = uploadTasks.findIndex(t => t.id === over.id.toString())

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
        items={uploadTasks.map(t => t.id)}
        strategy={rectSortingStrategy}
      >
        <div
          className='grid w-fit grid-cols-2 justify-items-center gap-3'
        >
          {uploadTasks.map(task => (
            <NewPostMediaUploadCard
              key={task.id}
              task={task}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  )
}

export default NewPostMediaUploads
