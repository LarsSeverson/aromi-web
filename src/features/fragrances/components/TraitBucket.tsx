import type { AllTraitVoteDistributionFragment } from '@/generated/graphql'
import { formatNumber } from '@/utils/string-utils'
import clsx from 'clsx'
import React from 'react'

export interface TraitBucketProps {
  bucket: AllTraitVoteDistributionFragment
  maxScore: number
  className?: string
}

const TraitBucket = (props: TraitBucketProps) => {
  const { bucket, maxScore, className } = props
  const { votes } = bucket

  const opacity = Math.max(0.08, Math.min(100, votes / maxScore))

  return (
    <>
      <div
        className={clsx(
          className,
          'h-8 w-full overflow-hidden'
        )}
      >
        <div
          className={clsx(
            'h-8 w-full transition-colors',
            'bg-sinopia'
          )}
          style={{ opacity }}
        />
      </div>

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
    </>
  )
}

export default TraitBucket
