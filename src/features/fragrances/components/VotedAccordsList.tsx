import React from 'react'
import { useVotedAccordsContext } from '../contexts/VotedAccordsContext'
import VotedAccordsListItem from './VotedAccordsListItem'

const VotedAccordsList = () => {
  const { votedAccords, voteOnAccord } = useVotedAccordsContext()
  const isEmpty = votedAccords.length === 0

  if (isEmpty) {
    return (
      <div
        className='flex flex-col'
      >
        <div
          className='self-center font-medium text-black/70'
        >
          You haven't added any accords yet.
        </div>

        <div
          className='self-center text-sm font-medium text-black/60 mt-1'
        >
          Search for accords and select the ones that stand out to you the most
        </div>
      </div>
    )
  }

  return (
    <div
      className='flex flex-wrap gap-5'
    >
      {votedAccords.map(
        accord => (
          <VotedAccordsListItem
            key={accord.id}
            accord={accord}
            onClick={voteOnAccord.bind(null, accord)}
          />
        ))
      }
    </div>
  )
}

export default VotedAccordsList
