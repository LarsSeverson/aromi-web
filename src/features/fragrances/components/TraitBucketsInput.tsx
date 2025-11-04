import clsx from 'clsx'
import type { AllFragranceTraitFragment, AllFragranceTraitVoteFragment } from '@/generated/graphql'
import { getTraitIcon } from '../utils/icons'
import type { Nullable } from '@/utils/util'
import TraitBucketInput from './TraitBucketInput'
import { useState } from 'react'

export interface TraitBucketsInputProps {
  trait: AllFragranceTraitFragment
  myTraitVote?: Nullable<AllFragranceTraitVoteFragment>
  showLabel?: boolean
  onBucketClick?: (typeId: string, optionId: string) => void
}

const TraitBucketsInput = (props: TraitBucketsInputProps) => {
  const { trait, showLabel = true, myTraitVote, onBucketClick } = props
  const { name, type, stats } = trait
  const { distribution } = stats

  const [selectedBucket, setSelectedBucket] = useState(myTraitVote?.id)

  const handleOnBucketClick = (typeId: string, optionId: string) => {
    onBucketClick?.(typeId, optionId)
    setSelectedBucket(prev => prev === optionId ? undefined : optionId)
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
            className='font-semibold text-light text-md'
          >
            {name}
          </span>
        )}

        <div
          className='flex w-full'
        >
          {distribution.map(
            (bucket, index) => (
              <div
                key={bucket.option.id}
                className='flex flex-col w-full'
              >
                <TraitBucketInput
                  bucket={bucket}
                  isSelected={selectedBucket === bucket.option.id}
                  className={clsx(
                    index === 0 && 'rounded-l-md',
                    index === distribution.length - 1 && 'rounded-r-md',
                    index !== 0 && 'border-l border-sinopia/15'
                  )}
                  onBucketClick={handleOnBucketClick.bind(null, trait.id)}
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default TraitBucketsInput