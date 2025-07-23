import { Icon } from '@/components/Icon'
import MiddleSlider from '@/components/MiddleSlider'
import React, { useCallback, useEffect, useMemo } from 'react'
import genderIcon from '@/assets/gender.svg'
import longevityIcon from '@/assets/longevity.svg'
import sillageIcon from '@/assets/sillage.svg'
import complexityIcon from '@/assets/complexity.svg'
import balanceIcon from '@/assets/balance.svg'
import allureIcon from '@/assets/allure.svg'
import { Accordion } from '@base-ui-components/react'
import VoteOnSectionHeader from './VoteOnSectionHeader'
import VoteOnSectionPanel from './VoteOnSectionPanel'
import useFragranceTraits from '../hooks/useFragranceTraits'
import { useVoteOnTrait } from '../hooks/useVoteOnTrait'
import { type IFragranceTraitSummary } from '../types'
import { debounce } from 'lodash'

const DEFAULT_SLIDER_VALUE = 0

export interface VoteOnCharacteristicsSectionProps {
  fragranceId: number
}

const VoteOnCharacteristicsSection = (props: VoteOnCharacteristicsSectionProps) => {
  const { fragranceId } = props

  const { map: traitsMap } = useFragranceTraits(fragranceId)
  const { voteOnTrait } = useVoteOnTrait()

  const handleVoteOnTrait = useCallback(async (
    vote: number,
    fragranceTraitId: number
  ) => {
    await voteOnTrait({ vote, fragranceTraitId })
      .match(
        () => {},
        () => {}
      )
  }, [voteOnTrait])

  const debouncedVoteOnTrait = useMemo(() =>
    debounce((
      value: number,
      fragranceTraitId: number
    ) => {
      void handleVoteOnTrait(value, fragranceTraitId)
    }, 300),
  [handleVoteOnTrait])

  const handleSliderChanged = (
    value: number,
    trait: IFragranceTraitSummary | undefined
  ) => {
    if (trait == null) return
    debouncedVoteOnTrait(value, trait.id)
  }

  useEffect(() => {
    return () => {
      debouncedVoteOnTrait.cancel()
    }
  }, [debouncedVoteOnTrait])

  return (
    <Accordion.Item
      className=''
    >
      <VoteOnSectionHeader
        title='How would you rate its characteristics?'
      />

      <VoteOnSectionPanel>
        <div
          className='max-w-xl w-full space-y-6'
        >
          <MiddleSlider
            value={traitsMap.get('GENDER')?.myVote ?? DEFAULT_SLIDER_VALUE}
            label='gender'
            lessLabel='feminine'
            greaterLabel='masculine'
            Icon={(
              <Icon
                src={genderIcon}
                size={28}
              />
            )}
            onValueChange={(value) => { handleSliderChanged(value, traitsMap.get('GENDER')) }}
          />

          <MiddleSlider
            value={traitsMap.get('LONGEVITY')?.myVote ?? DEFAULT_SLIDER_VALUE}
            label='longevity'
            lessLabel='brief'
            greaterLabel='endless'
            Icon={(
              <Icon
                src={longevityIcon}
              />
            )}
            onValueChange={(value) => { handleSliderChanged(value, traitsMap.get('LONGEVITY')) }}
          />

          <MiddleSlider
            value={traitsMap.get('SILLAGE')?.myVote ?? DEFAULT_SLIDER_VALUE}
            label='sillage'
            lessLabel='intimate'
            greaterLabel='expansive'
            Icon={(
              <Icon
                src={sillageIcon}
              />
            )}
            onValueChange={(value) => { handleSliderChanged(value, traitsMap.get('SILLAGE')) }}
          />

          <MiddleSlider
            value={traitsMap.get('COMPLEXITY')?.myVote ?? DEFAULT_SLIDER_VALUE}
            label='complexity'
            lessLabel='simple'
            greaterLabel='intricate'
            Icon={(
              <Icon
                src={complexityIcon}
              />
            )}
            onValueChange={(value) => { handleSliderChanged(value, traitsMap.get('COMPLEXITY')) }}
          />

          <MiddleSlider
            value={traitsMap.get('BALANCE')?.myVote ?? DEFAULT_SLIDER_VALUE}
            label='balance'
            lessLabel='unbalanced'
            greaterLabel='harmonious'
            Icon={(
              <Icon
                src={balanceIcon}
              />
            )}
            onValueChange={(value) => { handleSliderChanged(value, traitsMap.get('BALANCE')) }}
          />

          <MiddleSlider
            value={traitsMap.get('ALLURE')?.myVote ?? DEFAULT_SLIDER_VALUE}
            label='allure'
            lessLabel='unappealing'
            greaterLabel='captivating'
            Icon={(
              <Icon
                src={allureIcon}
              />
            )}
            onValueChange={(value) => { handleSliderChanged(value, traitsMap.get('ALLURE')) }}
          />
        </div>
      </VoteOnSectionPanel>
    </Accordion.Item>
  )
}

export default VoteOnCharacteristicsSection
