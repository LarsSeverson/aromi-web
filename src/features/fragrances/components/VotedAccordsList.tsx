import React from 'react'
import { useVotedAccordsContext } from '../contexts/VotedAccordsContext'

const VotedAccordsList = () => {
  const { votedAccords } = useVotedAccordsContext()
  const isEmpty = votedAccords.length === 0

  if (isEmpty) {
    return (
      <div
        className='self-center text-md font-medium text-black/70'
      >
        You haven't voted on any accords yet.
      </div>
    )
  }

  return (
    <div>
      {votedAccords.map(accord => (
        <div
          key={accord.id}
        >
          {accord.name}
        </div>
      ))}
    </div>
  )
}

export default VotedAccordsList
