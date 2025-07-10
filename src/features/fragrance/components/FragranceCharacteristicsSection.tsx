import React from 'react'
import PageCategory from '@/components/PageCategory'
import { CharacteristicsLadder } from './CharacteristicsLadder'
import { type FragrancePageFragrance } from '../pages/FragrancePage'
import useFragranceTraits from '../hooks/useFragranceTraits'

export interface FragranceCharacteristicsSectionProps {
  fragrance: FragrancePageFragrance
}

const FragranceCharacteristicsSection = (props: FragranceCharacteristicsSectionProps) => {
  const { fragrance } = props

  const { data: characteristics } = useFragranceTraits(fragrance.id)

  return (
    <PageCategory
      title='Characteristics'
    >
      <div
        className='w-full flex flex-col items-center'
      >
        <CharacteristicsLadder
          characteristics={characteristics}
          className='w-full max-w-4xl'
        />
      </div>
    </PageCategory>
  )
}

export default FragranceCharacteristicsSection
