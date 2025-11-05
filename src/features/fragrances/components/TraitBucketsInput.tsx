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
  onBucketVote?: (typeId: string, optionId?: string) => void
}

const TraitBucketsInput = (props: TraitBucketsInputProps) => {
  const { trait, showLabel = true, myTraitVote, onBucketVote } = props
  const { name, type, stats } = trait
  const { distribution } = stats

  const [selectedBucket, setSelectedBucket] = useState(myTraitVote?.option?.id)

  const handleOnBucketClick = (typeId: string, optionId: string) => {
    setSelectedBucket(prev => {
      const newSelection = prev === optionId ? undefined : optionId
      onBucketVote?.(typeId, newSelection)
      return newSelection
    })
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

        <div
          className='flex w-full'
        >
          {distribution.map(
            (bucket, index) => (
              <div
                key={bucket.option.id}
                className='flex w-full flex-col'
              >
                <TraitBucketInput
                  bucket={bucket}
                  isSelected={selectedBucket === bucket.option.id}
                  // eslint-disable-next-line tailwindcss/no-custom-classname
                  className={clsx(
                    index === 0 && 'rounded-l-md',
                    index === distribution.length - 1 && 'rounded-r-md',
                    index !== 0 && 'border-sinopia/15 border-l'
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