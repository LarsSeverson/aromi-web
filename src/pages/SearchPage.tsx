import { useFragrances } from '@/features/fragrances'
import { Colors } from '@/styles/Colors'
import { Link } from '@tanstack/react-router'
import clsx from 'clsx'
import React from 'react'

export const SearchPage = () => {
  const {
    fragrances,
    isLoading
  } = useFragrances()

  const [index, setIndex] = React.useState(0)
  const [dragX, setDragX] = React.useState(0)
  const [isDragging, setIsDragging] = React.useState(false)

  const touchStartX = React.useRef<number | null>(null)
  const intervalId = React.useRef<number | null>(null)

  const maxDots = 5
  const half = Math.floor(maxDots / 2)

  let start = Math.max(0, index - half)
  let end = start + maxDots

  if (end > fragrances.length) {
    end = fragrances.length
    start = Math.max(0, end - maxDots)
  }

  const visibleIndexes = fragrances
    .map((_, i) => i)
    .slice(start, end)

  const stopAutoplay = () => {
    if (intervalId.current != null) {
      clearInterval(intervalId.current)
      intervalId.current = null
    }
  }

  const startAutoplay = React.useCallback(() => {
    stopAutoplay()

    intervalId.current = window.setInterval(
      () => {
        setIndex(
          prev => (prev + 1) % fragrances.length
        )
      },
      5000
    )
  }, [fragrances.length])

  React.useEffect(
    () => {
      if (fragrances.length === 0) return

      startAutoplay()

      return () => {
        stopAutoplay()
      }
    },
    [fragrances.length, startAutoplay]
  )

  const handleOnTouchStart = (
    e: React.TouchEvent<HTMLDivElement>
  ) => {
    setIsDragging(true)
    stopAutoplay()

    touchStartX.current = e.touches[0].clientX
  }

  const handleOnTouchMove = (
    e: React.TouchEvent<HTMLDivElement>
  ) => {
    if (!isDragging) return
    if (touchStartX.current == null) return

    setDragX(
      e.touches[0].clientX - touchStartX.current
    )
  }

  const handleOnTouchEnd = (
    e: React.TouchEvent<HTMLDivElement>
  ) => {
    if (touchStartX.current == null) return

    const delta = e.changedTouches[0].clientX - touchStartX.current

    touchStartX.current = null
    setIsDragging(false)
    setDragX(0)

    if (Math.abs(delta) >= 40) {
      setIndex(
        prev => {
          if (delta < 0) {
            return Math.min(prev + 1, fragrances.length - 1)
          }

          return Math.max(prev - 1, 0)
        }
      )
    }

    startAutoplay()
  }

  if (isLoading) return null
  if (fragrances.length === 0) return null

  return (
    <div
      className='relative h-full w-full overflow-hidden md:h-105'
      onTouchStart={handleOnTouchStart}
      onTouchMove={handleOnTouchMove}
      onTouchEnd={handleOnTouchEnd}
    >
      <div
        className={clsx(
          'flex h-full w-full',
          !isDragging && 'transition-transform duration-500 ease-out'
        )}
        style={{
          transform: `translateX(calc(-${index * 100}% + ${dragX}px))`
        }}
      >
        {fragrances.map(
          fragrance => (
            <Link
              key={fragrance.id}
              to='/fragrances/$id'
              params={{ id: fragrance.id }}
              className='relative h-full w-full shrink-0 overflow-hidden'
            >
              <div
                className='absolute inset-0 scale-110 blur-3xl'
                style={{
                  backgroundColor: fragrance.thumbnail?.primaryColor ?? Colors.sinopia
                }}
              />

              <div
                className='absolute inset-0 bg-black/50'
              />

              <div
                className='relative flex h-full w-full items-center justify-center p-20'
              >
                <img
                  src={fragrance.thumbnail?.url ?? undefined}
                  className='max-h-full max-w-full rounded-2xl object-cover brightness-90'
                />
              </div>

              <div
                className='absolute inset-0 flex flex-col items-center justify-center pt-110'
              >
                <h1
                  className='text-2xl font-bold text-white'
                >
                  {fragrance.name}
                </h1>

                <p
                  className='text-sm text-white'
                >
                  {fragrance.brand.name}
                </p>
              </div>
            </Link>
          )
        )}
      </div>

      <div
        className='absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2'
      >
        {visibleIndexes.map(
          i => {
            const distance = Math.abs(i - index)
            const opacity = Math.max(
              0.25,
              1 - distance * 0.35
            )

            return (
              <div
                key={i}
                className={clsx(
                  'h-2 w-2 rounded-full bg-white transition-opacity'
                )}
                style={{
                  opacity
                }}
              />
            )
          }
        )}
      </div>
    </div>
  )
}
