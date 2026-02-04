import clsx from 'clsx'
import type { AllFragranceTraitFragment } from '@/generated/graphql'
import { getTraitIcon } from '../utils/icons'
import TraitBucketInput from './TraitBucketInput'
import { useState } from 'react'
import { Tooltip } from '@base-ui/react'
import { useAuthHelpers } from '@/features/auth'

export interface TraitBucketsInputProps {
  trait: AllFragranceTraitFragment
  showLabel?: boolean
  onBucketVote?: (typeId: string, optionId?: string) => void
}

const TraitBucketsInput = (props: TraitBucketsInputProps) => {
  const { trait, showLabel = true, onBucketVote } = props
  const { name, type, stats, myVote } = trait
  const { distribution } = stats

  const { checkAuthenticated } = useAuthHelpers()

  const selectedBucket = myVote?.option?.id
  const [optimisticSelected, setOptimisticSelected] = useState<string | undefined>(selectedBucket)

  const maxScore = Math.max(...distribution.map(d => d.votes), 1)

  const handleOnBucketClick = (typeId: string, optionId: string) => {
    const isAuthenticated = checkAuthenticated('You need to log in before voting on traits')
    if (!isAuthenticated) return

    const newSelection = optimisticSelected === optionId ? undefined : optionId
    setOptimisticSelected(newSelection)
    onBucketVote?.(typeId, newSelection)
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
            {distribution.map((bucket, index) => (
              <div
                key={bucket.option.id}
                className='flex w-full flex-col'
              >
                <TraitBucketInput
                  bucket={bucket}
                  maxScore={maxScore}
                  isSelected={optimisticSelected === bucket.option.id}
                  // eslint-disable-next-line tailwindcss/no-custom-classname
                  className={clsx(
                    index === 0 && 'rounded-l-md',
                    index === distribution.length - 1 && 'rounded-r-md',
                    index !== 0 && 'border-sinopia/15 border-l'
                  )}
                  onBucketClick={handleOnBucketClick.bind(null, trait.typeId)}
                />
              </div>
            ))}
          </div>
        </Tooltip.Provider>
      </div>
    </div>
  )
}

export default TraitBucketsInput