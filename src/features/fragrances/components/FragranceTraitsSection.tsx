import React, { useMemo } from 'react'
import PageCategory from '@/components/PageCategory'
import { TraitTypeEnum, type FragranceDetailFragment } from '@/generated/graphql'
import { useFragranceTraits } from '../hooks/useFragranceTraits'
import TraitBuckets from './TraitBuckets'
import clsx from 'clsx'

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
            <TraitBuckets
              key={type}
              trait={trait}
            />
          )
        })}
      </div>
    </PageCategory>
  )
}

export default FragranceTraitsSection