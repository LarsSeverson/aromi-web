/* eslint-disable tailwindcss/no-custom-classname */
import ArrowSvg from '@/components/ArrowSvg'
import type { AllTraitVoteDistributionFragment } from '@/generated/graphql'
import { formatNumber } from '@/utils/string-utils'
import { pluralizer } from '@/utils/util-functions'
import { Tooltip } from '@base-ui/react'
import clsx from 'clsx'
import React from 'react'

const MIN_OPACITY = 0.08
const MAX_OPACITY = 1.0

export interface TraitBucketInputProps {
  bucket: AllTraitVoteDistributionFragment
  maxScore?: number
  className?: string
  isSelected?: boolean
  onBucketClick?: (optionId: string) => void
}

const TraitBucketInput = (props: TraitBucketInputProps) => {
  const { bucket, maxScore = 1, className, isSelected = false, onBucketClick } = props
  const { votes } = bucket

  const opacity = Math.max(MIN_OPACITY, Math.min(MAX_OPACITY, votes / maxScore))

  return (
    <Tooltip.Root>
      <div
        className={clsx(
          'group relative flex w-full min-w-0 flex-col'
        )}
      >
        <Tooltip.Trigger
          className={clsx(
            className,
            'group relative w-full min-w-0',
            'h-6 cursor-pointer outline-none md:h-8',
            'overflow-hidden transition-all',
            'before:pointer-events-none before:absolute before:inset-0 before:z-10 before:rounded-[inherit] before:content-[""]',
            'hover:before:ring-sinopia hover:z-20 hover:before:ring-2 hover:before:brightness-85 hover:before:ring-inset'
          )}
          onClick={onBucketClick?.bind(null, bucket.option.id)}
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
                {formatNumber(votes)} {pluralizer(votes, 'vote')}
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
          {bucket.option.label}
        </span>

        <div
          className='flex flex-col items-center'
        >
          {votes > 0 && (
            <span
              className={clsx(
                'min-w-0 truncate text-center text-black/50',
                'text-[9px] md:text-xs'
              )}
            >
              {formatNumber(votes)}
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

export default TraitBucketInput