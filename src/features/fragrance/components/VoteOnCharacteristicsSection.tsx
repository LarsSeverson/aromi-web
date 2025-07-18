import { Icon } from '@/components/Icon'
import MiddleSlider from '@/components/MiddleSlider'
import React from 'react'
import genderIcon from '@/assets/gender.svg'
import longevityIcon from '@/assets/longevity.svg'
import sillageIcon from '@/assets/sillage.svg'
import complexityIcon from '@/assets/complexity.svg'
import balanceIcon from '@/assets/balance.svg'
import allureIcon from '@/assets/allure.svg'
import { Accordion } from '@base-ui-components/react'
import VoteOnSectionHeader from './VoteOnSectionHeader'
import VoteOnSectionPanel from './VoteOnSectionPanel'

const VoteOnCharacteristicsSection = () => {
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
            label='gender'
            lessLabel='feminine'
            greaterLabel='masculine'
            Icon={(
              <Icon
                src={genderIcon}
                size={28}
              />
            )}
          />

          <MiddleSlider
            label='longevity'
            lessLabel='brief'
            greaterLabel='endless'
            Icon={(
              <Icon
                src={longevityIcon}
              />
            )}
          />

          <MiddleSlider
            label='sillage'
            lessLabel='intimate'
            greaterLabel='expansive'
            Icon={(
              <Icon
                src={sillageIcon}
              />
            )}
          />

          <MiddleSlider
            label='complexity'
            lessLabel='simple'
            greaterLabel='intricate'
            Icon={(
              <Icon
                src={complexityIcon}
              />
            )}
          />

          <MiddleSlider
            label='balance'
            lessLabel='unbalanced'
            greaterLabel='harmonious'
            Icon={(
              <Icon
                src={balanceIcon}
              />
            )}
          />

          <MiddleSlider
            label='allure'
            lessLabel='unappealing'
            greaterLabel='captivating'
            Icon={(
              <Icon
                src={allureIcon}
              />
            )}
          />
        </div>
      </VoteOnSectionPanel>
    </Accordion.Item>
  )
}

export default VoteOnCharacteristicsSection
