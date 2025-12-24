import React, { useCallback, useMemo } from 'react'
import LinearScaleBar from '@/components/LinearScaleBar'
import type { AllFragranceAccordFragment } from '@/generated/graphql'
import clsx from 'clsx'

export interface AccordBarsProps extends React.HTMLAttributes<HTMLDivElement> {
  accords: AllFragranceAccordFragment[]
  maxVote: number
}

const AccordsLadder = (props: AccordBarsProps) => {
  const { accords, maxVote, ...rest } = props

  const filteredAccords = useMemo(() => accords.filter(accord => accord.votes.score > 0), [accords])

  const getWidth = useCallback((votes: number) => {
    return votes / maxVote * 100
  }, [maxVote])

  return (
    <div
      {...rest}
    >
      <div
        className={clsx(
          'flex flex-col',
          'gap-3'
        )}
      >
        {filteredAccords
          .map((fAccord, index) => {
            return (
              <div
                key={index}
              >
                <p
                  className={clsx(
                    'mx-3 text-gray-800',
                    'text-start text-sm md:text-base'
                  )}
                >
                  {fAccord.accord.name}
                </p>

                <LinearScaleBar
                  value={getWidth(fAccord.votes.score)}
                  color={fAccord.accord.color}
                />
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default AccordsLadder