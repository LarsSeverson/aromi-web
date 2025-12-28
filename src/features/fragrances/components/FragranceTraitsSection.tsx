import React, { useMemo } from 'react'
import PageCategory from '@/components/PageCategory'
import { TraitTypeEnum } from '@/generated/graphql'
import { useFragranceTraits } from '../hooks/useFragranceTraits'
import { useMyFragranceTraits } from '../hooks/useMyFragranceTraits'
import { useVoteOnFragranceTrait } from '../hooks/useVoteOnFragranceTrait'
import { useDebounces } from '@/hooks/useDebounces'
import { useToastMessage } from '@/hooks/useToastMessage'
import TraitBucketsInput from './TraitBucketsInput'
import clsx from 'clsx'
import { useFragranceContext } from '../contexts/FragranceContext'

export interface FragranceTraitsSectionProps {}

const FragranceTraitsSection = (_: FragranceTraitsSectionProps) => {
  const { fragrance } = useFragranceContext()

  const { toastError } = useToastMessage()
  const { run } = useDebounces(300, [fragrance.id])

  const { vote } = useVoteOnFragranceTrait()
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

  const handleVoteOnTraitOption = async (traitTypeId: string, traitOptionId?: string) => {
    const voteRes = await vote({ fragranceId: fragrance.id, traitTypeId, traitOptionId })

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

  const traitTypes = [
    TraitTypeEnum.Time,
    TraitTypeEnum.Season,
    TraitTypeEnum.Longevity,
    TraitTypeEnum.Projection,
    TraitTypeEnum.Balance,
    TraitTypeEnum.Complexity,
    TraitTypeEnum.Appeal
  ]

  return (
    <PageCategory
      title='Traits'
      className='flex flex-col'
    >
      <div
        className={clsx(
          'flex w-full max-w-4xl flex-col self-center',
          'mt-6 gap-10 md:gap-15'
        )}
      >
        {traitTypes.map((type) => {
          const trait = traitMap.get(type)
          if (trait == null) return null

          return (
            <TraitBucketsInput
              key={type}
              trait={trait}
              myTraitVote={myTraitMap.get(type)}
              onBucketVote={handleOnBucketVote}
            />
          )
        })}
      </div>
    </PageCategory>
  )
}

export default FragranceTraitsSection