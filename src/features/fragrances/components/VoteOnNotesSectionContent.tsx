import React from 'react'
import { useVotedNotesContext } from '../contexts/VotedNotesContext'
import { MAX_NOTE_VOTES, NOTE_LAYER_OPTIONS } from '../utils/constants'
import type { NoteLayer } from '@/generated/graphql'
import VotedNotesList from './VotedNotesList'
import SelectInput from '@/components/SelectInput'
import VoteOnNotesPopover from './VoteOnNotesPopover'
import { Field } from '@base-ui/react'

export interface VoteOnNotesSectionContentProps {
  onLayerChange?: (layer: NoteLayer) => void
}

const VoteOnNotesSectionContent = (props: VoteOnNotesSectionContentProps) => {
  const { onLayerChange } = props

  const { layer, currentVotedSize } = useVotedNotesContext()

  return (
    <div
      className='mb-5 flex flex-col gap-10'
    >
      <div
        className='flex items-center justify-between'
      >
        <span
          className='md:text-md text-xs font-medium text-black/60'
        >
          {currentVotedSize} / {MAX_NOTE_VOTES}
        </span>

        <div
          className='flex gap-3'
        >
          <VoteOnNotesPopover />

          <Field.Root
            name='note-layer'
          >
            <SelectInput
              items={NOTE_LAYER_OPTIONS}
              value={layer}
              onValueChange={onLayerChange}
            />
          </Field.Root>
        </div>
      </div>

      <VotedNotesList />
    </div>
  )
}

export default VoteOnNotesSectionContent
