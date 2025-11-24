import { TraitTypeEnum } from '@/generated/graphql'
import React, { useMemo } from 'react'
import { useFragranceTraits } from '../hooks/useFragranceTraits'
import { Accordion } from '@base-ui-components/react'
import VoteOnSectionHeader from './VoteOnSectionHeader'
import VoteOnSectionPanel from './VoteOnSectionPanel'
import TraitBucketsInput from './TraitBucketsInput'
import { useMyFragranceTraits } from '../hooks/useMyFragranceTraits'
import { useDebounces } from '@/hooks/useDebounces'
import { useToastMessage } from '@/hooks/useToastMessage'
import { useVoteOnFragranceTrait } from '../hooks/useVoteOnFragranceTrait'

export interface VoteOnTraitsSectionProps {
  fragranceId: string
}

const VoteOnTraitsSection = (props: VoteOnTraitsSectionProps) => {
  const { fragranceId } = props

  const { toastError } = useToastMessage()
  const { run } = useDebounces(300, [fragranceId])

  const { vote } = useVoteOnFragranceTrait()

  const { traits, isLoading: isLoadingTraits } = useFragranceTraits(fragranceId)
  const { myTraits, isLoading: isLoadingMyTraits } = useMyFragranceTraits(fragranceId)

  const traitMap = useMemo(
    () => new Map(traits.map(trait => [trait.type, trait])),
    [traits]
  )

  const myTraitMap = useMemo(
    () => new Map(myTraits.map(trait => [trait.type, trait])),
    [myTraits]
  )

  const handleVoteOnTraitOption = async (traitTypeId: string, traitOptionId?: string) => {
    const voteRes = await vote({ fragranceId, traitTypeId, traitOptionId })

    if (voteRes.isErr()) {
      const error = voteRes.error
      toastError('Error voting on trait', error.message)
    }
  }

  const handleOnBucketVote = (traitTypeId: string, traitOptionId?: string) => {
    run(`${traitTypeId}.${traitOptionId}`, () => {
      handleVoteOnTraitOption(traitTypeId, traitOptionId)
    })
  }

  if (isLoadingTraits || isLoadingMyTraits) return null

  return (
    <Accordion.Item
      value='traits'
    >
      <VoteOnSectionHeader
        title='Traits'
      />

      <VoteOnSectionPanel>
        <div
          className='flex flex-col gap-15'
        >
          <TraitBucketsInput
            trait={traitMap.get(TraitTypeEnum.Time)!}
            myTraitVote={myTraitMap.get(TraitTypeEnum.Time)}
            onBucketVote={handleOnBucketVote}
          />

          <TraitBucketsInput
            trait={traitMap.get(TraitTypeEnum.Season)!}
            myTraitVote={myTraitMap.get(TraitTypeEnum.Season)}
            onBucketVote={handleOnBucketVote}
          />

          <TraitBucketsInput
            trait={traitMap.get(TraitTypeEnum.Longevity)!}
            myTraitVote={myTraitMap.get(TraitTypeEnum.Longevity)}
            onBucketVote={handleOnBucketVote}
          />

          <TraitBucketsInput
            trait={traitMap.get(TraitTypeEnum.Projection)!}
            myTraitVote={myTraitMap.get(TraitTypeEnum.Projection)}
            onBucketVote={handleOnBucketVote}
          />

          <TraitBucketsInput
            trait={traitMap.get(TraitTypeEnum.Balance)!}
            myTraitVote={myTraitMap.get(TraitTypeEnum.Balance)}
            onBucketVote={handleOnBucketVote}
          />

          <TraitBucketsInput
            trait={traitMap.get(TraitTypeEnum.Complexity)!}
            myTraitVote={myTraitMap.get(TraitTypeEnum.Complexity)}
            onBucketVote={handleOnBucketVote}
          />

          <TraitBucketsInput
            trait={traitMap.get(TraitTypeEnum.Appeal)!}
            myTraitVote={myTraitMap.get(TraitTypeEnum.Appeal)}
            onBucketVote={handleOnBucketVote}
          />
        </div>
      </VoteOnSectionPanel>
    </Accordion.Item>
  )
}

export default VoteOnTraitsSection
