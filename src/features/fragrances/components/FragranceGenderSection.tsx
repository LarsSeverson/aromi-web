import React, { useMemo } from 'react'
import PageCategory from '@/components/PageCategory'
import { TraitTypeEnum } from '@/generated/graphql'
import { useFragranceTraits } from '../hooks/useFragranceTraits'
import clsx from 'clsx'
import TraitBucketsInput from './TraitBucketsInput'
import { useMyFragranceTraits } from '../hooks/useMyFragranceTraits'
import { useToastMessage } from '@/hooks/useToastMessage'
import { useDebounces } from '@/hooks/useDebounces'
import { useVoteOnFragranceTrait } from '../hooks/useVoteOnFragranceTrait'
import { useFragranceContext } from '../contexts/FragranceContext'

export interface FragranceGenderSectionProps {}

const FragranceGenderSection = (_: FragranceGenderSectionProps) => {
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
        <TraitBucketsInput
          trait={traitMap.get(TraitTypeEnum.Gender)!}
          myTraitVote={myTraitMap.get(TraitTypeEnum.Gender)}
          showLabel={false}
          onBucketVote={handleOnBucketVote}
        />
      </div>
    </PageCategory>
  )
}

export default FragranceGenderSection