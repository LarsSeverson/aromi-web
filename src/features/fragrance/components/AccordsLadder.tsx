import React, { useCallback } from 'react'
import LinearScaleBar from '@/components/LinearScaleBar'
import { type FragranceAccord } from '@/generated/graphql'

export type BarFragranceAccord = Pick<FragranceAccord, 'id' | 'name' | 'color' | 'votes'>

export interface AccordBarsProps extends React.HTMLAttributes<HTMLDivElement> {
  accords: BarFragranceAccord[]
  maxVote: number
}

const AccordsLadder = (props: AccordBarsProps) => {
  const { accords, maxVote, ...rest } = props

  const getWidth = useCallback((votes: number) => {
    return votes / maxVote * 100
  }, [maxVote])

  return (
    <div {...rest}>
      <div
        className='flex flex-col gap-2'
      >
        {accords.map((accord, index) => {
          return (
            <div key={index}>
              <p className='font-pd text-gray-800 mx-3'>
                {accord.name}
              </p>
              <LinearScaleBar
                key={index}
                value={getWidth(accord.votes.voteScore)}
                color={accord.color}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AccordsLadder
