import { useVirtualizer } from '@tanstack/react-virtual'
import React from 'react'

export interface MasonryListProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  items: T[]

  gap?: number | undefined
  containerWidth: number
  scrollRef: React.RefObject<HTMLDivElement | null>

  onRenderItem: (item: T, index: number) => React.ReactNode
}

export const MasonryList = <T, >(props: MasonryListProps<T>) => {
  const { items, containerWidth, gap = 10, scrollRef, onRenderItem, ...rest } = props

  const itemWidth = 200
  const itemHeight = 320
  const colCount = Math.floor(containerWidth / (itemWidth + gap))
  const effectiveWidth = colCount <= 0 ? itemWidth : (containerWidth - (colCount - 1) * gap) / colCount
  const rowCount = colCount > 0 ? Math.ceil(items.length / colCount) : 0

  const rowVirtualizer = useVirtualizer({
    count: rowCount,
    getScrollElement: () => scrollRef.current,
    estimateSize: () => itemHeight + gap,
    overscan: 5
  })

  return (
    <div
      {...rest}
      className='relative'
      style={{ height: `${rowVirtualizer.getTotalSize()}px` }}
    >
      {rowVirtualizer.getVirtualItems().map(virtualRow => {
        const rowIndex = virtualRow.index
        const startIndex = rowIndex * colCount
        const rowItems = items.slice(startIndex, startIndex + colCount)

        return rowItems.map((item, colIndex) => {
          const x = colIndex * (effectiveWidth + gap)
          const y = virtualRow.start

          return (
            <div
              key={colIndex}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                transform: `translateX(${x}px) translateY(${y}px)`,
                width: effectiveWidth,
                height: itemHeight
              }}
              className='overflow-hidden transition-all ease-in-out'
            >
              {onRenderItem(item, startIndex + colIndex)}
            </div>
          )
        })
      })}
    </div>
  )
}
