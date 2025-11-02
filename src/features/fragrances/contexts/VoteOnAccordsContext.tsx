import type { AllFragranceAccordFragment } from '@/generated/graphql'
import React from 'react'

export interface VoteOnAccordsContextValue {
  accords: AllFragranceAccordFragment[]
  voteOnAccord: (accordId: number) => void
}

export interface VoteOnAccordsProviderProps {
  fragranceId: string
  children: React.ReactNode
}

export const VoteOnAccordsContext = React.createContext<VoteOnAccordsContextValue | undefined>(undefined)

export const useVoteOnAccordsContext = () => {
  const context = React.useContext(VoteOnAccordsContext)
  if (context == null) {
    throw new Error('useVoteOnAccordsContext must be used within a VoteOnAccordsProvider')
  }

  return context
}

export const VoteOnAccordsProvider = (props: VoteOnAccordsProviderProps) => { }