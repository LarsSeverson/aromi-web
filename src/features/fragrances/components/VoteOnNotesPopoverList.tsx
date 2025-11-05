import type { AllNoteFragment } from '@/generated/graphql'
import { useVirtualizer } from '@tanstack/react-virtual'
import React from 'react'
import VoteOnNotesPopoverItemSkeleton from './VoteOnNotesPopoverItemSkeleton'
import VoteOnNotesPopoverItem from './VoteOnNotesPopoverItem'

const DEFAULT_SKELETON_COUNT = 6
const ESTIMATE_HEIGHT = 50
const OVERSCAN = 5
const LOAD_MORE_THRESHOLD = 200

export interface VoteOnNotesPopoverListProps {
  notes: AllNoteFragment[]
  isLoading?: boolean
  onLoadMore?: () => void
}

const VoteOnNotesPopoverList = (props: VoteOnNotesPopoverListProps) => {
  const { notes, isLoading = false, onLoadMore } = props

  const listRef = React.useRef<HTMLDivElement>(null)

  const skeletonCount = isLoading
    ? notes.length > 0 ? notes.length : DEFAULT_SKELETON_COUNT
    : 0
  const totalCount = notes.length + skeletonCount

  // eslint-disable-next-line react-hooks/incompatible-library
  const rowVirtualizer = useVirtualizer({
    count: totalCount,
    getScrollElement: () => listRef.current,
    estimateSize: () => ESTIMATE_HEIGHT,
    overscan: OVERSCAN
  })

  React.useEffect(
    () => {
      const el = listRef.current
      if (el == null) return

      const handleScoll = () => {
        const { scrollTop, scrollHeight, clientHeight } = el
        if (scrollHeight - scrollTop - clientHeight < LOAD_MORE_THRESHOLD) {
          onLoadMore?.()
        }
      }

      el.addEventListener('scroll', handleScoll)
      return () => { el.removeEventListener('scroll', handleScoll) }
    },
    [onLoadMore]
  )

  if (totalCount === 0) {
    return (
      <div
        className='text-md w-full px-1 py-4 text-center font-medium text-black/70'
      >
        No notes found.
      </div>
    )
  }

  return (
    <div
      ref={listRef}
      className='scrollbar-thin flex-1 overflow-y-auto px-1 py-4'
      style={{ scrollbarGutter: 'stable' }}
    >
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: '100%',
          position: 'relative'
        }}
      >
        {rowVirtualizer
          .getVirtualItems()
          .map(virtualRow => {
            const index = virtualRow.index
            const isSkeleton = index >= notes.length
            const note = notes[index]

            return (
              <div
                key={index}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: `${virtualRow.size}px`,
                  transform: `translateY(${virtualRow.start}px)`
                }}
              >
                {isSkeleton ?
                  (
                    <VoteOnNotesPopoverItemSkeleton />
                  )
                  :
                  (
                    <VoteOnNotesPopoverItem
                      note={note}
                    />
                  )
                }
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default VoteOnNotesPopoverList
