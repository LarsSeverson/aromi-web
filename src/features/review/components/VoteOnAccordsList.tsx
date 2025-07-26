import React from 'react'
import useFragranceAccords from '../../fragrance/hooks/useFragranceAccords'
import VoteOnAccordCardLoading from './VoteOnAccordCardLoading'
import { useFillerFragranceAccords } from '../../fragrance/hooks/useFillerFragranceAccords'
import VoteOnAccordWrapper from './VoteOnAccordWrapper'

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

  const skeletons = Array.from({ length: 12 })

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
            <VoteOnAccordWrapper
              key={accord.accordId}
              fragranceId={fragranceId}
              accord={accord}
            />
          ))}

        {!hasMoreAccords && fillers
          .map(accord => (
            <VoteOnAccordWrapper
              key={accord.accordId}
              fragranceId={fragranceId}
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
          <span
            className='mr-auto ml-2 mt-3 text-sinopia font-semibold text-md opacity-50'
          >
            End of accords
          </span>
          )}
    </div>
  )
}

export default VoteOnAccordsList
