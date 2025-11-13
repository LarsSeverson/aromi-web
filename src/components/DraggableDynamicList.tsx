import React, { useCallback, useEffect } from 'react'
import { DynamicList, type DynamicListProps } from './DynamicList'
import type { Identifiable } from '@/utils/util'
import { DndContext, type DragEndEvent, DragOverlay, type DragStartEvent, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { arrayMove, rectSortingStrategy, SortableContext } from '@dnd-kit/sortable'
import SortableItem from './SortableItem'

export interface DraggableDynamicListProps<T extends Identifiable> extends Omit<DynamicListProps<T>, 'onRenderItem'> {
  onRenderItem: (item: T, index: number, isDragging: boolean) => React.ReactNode
}

const DraggableDynamicList = <T extends Identifiable>(props: DraggableDynamicListProps<T>) => {
  const { items, onRenderItem, ...rest } = props

  const sensors = useSensors(
    useSensor(
      PointerSensor,
      { activationConstraint: { distance: 10 } }
    )
  )

  const [internalItems, setInternalItems] = React.useState(items)
  const [activeId, setActiveId] = React.useState<string | null>(null)

  const activeItem = activeId == null ? null : internalItems.find(i => i.id === activeId)
  const activeIndex = activeItem == null ? -1 : internalItems.indexOf(activeItem)

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(String(event.active.id))
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (over != null && active.id !== over.id) {
      const oldIndex = internalItems.findIndex(i => i.id === active.id)
      const newIndex = internalItems.findIndex(i => i.id === over.id)
      const updated = arrayMove(internalItems, oldIndex, newIndex)
      setInternalItems(updated)
    }
  }

  const handleOnRenderItem = useCallback(
    (item: T, index: number) => {
      return (
        <SortableItem
          id={item.id}
          onRenderItem={onRenderItem.bind(null, item, index)}
        />
      )
    },
    [onRenderItem]
  )

  const handleOnItemsUpdated = useCallback(
    (newItems: T[]) => {
      if (newItems.length !== internalItems.length) {
        setInternalItems(newItems)
        return
      }

      setInternalItems(prevItems => {
        const existing = new Set(prevItems.map(i => i.id))
        const merged = prevItems.slice()

        for (const newItem of newItems) {
          if (!existing.has(newItem.id)) {
            merged.push(newItem)
          }
        }

        return merged
      })
    },
    [internalItems]
  )

  useEffect(
    () => {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      handleOnItemsUpdated(items)
    },
    [items, handleOnItemsUpdated]
  )

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={internalItems.map(i => i.id)}
        strategy={rectSortingStrategy}
      >
        <DynamicList
          {...rest}
          items={internalItems}
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
