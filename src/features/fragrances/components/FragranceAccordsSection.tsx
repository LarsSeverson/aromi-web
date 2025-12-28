import PageCategory from '@/components/PageCategory'
import React from 'react'
import { useFragranceAccords } from '../hooks/useFragranceAccords'
import AccordsLadder from './AccordsLadder'
import { VotedAccordsProvider } from '../contexts/providers/VotedAccordsProvider'
import VoteOnAccordsSectionContent from './VoteOnAccordsSectionContent'
import Divider from '@/components/Divider'
import { useFragranceContext } from '../contexts/FragranceContext'

export interface FragranceAccordsSectionProps {
  previewOnly?: boolean
}

const FragranceAccordsSection = (props: FragranceAccordsSectionProps) => {
  const { fragrance, isVotingOnAccords, onVoteOnAccords } = useFragranceContext()

  const {
    previewOnly = false
  } = props

  const { accords } = useFragranceAccords(fragrance.id, { first: 10 })

  const utilRef = React.useRef<HTMLDivElement>(null)
  const isInVoteMode = isVotingOnAccords && !previewOnly
  const title = isInVoteMode ? 'Which accords stand out most?' : 'Accords'

  React.useEffect(
    () => {
      if (!isVotingOnAccords) return

      utilRef.current?.scrollIntoView({ block: 'center' })
    },
    [isVotingOnAccords]
  )

  return (
    <PageCategory
      title={title}
      showButton={!isVotingOnAccords}
      isEmpty={accords.length === 0}
      emptyTitle='No accords yet'
      emptyButtonText='Vote on Accords'
      onButtonClick={onVoteOnAccords?.bind(null, true)}
    >
      {isInVoteMode ?
        (
          <VotedAccordsProvider
            fragranceId={fragrance.id}
          >
            <VoteOnAccordsSectionContent />
          </VotedAccordsProvider>
        )
        :
        (
          <AccordsLadder
            accords={accords}
            maxVote={accords.at(0)?.votes.score ?? 0}
          />
        )
      }

      {isInVoteMode && (
        <>
          <div
            ref={utilRef}
            className='flex w-full items-center justify-center self-center'
          >
            <button
              className='bg-sinopia md:text-md cursor-pointer rounded-3xl p-2 px-5 text-sm text-white hover:brightness-95 md:rounded-xl md:px-6'
              onClick={onVoteOnAccords?.bind(null, false)}
            >
              Done
            </button>
          </div>

          <Divider
            horizontal
            className='my-3'
          />
        </>
      )}
    </PageCategory>
  )
}

export default FragranceAccordsSection
