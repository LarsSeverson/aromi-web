import React from 'react'
import { useVotedNotesContext } from '../contexts/VotedNotesContext'
import { MAX_NOTE_VOTES } from '../utils/constants'
import type { NoteLayer } from '@/generated/graphql'
import VotedNotesList from './VotedNotesList'

export interface VoteOnNotesSectionContentProps {
  onLayerChange?: (layer: NoteLayer) => void
}

const VoteOnNotesSectionContent = (props: VoteOnNotesSectionContentProps) => {
  const { currentVotedSize } = useVotedNotesContext()

  return (
    <div
      className='flex flex-col gap-10'
    >
      <div
        className='flex justify-between'
      >
        <span
          className='font-medium text-md text-black/60'
        >
          {currentVotedSize} / {MAX_NOTE_VOTES}
        </span>

        <div>

        </div>
        {/* <VoteOnAccordsPopover /> */}
      </div>

      <VotedNotesList />
    </div>
  )
}

export default VoteOnNotesSectionContent
