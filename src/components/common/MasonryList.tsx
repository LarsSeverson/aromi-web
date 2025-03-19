import { useVirtualizer } from '@tanstack/react-virtual'
import React, { useEffect } from 'react'

export interface MasonryListProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  items: T[]

  containerWidth: number
  gap?: number | undefined
  scrollRef: React.RefObject<HTMLDivElement | null>
  scrollThreshold?: number | undefined

  onRenderItem: (item: T, index: number) => React.ReactNode
  onEndReached?: () => void
}

export const MasonryList = <T, >(props: MasonryListProps<T>) => {
  const {
    items,
    containerWidth,
    gap = 10,
    scrollRef,
    scrollThreshold = 1000,
    onRenderItem,
    onEndReached,
    ...rest
  } = props

  const itemWidth = 250
  const itemHeight = 400
  const colCount = Math.max(1, Math.floor(containerWidth / (itemWidth + gap)))
  const effectiveWidth = colCount <= 0 ? itemWidth : (containerWidth - (colCount - 1) * gap) / colCount
  const rowCount = Math.ceil(items.length / colCount)

  const rowVirtualizer = useVirtualizer({
    count: rowCount,
    getScrollElement: () => scrollRef.current,
    estimateSize: () => itemHeight + gap,
    overscan: 5
  })

  useEffect(() => {
    const container = scrollRef.current
    if (container == null) return

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container
      if (scrollHeight - scrollTop - clientHeight <= scrollThreshold) {
        onEndReached?.()
      }
    }

    container.addEventListener('scroll', handleScroll)
    return () => { container.removeEventListener('scroll', handleScroll) }
  }, [onEndReached, scrollRef, scrollThreshold])

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
              className='overflow-hidden'
            >
              {onRenderItem(item, startIndex + colIndex)}
            </div>
          )
        })
      })}
    </div>
  )
}
