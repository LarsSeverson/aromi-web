import React, { useMemo } from 'react'
import PageCategory from '@/components/PageCategory'
import { FragranceTraitTypeEnum } from '@/generated/graphql'
import { useFragranceTraits } from '../hooks/useFragranceTraits'
import { useVoteOnFragranceTrait } from '../hooks/useVoteOnFragranceTrait'
import { useDebounces } from '@/hooks/useDebounces'
import { useToastMessage } from '@/hooks/useToastMessage'
import clsx from 'clsx'
import { useFragranceContext } from '../contexts/FragranceContext'
import { TraitOptions } from './TraitOptions'

export interface FragranceTraitsSectionProps {}

const FragranceTraitsSection = (_: FragranceTraitsSectionProps) => {
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

  const handleOnTraitVote = (traitTypeId: string, traitOptionId?: string) => {
    run(`${traitTypeId}.${traitOptionId}`, () => {
      handleVoteOnTraitOption(traitTypeId, traitOptionId)
    })
  }

  if (isLoadingTraits) return null

  const traitTypes = [
    FragranceTraitTypeEnum.Time,
    FragranceTraitTypeEnum.Season,
    FragranceTraitTypeEnum.Longevity,
    FragranceTraitTypeEnum.Projection,
    FragranceTraitTypeEnum.Balance,
    FragranceTraitTypeEnum.Complexity,
    FragranceTraitTypeEnum.Appeal
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
            <TraitOptions
              key={type}
              trait={trait}
              onOptionSelect={handleOnTraitVote}
            />
          )
        })}
      </div>
    </PageCategory>
  )
}

export default FragranceTraitsSection