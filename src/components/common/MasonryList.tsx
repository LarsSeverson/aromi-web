import { useWindowVirtualizer } from '@tanstack/react-virtual'
import React, { useEffect } from 'react'

/*
  TODO: Variable height (an actual masonry list)
*/

export interface MasonryListProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  items: T[]

  containerWidth: number
  loading?: boolean | undefined
  itemWidth?: number | undefined
  itemHeight?: number | undefined
  scale?: number | undefined
  gap?: number | undefined
  onEndReachedThreshold?: number | undefined
  initialScrollOffset?: number | undefined

  onRenderItem: (item: T, index: number) => React.ReactNode
  onRenderSkeleton: () => React.ReactNode
  onEndReached?: () => void
}

export const MasonryList = <T, >(props: MasonryListProps<T>) => {
  const {
    items,
    containerWidth,
    loading = false,
    itemWidth = 250,
    itemHeight = 400,
    gap = 15,
    scale = 0.8,
    onEndReachedThreshold = 300,
    initialScrollOffset = 0,
    onRenderItem,
    onRenderSkeleton,
    onEndReached,
    ...rest
  } = props

  const minItemWidth = itemWidth * scale
  const ratio = itemHeight / itemWidth
  const colCount = Math.max(1, Math.floor(containerWidth / (minItemWidth + gap)))
  const remaining = items.length % colCount
  const skeletonCount = loading ? (remaining === 0 ? 0 : colCount - remaining) + colCount : 0
  const total = items.length + skeletonCount
  const rowCount = Math.ceil(total / colCount)
  const effectiveWidth = (containerWidth - (colCount - 1) * gap) / colCount
  const effectiveHeight = effectiveWidth * ratio

  const rowVirtualizer = useWindowVirtualizer({
    count: rowCount,
    estimateSize: () => effectiveHeight,
    overscan: 5,
    gap,
    initialOffset: initialScrollOffset
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
      className='relative transition-[height] duration-300'
      style={{ height: `${rowVirtualizer.getTotalSize()}px` }}
    >
      {rowVirtualizer
        .getVirtualItems()
        .flatMap(virtualRow => {
          const rowIndex = virtualRow.index
          const startIndex = rowIndex * colCount

          return Array
            .from({ length: colCount })
            .flatMap((_, colIndex) => {
              const idx = startIndex + colIndex
              if (idx >= total) return []

              const x = colIndex * (effectiveWidth + gap)
              const y = virtualRow.start
              const isSkeleton = loading && idx >= items.length

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
                >
                  {isSkeleton ? onRenderSkeleton() : onRenderItem(items[idx], idx)}
                </div>
              )
            })
        })}
    </div>
  )
}
