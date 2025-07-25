import { Accordion } from '@base-ui-components/react'
import React from 'react'
import VoteOnSectionHeader from './VoteOnSectionHeader'
import { useBaseFragranceNotes } from '../hooks/useBaseFragranceNotes'
import { useBaseFillerFragranceNotes } from '../hooks/useBaseFillerNotes'
import VoteOnSectionPanel from './VoteOnSectionPanel'
import VoteOnNotesList from './VoteOnNotesList'

export interface VoteOnBaseNotesSectionProps {
  fragranceId: number
}

const VoteOnBaseNotesSection = (props: VoteOnBaseNotesSectionProps) => {
  const { fragranceId } = props

  const {
    data: notes,
    loading: notesLoading,
    loadingMore: notesLoadingMore,
    hasMore: hasMoreNotes,
    loadMore: loadMoreNotes
  } = useBaseFragranceNotes(fragranceId, { first: 24 })

  const {
    data: fillers,
    loading: fillersLoading,
    loadingMore: fillersLoadingMore,
    hasMore: hasMoreFillers,
    loadMore: loadMoreFillers
  } = useBaseFillerFragranceNotes(fragranceId, { first: 24 })

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
        title='Base'
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

export default VoteOnBaseNotesSection
