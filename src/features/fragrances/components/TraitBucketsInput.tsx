import clsx from 'clsx'
import type { AllFragranceTraitFragment, AllFragranceTraitVoteFragment } from '@/generated/graphql'
import { getTraitIcon } from '../utils/icons'
import type { Nullable } from '@/utils/util'
import TraitBucketInput from './TraitBucketInput'
import { useMemo, useState } from 'react'
import { Tooltip } from '@base-ui/react'
import { useAuthHelpers } from '@/features/auth'

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

  const { checkAuthenticated } = useAuthHelpers()

  const [selectedBucket, setSelectedBucket] = useState(myTraitVote?.option?.id)

  const adjustedDistribution = useMemo(
    () => {
      const initialVoteId = myTraitVote?.option?.id

      return distribution.map(bucket => {
        const shouldAddOne = selectedBucket === bucket.option.id && initialVoteId !== bucket.option.id
        const shouldRemoveOne = selectedBucket !== bucket.option.id && initialVoteId === bucket.option.id
        const adjustedVotes = Math.max(0, bucket.votes + (shouldAddOne ? 1 : 0) - (shouldRemoveOne ? 1 : 0))

        return {
          ...bucket,
          votes: adjustedVotes
        }
      })
    },
    [distribution, selectedBucket, myTraitVote]
  )

  const maxScore = Math.max(...adjustedDistribution.map(d => d.votes), 1)

  const handleOnBucketClick = (typeId: string, optionId: string) => {
    const isAuthenticated = checkAuthenticated('You need to log in before voting on traits')
    if (!isAuthenticated) return

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

        <Tooltip.Provider>
          <div
            className='flex w-full'
          >
            {adjustedDistribution.map((bucket, index) => (
              <div
                key={bucket.option.id}
                className='flex w-full flex-col'
              >
                <TraitBucketInput
                  bucket={bucket}
                  maxScore={maxScore}
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
            ))}
          </div>
        </Tooltip.Provider>
      </div>
    </div>
  )
}

export default TraitBucketsInput