import { useAuthHelpers } from '@/features/auth'
import type { AllFragranceTraitFragment } from '@/generated/graphql'
import React from 'react'
import { getTraitIcon } from '../utils/icons'
import { Tooltip } from '@base-ui/react'
import { TraitOption } from './TraitOption'

export interface TraitOptionsProps {
  trait: AllFragranceTraitFragment
  showLabel?: boolean

  onOptionSelect?: (traitId: string, optionId?: string) => void
}

export const TraitOptions = (props: TraitOptionsProps) => {
  const {
    trait,
    showLabel = true,
    onOptionSelect

  } = props

  const { checkAuthenticated } = useAuthHelpers()

  const [stableTrait] = React.useState(trait)

  const {
    id: traitId,
    name,
    type,
    options
  } = stableTrait

  const [originalOptionId] = React.useState(options.find(option => option.votes.myVote === 1)?.id)
  const [currentOptionId, setCurrentOptionId] = React.useState(originalOptionId)
  const maxScore = Math.max(...options.map(option => option.votes.score), 1)

  const handleOnOptionSelect = (optionId?: string) => {
    const isAuthenticated = checkAuthenticated('You need to log in before voting on traits')
    if (!isAuthenticated) return

    if (currentOptionId === optionId) {
      optionId = undefined
    }

    setCurrentOptionId(optionId)

    onOptionSelect?.(traitId, optionId)
  }

  return (
    <div
      className='w-full'
    >
      <div
        className='flex flex-col items-center gap-3'
      >
        {getTraitIcon(type)}

        {showLabel && (
          <span
            className='text-md font-semibold'
          >
            {name}
          </span>
        )}

        <Tooltip.Provider>
          <div
            className='flex w-full'
          >
            {options.map((option, index) => (
              <div
                key={option.id}
                className='flex w-full flex-col'
              >
                <TraitOption
                  option={option}

                  index={index}
                  totalOptions={options.length}
                  maxScore={maxScore}

                  isSelected={currentOptionId === option.id}
                  originalOptionId={originalOptionId}

                  onOptionClick={handleOnOptionSelect}
                />
              </div>
            ))}
          </div>
        </Tooltip.Provider>
      </div>
    </div>
  )
}
