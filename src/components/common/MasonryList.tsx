import { useVirtualizer } from '@tanstack/react-virtual'
import React, { useRef } from 'react'

export interface MasonryListProps {
  items: unknown[]
  containerWidth: number
  gap: number
}

export const MasonryList = (props: MasonryListProps) => {
  const { items, containerWidth, gap } = props

  const itemWidth = 100
  const itemHeight = 200
  const colCount = Math.floor(containerWidth / (itemWidth + gap))
  const rowCount = colCount > 0 ? Math.ceil(items.length / colCount) : 0
  const parentRef = useRef<HTMLDivElement>(null)

  const rowVirtualizer = useVirtualizer({
    count: rowCount,
    getScrollElement: () => parentRef.current,
    estimateSize: () => itemHeight + gap,
    overscan: 5
  })

  return (
    <div
      ref={parentRef}
      className='overflow-auto'
    >
      <div
        className='relative'
        style={{ height: `${rowVirtualizer.getTotalSize()}px` }}
      >
        {rowVirtualizer.getVirtualItems().map(virtualRow => {
          const rowIndex = virtualRow.index
          const startIndex = rowIndex * colCount
          const rowItems = items.slice(startIndex, startIndex + colCount)

          return rowItems.map((item, colIndex) => {
            const x = colIndex * (itemWidth + gap)
            const y = virtualRow.start

            return (
              <div
                key={colIndex}
                style={{
                  position: 'absolute',
                  top: y,
                  left: x,
                  width: itemWidth,
                  height: itemHeight,
                  background: '#ccc'
                }}
              />
            )
          })
        })}
      </div>
    </div>
  )
}
