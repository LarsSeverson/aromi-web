import React from 'react'
import useFragranceAccords from '../hooks/useFragranceAccords'
import VoteOnAccordCard from './VoteOnAccordCard'
import VoteOnAccordCardLoading from './VoteOnAccordCardLoading'
import { useFillerFragranceAccords } from '../hooks/useFillerFragranceAccords'

export interface VoteOnAccordsListProps {
  fragranceId: number
}

const VoteOnAccordsList = (props: VoteOnAccordsListProps) => {
  const { fragranceId } = props

  const {
    data: accords,
    loading: accordsLoading,
    loadingMore: accordsLoadingMore,
    hasMore: hasMoreAccords,
    loadMore: loadMoreAccords
  } = useFragranceAccords(fragranceId, { first: 24 })

  const {
    data: fillers,
    loading: fillersLoading,
    loadingMore: fillersLoadingMore,
    hasMore: hasMoreFillers,
    loadMore: loadMoreFillers
  } = useFillerFragranceAccords(fragranceId, { first: 24 })

  const loading = accordsLoading || fillersLoading
  const loadingMore = accordsLoadingMore || fillersLoadingMore
  const hasMore = hasMoreAccords || hasMoreFillers

  const skeletons = Array.from({ length: 24 })

  const handleLoadMore = async () => {
    const fn = hasMoreAccords ? loadMoreAccords : loadMoreFillers

    await fn()
      .match(
        () => {},
        () => {}
      )
  }

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
              key={accord.accordId}
              accord={accord}
            />
          ))}

        {!hasMoreAccords && fillers
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

      {hasMore
        ? (
          <button
            className='mr-auto ml-2 mt-3 text-sinopia font-semibold text-md'
            onClick={() => { void handleLoadMore() }}
          >
            Show more
          </button>
          )
        : (
          <button
            className='mr-auto ml-2 mt-3 text-sinopia font-semibold text-md'
          >
            Show less
          </button>
          )}
    </div>
  )
}

export default VoteOnAccordsList
