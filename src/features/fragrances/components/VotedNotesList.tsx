import React from 'react'
import { useVotedNotesContext } from '../contexts/VotedNotesContext'
import VotedNotesListItem from './VotedNotesListItem'
import clsx from 'clsx'

const VotedNotesList = () => {
  const { layer, votedNotes, voteOnNote } = useVotedNotesContext()
  const isEmpty = votedNotes.length === 0

  if (isEmpty) {
    return (
      <div
        className='flex flex-col px-4'
      >
        <div
          className={clsx(
            'self-center text-center font-medium text-black/70',
            'text-sm md:text-base'
          )}
        >
          You haven't added any {layer.toLowerCase()} notes yet.
        </div>

        <div
          className={clsx(
            'mt-2 self-center text-center font-medium text-black/60',
            'max-w-70 text-xs sm:max-w-none md:text-sm'
          )}
        >
          Search for {layer.toLowerCase()} notes and select the ones that stand out to you the most
        </div>
      </div>
    )
  }

  return (
    <div
      className='flex flex-wrap gap-5'
    >
      {votedNotes.map(
        note => (
          <VotedNotesListItem
            key={note.id}
            note={note}
            onClick={voteOnNote.bind(null, note)}
          />
        ))
      }
    </div>
  )
}

export default VotedNotesList
