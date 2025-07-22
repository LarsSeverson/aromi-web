import React from 'react'
import { Accordion } from '@base-ui-components/react'
import VoteOnSectionHeader from './VoteOnSectionHeader'
import VoteOnSectionPanel from './VoteOnSectionPanel'
import VoteOnTopNotesSection from './VoteOnTopNotesSection'
import VoteOnMiddleNotesSection from './VoteOnMiddleNotesSection'
import VoteOnBaseNotesSection from './VoteOnBaseNotesSection'

export interface VoteOnNotesSectionProps {
  fragranceId: number
}

const VoteOnNotesSection = (props: VoteOnNotesSectionProps) => {
  const { fragranceId } = props

  return (
    <Accordion.Item>
      <VoteOnSectionHeader
        title='How do the notes develop?'
      />

      <VoteOnSectionPanel>
        <div
          className='w-full px-4'
        >
          <Accordion.Root
            className='flex flex-col w-full'
          >
            <VoteOnTopNotesSection
              fragranceId={fragranceId}
            />

            <VoteOnMiddleNotesSection
              fragranceId={fragranceId}
            />

            <VoteOnBaseNotesSection
              fragranceId={fragranceId}
            />
          </Accordion.Root>
        </div>
      </VoteOnSectionPanel>
    </Accordion.Item>
  )
}

export default VoteOnNotesSection
