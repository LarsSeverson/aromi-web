import React from 'react'
import { type IFragranceNoteSummary } from '../types'
import VoteOnNoteCardLoading from './VoteOnNoteCardLoading'
import VoteOnNoteWrapper from './VoteOnNoteWrapper'

export interface VoteOnNotesListProps {
  fragranceId: number

  notes: IFragranceNoteSummary[]
  fillers: IFragranceNoteSummary[]

  loading: boolean
  loadingMore: boolean
  hasMore: boolean
  hasMoreFillers: boolean

  loadMore: () => void | Promise<void>
}

const VoteOnNotesList = (props: VoteOnNotesListProps) => {
  const {
    fragranceId,

    notes,
    fillers,

    loading,
    loadingMore,
    hasMore,
    hasMoreFillers,

    loadMore
  } = props

  const skeletons = Array.from({ length: 12 })

  return (
    <div
      className='w-full flex flex-col h-full'
    >
      <div
        className='grid grid-cols-[repeat(auto-fit,minmax(60px,128px))] justify-center w-full'
      >
        {notes
          .map(note => (
            <VoteOnNoteWrapper
              key={note.noteId}
              fragranceId={fragranceId}
              note={note}
            />
          ))}

        {!hasMore && fillers
          .map(note => (
            <VoteOnNoteWrapper
              key={note.id}
              fragranceId={fragranceId}
              note={note}
            />
          ))}

        {(loading || loadingMore) && skeletons
          .map((_, index) => (
            <VoteOnNoteCardLoading
              key={index}
            />
          ))}
      </div>

      {hasMore || hasMoreFillers
        ? (
          <button
            className='mr-auto ml-2 mt-3 text-sinopia font-semibold text-md'
            onClick={() => { void loadMore() }}
          >
            Show more
          </button>
          )
        : (
          <span
            className='mr-auto ml-2 mt-3 text-sinopia font-semibold text-md opacity-50'
          >
            End of notes
          </span>
          )}
    </div>
  )
}

export default VoteOnNotesList
