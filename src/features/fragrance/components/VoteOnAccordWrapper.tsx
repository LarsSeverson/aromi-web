import React, { useCallback, useEffect, useMemo } from 'react'
import { type IFragranceAccordSummary } from '../types'
import VoteOnAccordCard from './VoteOnAccordCard'
import { useVoteOnAccord } from '../hooks/useVoteOnAccord'
import { debounce } from 'lodash'

export interface VoteOnAccordWrapperProps {
  fragranceId: number
  accord: IFragranceAccordSummary
}

const VoteOnAccordWrapper = (props: VoteOnAccordWrapperProps) => {
  const { fragranceId, accord } = props

  const { voteOnAccord } = useVoteOnAccord()

  const handleVoteOnAccord = useCallback(async (vote: boolean | null) => {
    const accordId = accord.accordId

    await voteOnAccord({
      fragranceId,
      accordId,
      vote
    })
      .match(
        () => {},
        () => {}
      )
  }, [fragranceId, accord.accordId, voteOnAccord])

  const debouncedHandleVoteOnAccord = useMemo(() => debounce((vote: boolean | null) => {
    void handleVoteOnAccord(vote)
  }, 300), [handleVoteOnAccord])

  useEffect(() => {
    return () => { debouncedHandleVoteOnAccord.cancel() }
  }, [debouncedHandleVoteOnAccord])

  return (
    <VoteOnAccordCard
      accord={accord}
      onSelected={debouncedHandleVoteOnAccord}
    />
  )
}

export default VoteOnAccordWrapper
