import React from 'react'
import { useVotedNotesContext } from '../contexts/VotedNotesContext'
import { MAX_NOTE_VOTES, NOTE_LAYER_OPTIONS } from '../utils/constants'
import type { NoteLayer } from '@/generated/graphql'
import VotedNotesList from './VotedNotesList'
import SelectInput from '@/components/SelectInput'
import VoteOnNotesPopover from './VoteOnNotesPopover'

export interface VoteOnNotesSectionContentProps {
  onLayerChange?: (layer: NoteLayer) => void
}

const VoteOnNotesSectionContent = (props: VoteOnNotesSectionContentProps) => {
  const { onLayerChange } = props

  const { layer, currentVotedSize } = useVotedNotesContext()

  return (
    <div
      className='flex flex-col gap-10'
    >
      <div
        className='flex justify-between'
      >
        <span
          className='text-md font-medium text-black/60'
        >
          {currentVotedSize} / {MAX_NOTE_VOTES}
        </span>

        <div
          className='flex gap-3'
        >
          <VoteOnNotesPopover />

          <SelectInput
            items={NOTE_LAYER_OPTIONS}
            defaultValue={layer}
            onValueChange={onLayerChange}
          />
        </div>
      </div>

      <VotedNotesList />
    </div>
  )
}

export default VoteOnNotesSectionContent
