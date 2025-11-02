import { TraitTypeEnum, type FragranceDetailFragment } from '@/generated/graphql'
import React, { useMemo } from 'react'
import { useFragranceTraits } from '../hooks/useFragranceTraits'
import { Accordion } from '@base-ui-components/react'
import VoteOnSectionHeader from './VoteOnSectionHeader'
import VoteOnSectionPanel from './VoteOnSectionPanel'
import TraitBucketsInput from './TraitBucketsInput'
import { useMyFragranceTraits } from '../hooks/useMyFragranceTraits'

export interface VoteOnGenderSectionProps {
  fragrance: FragranceDetailFragment
}

const VoteOnGenderSection = (props: VoteOnGenderSectionProps) => {
  const { fragrance } = props

  const { traits, isLoading: isLoadingTraits } = useFragranceTraits(fragrance.id)
  const { myTraits, isLoading: isLoadingMyTraits } = useMyFragranceTraits(fragrance.id)

  const traitMap = useMemo(
    () => new Map(traits.map(trait => [trait.type, trait])),
    [traits]
  )

  const myTraitMap = useMemo(
    () => new Map(myTraits.map(trait => [trait.type, trait])),
    [myTraits]
  )

  if (isLoadingTraits || isLoadingMyTraits) return null

  return (
    <Accordion.Item
      value='gender'
    >
      <VoteOnSectionHeader
        title='Gender'
      />

      <VoteOnSectionPanel>
        <TraitBucketsInput
          showLabel={false}
          trait={traitMap.get(TraitTypeEnum.Gender)!}
          myTraitVote={myTraitMap.get(TraitTypeEnum.Gender)}
        />
      </VoteOnSectionPanel>
    </Accordion.Item>
  )
}

export default VoteOnGenderSection
