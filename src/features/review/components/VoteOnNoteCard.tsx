import React, { useMemo, useRef, useState } from 'react'
import BouncyButton, { type BouncyButtonProps } from '@/components/BouncyButton'
import { type IFragranceNoteSummary } from '../../fragrance/types'
import { formatNumber } from '@/common/string-utils'
import clsx from 'clsx'
import { Overlay } from '@/components/Overlay'

export interface VoteOnNoteCardProps extends BouncyButtonProps {
  note: IFragranceNoteSummary
  onSelected?: (value: boolean | null) => void
}

const VoteOnNoteCard = (props: VoteOnNoteCardProps) => {
  const { note, className, onSelected, ...rest } = props
  const { thumbnail = '', name, votes } = note

  const stableVotes = useRef(votes)
  const [curSelected, setCurSelected] = useState<true | null>(stableVotes.current.myVote === true ? true : null)

  const selectedVotes = useMemo(() => {
    const { voteScore, myVote } = stableVotes.current
    const originallySelected = myVote === true

    const addOne = !originallySelected && curSelected === true
    const removeOne = originallySelected && !curSelected

    if (addOne) return voteScore + 1
    if (removeOne) return voteScore - 1

    return voteScore
  }, [curSelected])

  const handleNotePress = () => {
    const next = curSelected === true ? null : true
    setCurSelected(next)
    onSelected?.(next)
  }

  return (
    <BouncyButton
      className={clsx(
        'flex flex-col px-2 py-2 group hover:backdrop-opacity-0 group',
        'active:scale-[1.0]',
        className
      )}
      {...rest}
      onClick={handleNotePress}
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
              'relative w-full aspect-square rounded-xl bg-empty',
              'group-active:scale-[0.95]',
              (curSelected ?? false) && 'scale-[0.95]'
            )}
          >
            {thumbnail != null && (
              <div
                className='relative'
              >
                <img
                  src={thumbnail}
                  className='object-cover'
                />

                <Overlay />
              </div>
            )}
          </div>
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

export default VoteOnNoteCard
