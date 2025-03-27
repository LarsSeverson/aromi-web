import { useWindowVirtualizer } from '@tanstack/react-virtual'
import React, { useEffect } from 'react'

export interface MasonryListProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  items: T[]

  containerWidth: number
  itemWidth?: number | undefined
  itemHeight?: number | undefined
  scale?: number | undefined
  gap?: number | undefined
  onEndReachedThreshold?: number | undefined

  onRenderItem: (item: T, index: number) => React.ReactNode
  onEndReached?: () => void
}

export const MasonryList = <T, >(props: MasonryListProps<T>) => {
  const {
    items,
    containerWidth,
    itemWidth = 250,
    itemHeight = 400,
    gap = 10,
    scale = 0.8,
    onEndReachedThreshold = 300,
    onRenderItem,
    onEndReached,
    ...rest
  } = props

  const minItemWidth = itemWidth * scale
  const ratio = itemHeight / itemWidth
  const colCount = Math.max(1, Math.floor(containerWidth / (minItemWidth + gap)))
  const rowCount = Math.ceil(items.length / colCount)
  const effectiveWidth = (containerWidth - (colCount - 1) * gap) / colCount
  const effectiveHeight = effectiveWidth * ratio

  const rowVirtualizer = useWindowVirtualizer({
    count: rowCount,
    estimateSize: () => effectiveHeight,
    overscan: 5,
    gap
  })

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      if (scrollHeight - scrollTop - clientHeight <= onEndReachedThreshold) {
        onEndReached?.()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => { window.removeEventListener('scroll', handleScroll) }
  }, [onEndReached, onEndReachedThreshold])

  useEffect(() => {
    rowVirtualizer.measure()
  }, [effectiveHeight, rowVirtualizer])

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
              key={`${rowIndex}-${colIndex}`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                transform: `translateX(${x}px) translateY(${y}px)`,
                width: effectiveWidth,
                height: effectiveHeight
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
