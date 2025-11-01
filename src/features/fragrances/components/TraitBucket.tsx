import ArrowSvg from '@/components/ArrowSvg'
import type { AllTraitVoteDistributionFragment } from '@/generated/graphql'
import { formatNumber } from '@/utils/string-utils'
import { Tooltip } from '@base-ui-components/react'
import clsx from 'clsx'
import React from 'react'

const MIN_OPACITY = 0.08
const MAX_OPACITY = 1.0

export interface TraitBucketProps {
  bucket: AllTraitVoteDistributionFragment
  maxScore: number
  className?: string
}

const TraitBucket = (props: TraitBucketProps) => {
  const { bucket, maxScore, className } = props
  const { votes } = bucket

  const opacity = Math.max(MIN_OPACITY, Math.min(MAX_OPACITY, votes / maxScore))

  return (
    <Tooltip.Root>
      <Tooltip.Trigger
        className={clsx(
          className,
          'h-8 min-w-0 w-full overflow-hidden group'
        )}
      >
        <div
          className={clsx(
            'h-8 w-full transition-colors',
            'bg-sinopia'
          )}
          style={{ opacity }}
        />
      </Tooltip.Trigger>

      <Tooltip.Portal>
        <Tooltip.Positioner
          sideOffset={10}
        >
          <Tooltip.Popup
            className={clsx(
              'flex flex-col rounded-md px-2 py-1 text-sm outline outline-gray-200 bg-white',
              'data-ending-style:scale-90 data-ending-style:opacity-0 data-instant:duration-0 data-starting-style:scale-90 data-starting-style:opacity-0',
              'origin-(--transform-origin) transition-[transform,scale,opacity]',
              'shadow-lg shadow-gray-200'
            )}
          >
            <Tooltip.Arrow
              className="data-[side=bottom]:top-[-9px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-9px] data-[side=top]:rotate-180"
            >
              <ArrowSvg />
            </Tooltip.Arrow>

            {formatNumber(votes)} {votes === 1 ? 'vote' : 'votes'}
          </Tooltip.Popup>
        </Tooltip.Positioner>
      </Tooltip.Portal>

      <span
        className='mt-2 text-sm min-w-0 text-center truncate'
      >
        {bucket.option.label}
      </span>

      {votes > 0 && (
        <span
          className='text-xs font-medium text-black/50 min-w-0 text-center truncate'
        >
          {formatNumber(votes)} {votes === 1 ? 'vote' : 'votes'}
        </span>
      )}
    </Tooltip.Root>
  )
}

export default TraitBucket
