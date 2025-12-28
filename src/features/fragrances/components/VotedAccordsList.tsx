import React from 'react'
import { useVotedAccordsContext } from '../contexts/VotedAccordsContext'
import VotedAccordsListItem from './VotedAccordsListItem'
import clsx from 'clsx'

const VotedAccordsList = () => {
  const { votedAccords, voteOnAccord } = useVotedAccordsContext()
  const isEmpty = votedAccords.length === 0

  if (isEmpty) {
    return (
      <div
        className='flex flex-col px-4'
      >
        <div
          className={clsx(
            'self-center text-center font-medium text-black/70',
            'text-sm md:text-base'
          )}
        >
          You haven't added any accords yet.
        </div>

        <div
          className={clsx(
            'mt-2 self-center text-center font-medium text-black/60',
            'max-w-70 text-xs sm:max-w-none md:text-sm'
          )}
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
