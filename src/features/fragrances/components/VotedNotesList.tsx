import React from 'react'
import { useVotedNotesContext } from '../contexts/VotedNotesContext'
import VotedNotesListItem from './VotedNotesListItem'

const VotedNotesList = () => {
  const { layer, votedNotes, voteOnNote } = useVotedNotesContext()
  const isEmpty = votedNotes.length === 0

  if (isEmpty) {
    return (
      <div
        className='flex flex-col'
      >
        <div
          className='self-center font-medium text-black/70'
        >
          You haven't added any {layer.toLowerCase()} notes yet.
        </div>

        <div
          className='self-center text-sm font-medium text-black/60 mt-1'
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
