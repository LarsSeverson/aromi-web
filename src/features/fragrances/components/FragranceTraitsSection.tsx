import React, { useMemo } from 'react'
import PageCategory from '@/components/PageCategory'
import { TraitTypeEnum, type FragranceDetailFragment } from '@/generated/graphql'
import { useFragranceTraits } from '../hooks/useFragranceTraits'
import TraitBuckets from './TraitBuckets'

export interface FragranceTraitsSectionProps {
  fragrance: FragranceDetailFragment
}

const FragranceTraitsSection = (props: FragranceTraitsSectionProps) => {
  const { fragrance } = props

  const { traits, isLoading } = useFragranceTraits(fragrance.id)

  const traitMap = useMemo(
    () => new Map(traits.map(trait => [trait.type, trait])),
    [traits]
  )

  if (isLoading) return null

  return (
    <PageCategory
      title='Traits'
      className='flex flex-col'
    >
      <div
        className='mt-6 flex w-full max-w-4xl flex-col gap-15 self-center'
      >
        <TraitBuckets
          trait={traitMap.get(TraitTypeEnum.Longevity)!}
        />

        <TraitBuckets
          trait={traitMap.get(TraitTypeEnum.Projection)!}
        />

        <TraitBuckets
          trait={traitMap.get(TraitTypeEnum.Balance)!}
        />

        <TraitBuckets
          trait={traitMap.get(TraitTypeEnum.Complexity)!}
        />

        <TraitBuckets
          trait={traitMap.get(TraitTypeEnum.Appeal)!}
        />
      </div>
    </PageCategory>
  )
}

export default FragranceTraitsSection
