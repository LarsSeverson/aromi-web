import React, { useCallback, useState } from 'react'
import { DynamicList, type DynamicListProps } from './DynamicList'
import type { Identifiable, Nullable } from '@/utils/util'
import {
  DndContext,
  type DragEndEvent,
  DragOverlay,
  type DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy
} from '@dnd-kit/sortable'
import SortableItem from './SortableItem'

export interface DraggableDynamicListProps<T extends Identifiable> extends Omit<DynamicListProps<T>, 'onRenderItem'> {
  onRenderItem: (item: T, index: number, isDragging: boolean) => React.ReactNode
  onItemMove?: (movedId: string, beforeId: Nullable<string>, updated?: T[]) => void
}

const DraggableDynamicList = <T extends Identifiable>(props: DraggableDynamicListProps<T>) => {
  const { items, onRenderItem, onItemMove, ...rest } = props

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 10 } })
  )

  const [activeId, setActiveId] = useState<string | null>(null)
  const activeItem = activeId == null ? null : items.find(i => i.id === activeId)
  const activeIndex = activeItem == null ? -1 : items.indexOf(activeItem)

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(String(event.active.id))
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (over == null || active.id === over.id) {
      setActiveId(null)
      return
    }

    const oldIndex = items.findIndex(i => i.id === active.id)
    const newIndex = items.findIndex(i => i.id === over.id)

    const updated = arrayMove(items, oldIndex, newIndex)

    const nextItem = updated[newIndex + 1]
    const beforeId = nextItem == null ? null : nextItem.id

    onItemMove?.(String(active.id), beforeId, updated)
    setActiveId(null)
  }

  const handleOnRenderItem = useCallback(
    (item: T, index: number) => (
      <SortableItem
        key={item.id}
        id={item.id}
        onRenderItem={onRenderItem.bind(null, item, index, false)}
      />
    ),
    [onRenderItem]
  )

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={items.map(i => i.id)}
        strategy={rectSortingStrategy}
      >
        <DynamicList
          {...rest}
          items={items}
          onRenderItem={handleOnRenderItem}
        />
      </SortableContext>

      <DragOverlay>
        {activeItem == null ? null : onRenderItem(activeItem, activeIndex, true)}
      </DragOverlay>
    </DndContext>
  )
}

export default DraggableDynamicList