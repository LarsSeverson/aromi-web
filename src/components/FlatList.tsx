'use no memo'

import type { MeasurementsCache } from '@/hooks/useMeasurementsCache'
import type { Identifiable } from '@/utils/util'
import { useVirtualizer, useWindowVirtualizer } from '@tanstack/react-virtual'
import { clsx } from 'clsx'
import React, { useEffect } from 'react'

export interface FlatListProps<T extends Identifiable> extends React.HTMLAttributes<HTMLDivElement> {
  items: T[]
  estimateSize: number
  direction?: 'vertical' | 'horizontal'
  useWindow?: boolean
  scrollRef?: React.RefObject<HTMLDivElement | null>
  isLoading?: boolean
  skeletonCount?: number
  gap?: number
  overscan?: number
  initialScrollOffset?: number
  onEndReachedThreshold?: number
  initialMeasurementsCache?: MeasurementsCache
  onRenderItem: (item: T, index: number) => React.ReactNode
  onRenderSkeleton?: (index: number) => React.ReactNode
  onEndReached?: () => void
  onSaveMeasurements?: (measurements: MeasurementsCache) => void
}

export const FlatList = <T extends Identifiable, >(props: FlatListProps<T>) => {
  const {
    items,
    estimateSize,
    direction = 'vertical',
    useWindow = true,
    scrollRef,
    isLoading = false,
    skeletonCount = 3,
    gap = 0,
    overscan = 5,
    initialScrollOffset = 0,
    onEndReachedThreshold = 500,
    initialMeasurementsCache,
    onRenderItem,
    onRenderSkeleton,
    onEndReached,
    onSaveMeasurements,
    className,
    ...rest
  } = props

  const isVertical = direction === 'vertical'

  const activeSkeletonCount = isLoading ? skeletonCount : 0

  const totalCount = items.length + activeSkeletonCount

  const virtualizerOptions = {
    count: totalCount,
    estimateSize: () => estimateSize,
    overscan,
    gap,
    initialOffset: initialScrollOffset,
    initialMeasurementsCache,
    horizontal: !isVertical,
    measureElement: (el: HTMLElement) => {
      return isVertical
        ? el.getBoundingClientRect().height
        : el.getBoundingClientRect().width
    }
  }

  const windowVirtualizer = useWindowVirtualizer(virtualizerOptions)

  // eslint-disable-next-line react-hooks/incompatible-library
  const elementVirtualizer = useVirtualizer({
    ...virtualizerOptions,
    getScrollElement: () => scrollRef?.current ?? null
  })

  const virtualizer = useWindow ? windowVirtualizer : elementVirtualizer

  useEffect(() => {
    const scrollElement = useWindow ? document.documentElement : scrollRef?.current

    if (scrollElement == null || onEndReached == null) return

    const handleScroll = () => {
      const { scrollTop, scrollLeft, scrollHeight, scrollWidth, clientHeight, clientWidth } = scrollElement

      const offset = isVertical ? scrollTop : scrollLeft
      const extent = isVertical ? scrollHeight : scrollWidth
      const viewport = isVertical ? clientHeight : clientWidth

      if (extent - offset - viewport <= onEndReachedThreshold) {
        onEndReached()
      }
    }

    const target = useWindow ? window : scrollElement

    target.addEventListener('scroll', handleScroll)

    return () => {
      target.removeEventListener('scroll', handleScroll)
    }
  }, [useWindow, onEndReached, onEndReachedThreshold, isVertical, scrollRef])

  useEffect(() => {
    return () => {
      onSaveMeasurements?.(virtualizer.measurementsCache)
    }
  }, [onSaveMeasurements, virtualizer])

  return (
    <div
      {...rest}
      className={clsx(
        'relative w-full',
        className
      )}
      style={{
        height: isVertical ? `${virtualizer.getTotalSize()}px` : (rest.style?.height ?? '100%'),
        width: isVertical ? (rest.style?.width ?? '100%') :`${virtualizer.getTotalSize()}px`,
        ...rest.style
      }}
    >
      {virtualizer
        .getVirtualItems()
        .map((virtualItem) => {
          const index = virtualItem.index

          const isSkeleton = index >= items.length

          const key = isSkeleton
            ? `skeleton-${index}`
            : items[index].id

          return (
            <div
              key={key}
              data-index={index}
              ref={virtualizer.measureElement}
              className={clsx(
                'absolute top-0 left-0',
                isVertical ? 'w-full' : 'h-full'
              )}
              style={{
                transform: isVertical
                  ? `translateY(${virtualItem.start}px)`
                  : `translateX(${virtualItem.start}px)`
              }}
            >
              {isSkeleton
                ? onRenderSkeleton?.(index)
                : onRenderItem(items[index], index)
              }
            </div>
          )
        })}
    </div>
  )
}