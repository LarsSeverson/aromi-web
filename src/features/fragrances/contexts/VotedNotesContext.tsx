import type { AllNoteFragment, NoteLayer } from '@/generated/graphql'
import type { Nullable } from '@/utils/util'
import React from 'react'

export interface VotedNotesContextValue {
  layer: NoteLayer
  votedNotes: AllNoteFragment[]
  votedNotesMap: Map<string, AllNoteFragment>
  currentVotedSize: number
  voteOnNote: (note: AllNoteFragment) => void
}

export const VotedNotesContext = React.createContext<Nullable<VotedNotesContextValue>>(undefined)

export const useVotedNotesContext = () => {
  const context = React.useContext(VotedNotesContext)

  if (context == null) {
    throw new Error('useVotedNotesContext must be used within a VotedNotesProvider')
  }

  return context
}