import React, { useCallback, useEffect, useMemo } from 'react'
import { type IFragranceNoteSummary } from '../../fragrance/types'
import { useVoteOnNote } from '../../fragrance/hooks/useVoteOnNote'
import { debounce } from 'lodash'
import VoteOnNoteCard from './VoteOnNoteCard'

export interface VoteOnNoteWrapperProps {
  fragranceId: number
  note: IFragranceNoteSummary
}

const VoteOnNoteWrapper = (props: VoteOnNoteWrapperProps) => {
  const { fragranceId, note } = props

  const { voteOnNote } = useVoteOnNote()

  const handleVoteOnNote = useCallback(async (vote: boolean | null) => {
    const noteId = note.noteId
    const layer = note.layer

    await voteOnNote({
      fragranceId,
      noteId,
      layer,
      vote
    })
      .match(
        () => {},
        () => {}
      )
  }, [fragranceId, note.noteId, note.layer, voteOnNote])

  const debouncedHandleVoteOnNote = useMemo(() => debounce((vote: boolean | null) => {
    void handleVoteOnNote(vote)
  }, 300), [handleVoteOnNote])

  useEffect(() => {
    return () => {
      debouncedHandleVoteOnNote.cancel()
    }
  }, [debouncedHandleVoteOnNote])

  return (
    <VoteOnNoteCard
      note={note}
      onSelected={debouncedHandleVoteOnNote}
    />
  )
}

export default VoteOnNoteWrapper
