import React from 'react'
import { Accordion } from '@base-ui-components/react'
import VoteOnSectionHeader from './VoteOnSectionHeader'
import VoteOnSectionPanel from './VoteOnSectionPanel'

const VoteOnAccordsSection = () => {
  return (
    <Accordion.Item
      className=''
    >
      <VoteOnSectionHeader
        title='Which accords stand out most?'
      />

      <VoteOnSectionPanel>
        {}
      </VoteOnSectionPanel>
    </Accordion.Item>
  )
}

export default VoteOnAccordsSection
