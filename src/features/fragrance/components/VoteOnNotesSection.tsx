import React from 'react'
import { Accordion } from '@base-ui-components/react'
import VoteOnSectionHeader from './VoteOnSectionHeader'
import VoteOnSectionPanel from './VoteOnSectionPanel'

const VoteOnNotesSection = () => {
  return (
    <Accordion.Item>
      <VoteOnSectionHeader
        title='How do the notes develop?'
      />

      <VoteOnSectionPanel>
        {}
      </VoteOnSectionPanel>
    </Accordion.Item>
  )
}

export default VoteOnNotesSection
