import React from 'react'
import { useMyFragranceAccords } from '../../hooks/useMyFragranceAccords'
import type { AllAccordFragment } from '@/generated/graphql'
import { VotedAccordsContext } from '../VotedAccordsContext'
import { VOTE_TYPES, type VoteType } from '@/utils/util'
import { useVoteOnFragranceAccord } from '../../hooks/useVoteOnFragranceAccord'
import { useDebounces } from '@/hooks/useDebounces'
import { useToastMessage } from '@/hooks/useToastMessage'
import { MAX_ACCORD_VOTES } from '../../utils/constants'
import { useAuthHelpers } from '@/features/auth/hooks/useAuthHelpers'

export interface VotedAccordsProviderProps {
  fragranceId: string
  children: React.ReactNode
}

export const VotedAccordsProvider = (props: VotedAccordsProviderProps) => {
  const {
    fragranceId,
    children
  } = props

  const { run: debouncedVote } = useDebounces(400, [fragranceId])
  const { checkAuthenticated } = useAuthHelpers()
  const { toastError } = useToastMessage()

  const { vote } = useVoteOnFragranceAccord()
  const { accords, isLoading } = useMyFragranceAccords(fragranceId)

  const lastFragranceId = React.useRef<string | null>(null)

  const [votedAccords, setVotedAccords] = React.useState<AllAccordFragment[]>([])
  const currentVotedSize = votedAccords.length

  const votedAccordsMap = React.useMemo(
    () => new Map(votedAccords.map((a) => [a.id, a])),
    [votedAccords]
  )

  const handleVoteOnAccord = async (accord: AllAccordFragment, userVote: VoteType) => {
    const res = await vote({
      fragranceId,
      accordId: accord.id,
      vote: userVote
    })

    if (res.isErr()) {
      toastError(res.error.message)
      setVotedAccords(accords)
    }
  }

  const voteOnAccord = (accord: AllAccordFragment) => {
    if (!checkAuthenticated('Log in to vote on accords')) return

    const exists = votedAccordsMap.has(accord.id)

    if (!exists && currentVotedSize >= MAX_ACCORD_VOTES) return

    const nextVote = exists ? VOTE_TYPES.NOVOTE : VOTE_TYPES.UPVOTE

    setVotedAccords((prev) => {
      if (exists) return prev.filter((a) => a.id !== accord.id)
      return [...prev, accord]
    })

    debouncedVote(accord.id, () => {
      handleVoteOnAccord(accord, nextVote)
    })
  }

  React.useEffect(
    () => {
      if (!isLoading && lastFragranceId.current !== fragranceId) {
        setVotedAccords(accords)
        lastFragranceId.current = fragranceId
      }
    },
    [isLoading, accords, fragranceId]
  )

  return (
    <VotedAccordsContext.Provider
      value={{
        votedAccords,
        votedAccordsMap,
        currentVotedSize,
        voteOnAccord
      }}
    >
      {children}
    </VotedAccordsContext.Provider>
  )
}