import type { FragranceDetailFragment } from '@/generated/graphql'
import React from 'react'
import { FragranceContext } from '../FragranceContext'
import { useAuthHelpers } from '@/features/auth'

export interface FragranceProviderProps {
  fragrance: FragranceDetailFragment
  children: React.ReactNode
}

export const FragranceProvider = (props: FragranceProviderProps) => {
  const { fragrance, children } = props

  const { checkAuthenticated } = useAuthHelpers()

  const [isVotingOnAccords, setIsVotingOnAccords] = React.useState(false)
  const [isVotingOnNotes, setIsVotingOnNotes] = React.useState(false)

  const onVoteOnAccords = (isVoting: boolean) => {
    const isAuthenticated = checkAuthenticated('You need to log in before voting')
    if (!isAuthenticated) return

    setIsVotingOnAccords(isVoting)
  }

  const onVoteOnNotes = (isVoting: boolean) => {
    const isAuthenticated = checkAuthenticated('You need to log in before voting')
    if (!isAuthenticated) return

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