import React from 'react'
import useFragranceAccords from '../hooks/useFragranceAccords'
import VoteOnAccordCard from './VoteOnAccordCard'
import VoteOnAccordCardLoading from './VoteOnAccordCardLoading'
import { VoteSortBy } from '@/generated/graphql'

export interface VoteOnAccordsListProps {
  fragranceId: number
}

const VoteOnAccordsList = (props: VoteOnAccordsListProps) => {
  const { fragranceId } = props

  const {
    data: accords,
    loading,
    loadingMore,
    loadMore
  } = useFragranceAccords(fragranceId, { fill: true, pagination: { first: 24, sort: { by: VoteSortBy.Votes } } })

  const skeletons = Array.from({ length: 24 })

  return (
    <div
      className='w-full flex flex-col h-full'
    >
      <div
        className='grid grid-cols-[repeat(auto-fit,minmax(60px,128px))] justify-center w-full'
      >
        {accords
          .map(accord => (
            <VoteOnAccordCard
              key={accord.id}
              accord={accord}
            />
          ))}

        {(loading || loadingMore) && skeletons
          .map((_, index) => (
            <VoteOnAccordCardLoading
              key={index}
            />
          ))}
      </div>

      <button
        className='mr-auto ml-2 mt-3 text-sinopia font-semibold text-md'
        onClick={loadMore}
      >
        Show more
      </button>
    </div>
  )
}

export default VoteOnAccordsList
