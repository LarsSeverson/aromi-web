import { type FragranceTraitType, type FragranceTrait } from '@/generated/graphql'
import React, { useMemo } from 'react'
import clsx from 'clsx'
import MidScaleBar from '@/components/MidScaleBar'
import gender from '@/assets/gender.svg'
import longevity from '@/assets/longevity.svg'
import sillage from '@/assets/sillage.svg'
import complexity from '@/assets/complexity.svg'
import balance from '@/assets/balance.svg'
import allure from '@/assets/allure.svg'
import { Icon } from '@/components/Icon'

export type LadderCharacteristic = Pick<FragranceTrait, 'voteScore' | 'type' | 'myVote'>

export type LadderCharacteristics = {
  [key in FragranceTraitType]: LadderCharacteristic
}

export interface CharacteristicsLadderProps extends React.HTMLAttributes<HTMLDivElement> {
  characteristics: LadderCharacteristic[]
}

export const CharacteristicsLadder = (props: CharacteristicsLadderProps) => {
  const { characteristics, className, ...rest } = props

  const characteristicsMap = useMemo(() => characteristics
    .reduce(
      (map, characteristic) => map.set(characteristic.type, characteristic),
      new Map<keyof LadderCharacteristics, LadderCharacteristic>()
    )
  , [characteristics])

  return (
    <div
      className={clsx(
        'flex flex-col gap-10 max-w-xl',
        className
      )}
      {...rest}
    >
      <MidScaleBar
        value={characteristicsMap.get('GENDER')?.voteScore ?? 50.0}
        label='gender'
        lessLabel='feminine'
        greaterLabel='masculine'
        Icon={<Icon src={gender} size={28} />}
      />
      <MidScaleBar
        value={characteristicsMap.get('LONGEVITY')?.voteScore ?? 50.0}
        label='longevity'
        lessLabel='brief'
        greaterLabel='endless'
        Icon={<Icon src={longevity} />}
      />
      <MidScaleBar
        value={characteristicsMap.get('SILLAGE')?.voteScore ?? 50.0}
        label='sillage'
        lessLabel='intimate'
        greaterLabel='expansive'
        Icon={<Icon src={sillage} />}
      />
      <MidScaleBar
        value={characteristicsMap.get('COMPLEXITY')?.voteScore ?? 50.0}
        label='complexity'
        lessLabel='simple'
        greaterLabel='intricate'
        Icon={<Icon src={complexity} />}
      />
      <MidScaleBar
        value={characteristicsMap.get('BALANCE')?.voteScore ?? 50.0}
        label='balance'
        lessLabel='unbalanced'
        greaterLabel='harmonious'
        Icon={<Icon src={balance} />}
      />
      <MidScaleBar
        value={characteristicsMap.get('ALLURE')?.voteScore ?? 50.0}
        label='allure'
        lessLabel='unappealing'
        greaterLabel='captivating'
        Icon={<Icon src={allure} />}
      />
    </div>
  )
}
