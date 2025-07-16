import React from 'react'
import PageCategory from '@/components/PageCategory'
import { CharacteristicsLadder } from './CharacteristicsLadder'
import useFragranceTraits from '../hooks/useFragranceTraits'
import { type IFragranceSummary } from '../types'

export interface FragranceCharacteristicsSectionProps {
  fragrance: IFragranceSummary
}

const FragranceCharacteristicsSection = (props: FragranceCharacteristicsSectionProps) => {
  const { fragrance } = props

  const { data: characteristics } = useFragranceTraits(fragrance.id)

  return (
    <PageCategory
      isEmpty={characteristics.length === 0}
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
