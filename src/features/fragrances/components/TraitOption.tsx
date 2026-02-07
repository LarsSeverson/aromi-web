import ArrowSvg from '@/components/ArrowSvg'
import type { AllFragranceTraitOptionFragment } from '@/generated/graphql'
import { formatNumber } from '@/utils/string-utils'
import { pluralizer } from '@/utils/util-functions'
import { Tooltip } from '@base-ui/react'
import clsx from 'clsx'
import React from 'react'

export interface TraitOptionProps {
  option: AllFragranceTraitOptionFragment

  index: number
  totalOptions?: number
  maxScore?: number

  isSelected?: boolean
  originalOptionId?: string

  onOptionClick?: (optionId: string) => void
}

export const TraitOption = (props: TraitOptionProps) => {
  const {
    option,

    index,
    totalOptions = 1,
    maxScore = 1,

    isSelected = false,
    originalOptionId,

    onOptionClick
  } = props

  const wasOriginallySelected = originalOptionId === option.id
  const initialScore = wasOriginallySelected ? option.votes.score - 1 : option.votes.score
  const displayScore = initialScore + (isSelected ? 1 : 0)

  const opacity = Math.max(0.08, Math.min(1.0, displayScore / maxScore))

  return (
    <Tooltip.Root>
      <div
        className={clsx('group relative flex w-full min-w-0 flex-col')}
      >
        <Tooltip.Trigger
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className={clsx(
            index === 0 && 'rounded-l-md',
            index === totalOptions - 1 && 'rounded-r-md',
            index !== 0 && 'border-sinopia/15 border-l',
            'group relative w-full min-w-0',
            'h-6 cursor-pointer outline-none md:h-8',
            'overflow-hidden transition-all',
            'before:pointer-events-none before:absolute before:inset-0 before:z-10 before:rounded-[inherit] before:content-[""]',
            'hover:before:ring-sinopia hover:z-20 hover:before:ring-2 hover:before:brightness-85 hover:before:ring-inset'
          )}
          onClick={onOptionClick?.bind(null, option.id)}
        >
          <div
            className='bg-sinopia h-full w-full transition-opacity duration-300 ease-in-out'
            style={{ opacity }}
          />
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Positioner
            sideOffset={10}
          >
            <Tooltip.Popup
              className={clsx(
                'flex flex-col items-center rounded-md bg-white px-2 py-1 text-sm outline outline-gray-200',
                'data-ending-style:scale-90 data-ending-style:opacity-0 data-instant:duration-0 data-starting-style:scale-90 data-starting-style:opacity-0',
                'origin-(--transform-origin) transition-[transform,scale,opacity]',
                'shadow-lg shadow-gray-200'
              )}
            >
              <Tooltip.Arrow
                className="data-[side=bottom]:-top-2.25 data-[side=left]:-right-3.25 data-[side=left]:rotate-90 data-[side=right]:-left-3.25 data-[side=right]:-rotate-90 data-[side=top]:-bottom-2.25 data-[side=top]:rotate-180"
              >
                <ArrowSvg />
              </Tooltip.Arrow>

              <span>
                {formatNumber(displayScore)} {pluralizer(displayScore, 'vote')}
              </span>

              {isSelected && (
                <span
                  className='text-xs text-black/50'
                >
                  Your vote
                </span>
              )}
            </Tooltip.Popup>
          </Tooltip.Positioner>
        </Tooltip.Portal>

        <span
          className={clsx(
            !isSelected && 'opacity-0',
            'bg-sinopia my-1 h-0.75 w-[50%] self-center rounded-full'
          )}
        />

        <span
          className={clsx(
            'min-w-0 truncate text-center font-medium',
            'text-[10px] md:text-sm'
          )}
        >
          {option.label}
        </span>

        <div
          className='flex flex-col items-center'
        >
          {displayScore > 0 && (
            <span
              className={clsx(
                'min-w-0 truncate text-center text-black/50',
                'text-[9px] md:text-xs'
              )}
            >
              {formatNumber(displayScore)}
            </span>
          )}

          {isSelected && (
            <span
              className='text-[9px] text-black/50 md:text-xs'
            >
              Your vote
            </span>
          )}
        </div>
      </div>
    </Tooltip.Root>
  )
}
