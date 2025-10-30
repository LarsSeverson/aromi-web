import { type AllFragranceTraitFragment, TraitTypeEnum } from '@/generated/graphql'
import TraitBucket from './TraitBucket'
import clsx from 'clsx'
import GenderSvg from './GenderSvg'
import LongevitySvg from './LongevitySvg'
import ProjectionSvg from './ProjectionSvg'
import BalanceSvg from './BalanceSvg'
import ComplexitySvg from './ComplexitySvg'
import AppealSvg from './AppealSvg'

export interface TraitBucketProps {
  trait: AllFragranceTraitFragment
  showLabel?: boolean
}

const getIcon = (traitType: TraitTypeEnum) => {
  switch (traitType) {
    case TraitTypeEnum.Gender:
      return (
        <GenderSvg
          width={30}
          height={30}
        />
      )

    case TraitTypeEnum.Longevity:
      return (
        <LongevitySvg
          width={21}
          height={21}
        />
      )

    case TraitTypeEnum.Projection:
      return (
        <ProjectionSvg
          width={22}
          height={22}
        />
      )

    case TraitTypeEnum.Balance:
      return (
        <BalanceSvg
          width={22}
          height={22}
        />
      )

    case TraitTypeEnum.Complexity:
      return (
        <ComplexitySvg
          width={22}
          height={22}
        />
      )

    case TraitTypeEnum.Appeal:
      return (
        <AppealSvg
          width={22}
          height={22}
        />
      )
  }
}

const TraitBuckets = (props: TraitBucketProps) => {
  const { trait, showLabel = true } = props
  const { name, stats } = trait
  const { distribution } = stats

  const maxScore = Math.max(...distribution.map(d => d.votes), 1)

  return (
    <div
      className='w-full'
    >
      <div
        className='flex flex-col items-center gap-3'
      >
        {getIcon(trait.type)}

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
                <TraitBucket
                  bucket={bucket}
                  maxScore={maxScore}
                  className={clsx(
                    index === 0 && 'rounded-l-md',
                    index === distribution.length - 1 && 'rounded-r-md',
                    index !== 0 && 'border-l border-sinopia/15'
                  )}
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default TraitBuckets