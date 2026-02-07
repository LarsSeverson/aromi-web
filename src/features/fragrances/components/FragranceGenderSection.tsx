import React, { useMemo } from 'react'
import PageCategory from '@/components/PageCategory'
import { useFragranceTraits } from '../hooks/useFragranceTraits'
import clsx from 'clsx'
import { useToastMessage } from '@/hooks/useToastMessage'
import { useDebounces } from '@/hooks/useDebounces'
import { useVoteOnFragranceTrait } from '../hooks/useVoteOnFragranceTrait'
import { useFragranceContext } from '../contexts/FragranceContext'
import { FragranceTraitTypeEnum } from '@/generated/graphql'
import { TraitOptions } from './TraitOptions'

export interface FragranceGenderSectionProps {}

const FragranceGenderSection = (_: FragranceGenderSectionProps) => {
  const { fragrance } = useFragranceContext()

  const { toastError } = useToastMessage()
  const { run } = useDebounces(300, [fragrance.id])

  const { vote } = useVoteOnFragranceTrait()
  const { traits, isLoading: isLoadingTraits } = useFragranceTraits(fragrance.id)

  const traitMap = useMemo(
    () => new Map(traits.map(trait => [trait.type, trait])),
    [traits]
  )

  const handleVoteOnTraitOption = async (traitId: string, traitOptionId?: string) => {
    const voteRes = await vote({ fragranceId: fragrance.id, traitId, traitOptionId })

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

  if (isLoadingTraits) return null

  return (
    <PageCategory
      title='Gender'
      className='flex flex-col'
    >
      <div
        className={clsx(
          'flex w-full max-w-4xl flex-col self-center',
          'mt-4 md:mt-6'
        )}
      >
        <TraitOptions
          trait={traitMap.get(FragranceTraitTypeEnum.Gender)!}
          showLabel={false}
          onOptionSelect={handleOnBucketVote}
        />
      </div>
    </PageCategory>
  )
}

export default FragranceGenderSection