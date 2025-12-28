import type { FragranceDetailFragment } from '@/generated/graphql'
import React from 'react'
import { FragranceContext } from '../FragranceContext'

export interface FragranceProviderProps {
  fragrance: FragranceDetailFragment
  children: React.ReactNode
}

export const FragranceProvider = (props: FragranceProviderProps) => {
  const { fragrance, children } = props

  const [isVotingOnAccords, setIsVotingOnAccords] = React.useState(false)
  const [isVotingOnNotes, setIsVotingOnNotes] = React.useState(false)

  const onVoteOnAccords = (isVoting: boolean) => {
    setIsVotingOnAccords(isVoting)
  }

  const onVoteOnNotes = (isVoting: boolean) => {
    setIsVotingOnNotes(isVoting)
  }

  return (
    <FragranceContext.Provider
      value={{
        fragrance,
        isVotingOnAccords,
        isVotingOnNotes,
        onVoteOnAccords,
        onVoteOnNotes
      }}
    >
      {children}
    </FragranceContext.Provider>
  )
}