import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import React from 'react'

export interface SortableItemProps {
  id: string
  onRenderItem?: (isDragging: boolean, id: string) => React.ReactNode
}

const SortableItem = (props: SortableItemProps) => {
  const { id, onRenderItem } = props

  const {
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
    setNodeRef
  } = useSortable({ id })

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    ...(isDragging && {
      pointerEvents: 'none'
    })
  }

  return (
    <div
      ref={setNodeRef}
      className='h-full w-full'
      style={style}
      {...attributes}
      {...listeners}
    >
      {onRenderItem?.(isDragging, id)}
    </div>
  )
}

export default SortableItem
