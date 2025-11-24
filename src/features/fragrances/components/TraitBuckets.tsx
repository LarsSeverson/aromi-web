import type { AllFragranceTraitFragment } from '@/generated/graphql'
import TraitBucket from './TraitBucket'
import clsx from 'clsx'
import { Tooltip } from '@base-ui-components/react'
import { getTraitIcon } from '../utils/icons'

export interface TraitBucketsProps {
  trait: AllFragranceTraitFragment
  showLabel?: boolean
}

const TraitBuckets = (props: TraitBucketsProps) => {
  const { trait, showLabel = true } = props
  const { name, type, stats } = trait
  const { distribution } = stats

  const maxScore = Math.max(...distribution.map(d => d.votes), 1)

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
            {distribution.map(
              (bucket, index) => (
                <div
                  key={bucket.option.id}
                  className='flex w-full flex-col'
                >
                  <TraitBucket
                    bucket={bucket}
                    maxScore={maxScore}
                    // eslint-disable-next-line tailwindcss/no-custom-classname
                    className={clsx(
                      index === 0 && 'rounded-l-md',
                      index === distribution.length - 1 && 'rounded-r-md',
                      index !== 0 && 'border-sinopia/15 border-l'
                    )}
                  />
                </div>
              )
            )}
          </div>
        </Tooltip.Provider>
      </div>
    </div>
  )
}

export default TraitBuckets