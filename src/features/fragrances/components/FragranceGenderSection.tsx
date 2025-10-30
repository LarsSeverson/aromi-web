import React, { useMemo } from 'react'
import PageCategory from '@/components/PageCategory'
import { TraitTypeEnum, type FragranceDetailFragment } from '@/generated/graphql'
import { useFragranceTraits } from '../hooks/useFragranceTraits'
import TraitBuckets from './TraitBuckets'

export interface FragranceGenderSectionProps {
  fragrance: FragranceDetailFragment
}

const FragranceGenderSection = (props: FragranceGenderSectionProps) => {
  const { fragrance } = props

  const { traits, isLoading } = useFragranceTraits(fragrance.id)

  const traitMap = useMemo(
    () => new Map(traits.map(trait => [trait.type, trait])),
    [traits]
  )

  if (isLoading) return null

  return (
    <PageCategory
      title='Gender'
    >
      <div
        className='flex flex-col'
      >
        <TraitBuckets
          trait={traitMap.get(TraitTypeEnum.Gender)!}
          showLabel={false}
        />
      </div>
    </PageCategory>
  )
}

export default FragranceGenderSection
