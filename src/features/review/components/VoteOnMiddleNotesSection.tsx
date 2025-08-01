import { Accordion } from '@base-ui-components/react'
import React from 'react'
import VoteOnSectionHeader from './VoteOnSectionHeader'
import { useMiddleFragranceNotes } from '../../fragrance/hooks/useMiddleFragranceNotes'
import { useMiddleFillerFragranceNotes } from '../../fragrance/hooks/useMiddleFillerFragranceNotes'
import VoteOnNotesList from './VoteOnNotesList'
import VoteOnSectionPanel from './VoteOnSectionPanel'

export interface VoteOnMiddleNotesSectionProps {
  fragranceId: number
}

const VoteOnMiddleNotesSection = (props: VoteOnMiddleNotesSectionProps) => {
  const { fragranceId } = props

  const {
    data: notes,
    loading: notesLoading,
    loadingMore: notesLoadingMore,
    hasMore: hasMoreNotes,
    loadMore: loadMoreNotes
  } = useMiddleFragranceNotes(fragranceId, { first: 24 })

  const {
    data: fillers,
    loading: fillersLoading,
    loadingMore: fillersLoadingMore,
    hasMore: hasMoreFillers,
    loadMore: loadMoreFillers
  } = useMiddleFillerFragranceNotes(fragranceId, { first: 24 })

  const handleLoadMore = async () => {
    const fn = hasMoreNotes ? loadMoreNotes : loadMoreFillers

    await fn()
      .match(
        () => {},
        () => {}
      )
  }

  return (
    <Accordion.Item>
      <VoteOnSectionHeader
        title='Middle'
      />

      <VoteOnSectionPanel>
        <VoteOnNotesList
          fragranceId={fragranceId}
          notes={notes}
          fillers={fillers}
          loading={notesLoading || fillersLoading}
          loadingMore={notesLoadingMore || fillersLoadingMore}
          hasMore={hasMoreNotes}
          hasMoreFillers={hasMoreFillers}
          loadMore={handleLoadMore}
        />
      </VoteOnSectionPanel>
    </Accordion.Item>
  )
}

export default VoteOnMiddleNotesSection
