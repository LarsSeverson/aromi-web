import React from 'react'
import VoteOnAccordsPopover from './VoteOnAccordsPopover'
import VotedAccordsList from './VotedAccordsList'
import { useVotedAccordsContext } from '../contexts/VotedAccordsContext'
import { MAX_ACCORD_VOTES } from '../utils/constants'

const VoteOnAccordsSectionContent = () => {
  const { currentVotedSize } = useVotedAccordsContext()

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
          {currentVotedSize} / {MAX_ACCORD_VOTES}
        </span>

        <VoteOnAccordsPopover />
      </div>

      <VotedAccordsList />
    </div>
  )
}

export default VoteOnAccordsSectionContent
