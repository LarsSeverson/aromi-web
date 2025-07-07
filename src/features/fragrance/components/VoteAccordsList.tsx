import React from 'react'
import AccordVoteCard, { type CardAccordPreview } from './AccordVoteCard'

export interface VoteAccordsListProps {
  accords: CardAccordPreview[]
}

const VoteAccordsList = (props: VoteAccordsListProps) => {
  const { accords } = props

  return (
    <div
      className='flex w-full'
    >
      <div className='w-full grid grid-cols-[repeat(auto-fit,minmax(60px,128px))] justify-center'>
        {accords
          .map(accord => (
            <AccordVoteCard
              key={accord.id}
              accord={accord}
            />
          ))}
      </div>
    </div>
  )
}

export default VoteAccordsList
