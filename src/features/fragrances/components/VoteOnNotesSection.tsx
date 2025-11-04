import React from 'react'
import { Accordion } from '@base-ui-components/react'
import VoteOnSectionHeader from './VoteOnSectionHeader'
import VoteOnSectionPanel from './VoteOnSectionPanel'
import { VotedNotesProvider } from '../contexts/providers/VotedNotesProvider'
import { NoteLayer } from '@/generated/graphql'
import VoteOnNotesSectionContent from './VoteOnNotesSectionContent'

export interface VoteOnNotesSectionProps {
  fragranceId: string
}

const VoteOnNotesSection = (props: VoteOnNotesSectionProps) => {
  const { fragranceId } = props

  const [layer, setLayer] = React.useState<NoteLayer>(NoteLayer.Top)

  return (
    <Accordion.Item
      value='notes'
    >
      <VoteOnSectionHeader
        title='How do the notes develop?'
      />

      <VoteOnSectionPanel>
        <VotedNotesProvider
          layer={layer}
          fragranceId={fragranceId}
        >
          <VoteOnNotesSectionContent
            onLayerChange={setLayer}
          />
        </VotedNotesProvider>
      </VoteOnSectionPanel>
    </Accordion.Item>
  )
}

export default VoteOnNotesSection
