import React from 'react'
import { Accordion } from '@base-ui-components/react'
import VoteOnSectionHeader from './VoteOnSectionHeader'
import VoteOnSectionPanel from './VoteOnSectionPanel'
import { VotedAccordsProvider } from '../contexts/providers/VotedAccordsProvider'
import VoteOnAccordsSectionContent from './VoteOnAccordsSectionContent'

export interface VoteOnAccordsSectionProps {
  fragranceId: string
}

const VoteOnAccordsSection = (props: VoteOnAccordsSectionProps) => {
  const { fragranceId } = props

  return (
    <Accordion.Item
      value='accords'
    >
      <VoteOnSectionHeader
        title='Which accords stand out most?'
      />

      <VoteOnSectionPanel>
        <VotedAccordsProvider
          fragranceId={fragranceId}
        >
          <VoteOnAccordsSectionContent />
        </VotedAccordsProvider>
      </VoteOnSectionPanel>
    </Accordion.Item>
  )
}

export default VoteOnAccordsSection
