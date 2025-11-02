import React from 'react'
import { useMyFragranceAccords } from '../../hooks/useMyFragranceAccords'
import type { AllAccordFragment } from '@/generated/graphql'
import { VotedAccordsContext } from '../VotedAccordsContext'

export interface VotedAccordsProviderProps {
  fragranceId: string
  children: React.ReactNode
}

export const VotedAccordsProvider = (props: VotedAccordsProviderProps) => {
  const { fragranceId, children } = props

  const { accords, isLoading } = useMyFragranceAccords(fragranceId)

  const [votedAccords, setVotedAccords] = React.useState<AllAccordFragment[]>([])

  const votedAccordsMap = React.useMemo(
    () => new Map(votedAccords.map(accord => [accord.id, accord])),
    [votedAccords]
  )

  const voteOnAccord = (accord: AllAccordFragment) => {
    setVotedAccords(prev => {
      const alreadyVoted = prev.find(item => item.id === accord.id)
      if (alreadyVoted == null) return prev.concat(accord)
      return prev.filter(item => item.id !== accord.id)
    })
  }

  React.useEffect(
    () => {
      if (!isLoading) {
        setVotedAccords(accords)
      }
    },
    [isLoading, accords]
  )

  return (
    <VotedAccordsContext.Provider
      value={{
        votedAccords,
        votedAccordsMap,
        voteOnAccord
      }}
    >
      {children}
    </VotedAccordsContext.Provider>
  )
}