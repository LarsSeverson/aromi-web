import React from 'react'
import { Accordion } from '@base-ui-components/react'
import VoteOnSectionHeader from './VoteOnSectionHeader'
import VoteOnSectionPanel from './VoteOnSectionPanel'
import VoteOnAccordsList from './VoteOnAccordsList'

export interface VoteOnAccordsSectionProps {
  fragranceId: number
}

const VoteOnAccordsSection = (props: VoteOnAccordsSectionProps) => {
  const { fragranceId } = props

  return (
    <Accordion.Item
      className=''
    >
      <VoteOnSectionHeader
        title='Which accords stand out most?'
      />

      <VoteOnSectionPanel>
        <VoteOnAccordsList
          fragranceId={fragranceId}
        />
      </VoteOnSectionPanel>
    </Accordion.Item>
  )
}

export default VoteOnAccordsSection
