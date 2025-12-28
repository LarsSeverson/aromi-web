import React from 'react'
import VoteOnAccordsPopover from './VoteOnAccordsPopover'
import VotedAccordsList from './VotedAccordsList'
import { useVotedAccordsContext } from '../contexts/VotedAccordsContext'
import { MAX_ACCORD_VOTES } from '../utils/constants'

const VoteOnAccordsSectionContent = () => {
  const { currentVotedSize } = useVotedAccordsContext()

  return (
    <div
      className='my-5 flex flex-col gap-10'
    >
      <div
        className='flex items-center justify-between'
      >
        <span
          className='md:text-md text-sm font-medium text-black/60'
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
