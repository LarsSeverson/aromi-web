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
  const { fragranceId, children } = props

  const { checkAuthenticated } = useAuthHelpers()
  const { toastError } = useToastMessage()

  const { vote } = useVoteOnFragranceAccord()
  const { accords, isLoading } = useMyFragranceAccords(fragranceId)

  const votedAccordsMapInternal = React.useRef(new Map<string, AllAccordFragment>())

  const [currentVotedSize, setCurrentVotedSize] = React.useState(0)
  const [votedAccords, setVotedAccords] = React.useState<AllAccordFragment[]>([])

  const votedAccordsMap = React.useMemo(
    () => new Map(votedAccords.map(accord => [accord.id, accord])),
    [votedAccords]
  )

  const { run: debouncedVote } = useDebounces(400, [fragranceId])

  const handleVoteOnAccord = async (accord: AllAccordFragment, userVote: VoteType) => {
    const accordId = accord.id

    const voteRes = await vote({ fragranceId, accordId, vote: userVote })

    if (voteRes.isErr()) {
      const error = voteRes.error
      toastError(error.message)
    }
  }

  const voteOnAccord = (accord: AllAccordFragment) => {
    if (!checkAuthenticated('You need to log in before voting on accords')) return

    const accordId = accord.id
    const currentSize = votedAccordsMapInternal.current.size
    const shouldAdd = !votedAccordsMapInternal.current.has(accordId)
    const userVote = shouldAdd ? VOTE_TYPES.UPVOTE : VOTE_TYPES.NOVOTE

    if (shouldAdd && currentSize >= MAX_ACCORD_VOTES) return

    debouncedVote(accordId, () => {
      handleVoteOnAccord(accord, userVote)
    })

    if (shouldAdd) votedAccordsMapInternal.current.set(accordId, accord)
    else votedAccordsMapInternal.current.delete(accordId)

    setVotedAccords(Array.from(votedAccordsMapInternal.current.values()))
    setCurrentVotedSize(votedAccordsMapInternal.current.size)
  }

  React.useEffect(
    () => {
      if (!isLoading) {
        votedAccordsMapInternal.current = new Map(accords.map(accord => [accord.id, accord]))
        setVotedAccords(accords)
        setCurrentVotedSize(accords.length)
      }
    },
    [isLoading, accords]
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