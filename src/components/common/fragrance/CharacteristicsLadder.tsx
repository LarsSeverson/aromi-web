import { type FragranceTrait } from '@/generated/graphql'
import React from 'react'
import clsx from 'clsx'
import MidScaleBar from '../MidScaleBar'
import gender from '@/assets/gender.svg'
import longevity from '@/assets/longevity.svg'
import sillage from '@/assets/sillage.svg'
import complexity from '@/assets/complexity.svg'
import balance from '@/assets/balance.svg'
import allure from '@/assets/allure.svg'
import { Icon } from '../Icon'

export type LadderCharacteristic = Pick<FragranceTrait, 'id' | 'value' | 'trait' | 'myVote'>

export interface LadderCharacteristics {
  gender: LadderCharacteristic
  longevity: LadderCharacteristic
  sillage: LadderCharacteristic
  complexity: LadderCharacteristic
  balance: LadderCharacteristic
  allure: LadderCharacteristic
}

export interface CharacteristicsLadderProps extends React.HTMLAttributes<HTMLDivElement> {
  characteristics: LadderCharacteristics
}

export const CharacteristicsLadder = (props: CharacteristicsLadderProps) => {
  const { characteristics, className, ...rest } = props

  return (
    <div
      className={clsx(
        'flex flex-col gap-10 max-w-xl',
        className
      )}
      {...rest}
    >
      <MidScaleBar
        value={characteristics.gender.value}
        label='gender'
        lessLabel='feminine'
        greaterLabel='masculine'
        Icon={<Icon src={gender} size={28} />}
      />
      <MidScaleBar
        value={characteristics.longevity.value}
        label='longevity'
        lessLabel='brief'
        greaterLabel='endless'
        Icon={<Icon src={longevity} />}
      />
      <MidScaleBar
        value={characteristics.sillage.value}
        label='sillage'
        lessLabel='intimate'
        greaterLabel='expansive'
        Icon={<Icon src={sillage} />}
      />
      <MidScaleBar
        value={characteristics.complexity.value}
        label='complexity'
        lessLabel='simple'
        greaterLabel='intricate'
        Icon={<Icon src={complexity} />}
      />
      <MidScaleBar
        value={characteristics.balance.value}
        label='balance'
        lessLabel='unbalanced'
        greaterLabel='harmonious'
        Icon={<Icon src={balance} />}
      />
      <MidScaleBar
        value={characteristics.allure.value}
        label='allure'
        lessLabel='unappealing'
        greaterLabel='captivating'
        Icon={<Icon src={allure} />}
      />
    </div>
  )
}
