import React from 'react'
import { Accordion } from '@base-ui-components/react'
import VoteOnSectionHeader from './VoteOnSectionHeader'
import { useTopFragranceNotes } from '../../fragrance/hooks/useTopFragranceNotes'
import VoteOnNotesList from './VoteOnNotesList'
import { useTopFillerFragranceNotes } from '../../fragrance/hooks/useTopFillerFragranceNotes'
import VoteOnSectionPanel from './VoteOnSectionPanel'

export interface VoteOnTopNotesSectionProps {
  fragranceId: number
}

const VoteOnTopNotesSection = (props: VoteOnTopNotesSectionProps) => {
  const { fragranceId } = props

  const {
    data: notes,
    loading: notesLoading,
    loadingMore: notesLoadingMore,
    hasMore: hasMoreNotes,
    loadMore: loadMoreNotes
  } = useTopFragranceNotes(fragranceId, { first: 24 })

  const {
    data: fillers,
    loading: fillersLoading,
    loadingMore: fillersLoadingMore,
    hasMore: hasMoreFillers,
    loadMore: loadMoreFillers
  } = useTopFillerFragranceNotes(fragranceId, { first: 24 })

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
        title='Top'
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

export default VoteOnTopNotesSection
