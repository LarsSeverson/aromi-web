import type { AllAccordFragment } from '@/generated/graphql'
import React from 'react'

export interface VotedAccordsContextValue {
  votedAccords: AllAccordFragment[]
  votedAccordsMap: Map<string, AllAccordFragment>
  voteOnAccord: (accord: AllAccordFragment) => void
}

export const VotedAccordsContext = React.createContext<VotedAccordsContextValue | undefined>(undefined)

export const useVotedAccordsContext = () => {
  const context = React.useContext(VotedAccordsContext)
  if (context == null) {
    throw new Error('useVoteOnAccordsContext must be used within a VoteOnAccordsProvider')
  }

  return context
}
