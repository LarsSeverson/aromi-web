import React, { useMemo } from 'react'
import PageCategory from '@/components/PageCategory'
import { TraitTypeEnum, type FragranceDetailFragment } from '@/generated/graphql'
import { useFragranceTraits } from '../hooks/useFragranceTraits'
import TraitBuckets from './TraitBuckets'
import clsx from 'clsx'

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
      className='flex flex-col'
    >
      <div
        className={clsx(
          'flex w-full max-w-4xl flex-col self-center',
          'mt-4 md:mt-6'
        )}
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