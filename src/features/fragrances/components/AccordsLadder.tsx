import React, { useCallback, useMemo } from 'react'
import LinearScaleBar from '@/components/LinearScaleBar'
import type { AllFragranceAccordFragment } from '@/generated/graphql'

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
        className='flex flex-col gap-2'
      >
        {filteredAccords
          .map((fAccord, index) => {
            return (
              <div
                key={index}
              >
                <p
                  className='font-pd text-gray-800 mx-3'
                >
                  {fAccord.accord.name}
                </p>

                <LinearScaleBar
                  key={index}
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
