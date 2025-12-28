import type { FragranceDetailFragment } from '@/generated/graphql'
import React from 'react'

export interface FragranceContextValue {
  fragrance: FragranceDetailFragment

  isVotingOnAccords: boolean
  isVotingOnNotes: boolean

  onVoteOnAccords: (isVoting: boolean) => void
  onVoteOnNotes: (isVoting: boolean) => void
}

export const FragranceContext = React.createContext<FragranceContextValue | undefined>(undefined)

export const useFragranceContext = () => {
  const context = React.useContext(FragranceContext)
  if (context == null) {
    throw new Error('useFragranceContext must be used within a FragranceProvider')
  }

  return context
}