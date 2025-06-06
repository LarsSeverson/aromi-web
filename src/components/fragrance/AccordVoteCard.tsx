import { formatNumber } from '@/common/string-utils'
import { type FragranceAccord } from '@/generated/graphql'
import clsx from 'clsx'
import React, { useMemo, useState } from 'react'
import BouncyButton, { type BouncyButtonProps } from '../common/BouncyButton'

export type CardAccordPreview = FragranceAccord

export interface AccordVoteCardProps extends BouncyButtonProps {
  accord: CardAccordPreview
}

const AccordVoteCard = (props: AccordVoteCardProps) => {
  const { accord, className, ...rest } = props
  const { color: backgroundColor, name, votes } = accord
  const { voteScore, myVote } = votes

  const [curSelected, setCurSelected] = useState<boolean>(myVote === true)

  const handleAccordPress = () => {
    setCurSelected((prev) => !prev)
  }

  const selectedVotes = useMemo(() => {
    const originallySelected = myVote === true

    const addOne = !originallySelected && curSelected
    const removeOne = originallySelected && !curSelected

    if (addOne) return voteScore + 1
    if (removeOne) return voteScore - 1

    return voteScore
  }, [curSelected, myVote, voteScore])

  return (
    <BouncyButton
      className={clsx(
        'flex flex-col px-2 py-2 group hover:backdrop-opacity-0 group',
        'active:scale-[1.0]',
        className
      )}
      {...rest}
      onClick={handleAccordPress}
    >
      <div
        className='w-full'
      >
        <div
          className={clsx(
            'w-full aspect-square rounded-xl overflow-hidden',
            'group-hover:outline-sinopia outline outline-[3px] outline-none transition-all duration-100 ease-in-out',
            (curSelected ?? false) && 'outline-sinopia'
          )}
        >
          <div
            className={clsx(
              'w-full aspect-square rounded-xl bg-empty',
              'group-active:scale-[0.95]',
              (curSelected ?? false) && 'scale-[0.95]'
            )}
            style={{ backgroundColor }}
          />
        </div>
        <div
          className='mx-1 mt-1 flex'
        >
          <p
            className='font-semibold text-sm truncate'
          >
            {name}
          </p>
          {selectedVotes !== 0 && (
            <p
              className='font-semibold text-sm ml-auto'
            >
              {formatNumber(selectedVotes)}
            </p>
          )}
        </div>
      </div>
    </BouncyButton>
  )
}

export default AccordVoteCard
