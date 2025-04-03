import BouncyButton, { type BouncyButtonProps } from '@/components/BouncyButton'
import clsx from 'clsx'
import React, { useMemo, useState } from 'react'
import { type CardNotePreview } from './NotePreviewCard'
import { formatNumber } from '@/common/string-utils'

export interface NoteVoteCardProps extends BouncyButtonProps {
  note: CardNotePreview
}

const NoteVoteCard = (props: NoteVoteCardProps) => {
  const { note, className, ...rest } = props
  const { name, votes, myVote } = note

  const [curSelected, setCurSelected] = useState<boolean>(myVote === true)

  const handleNotePress = () => {
    setCurSelected((prev) => !prev)
  }

  const selectedVotes = useMemo(() => {
    const originallySelected = myVote === true

    const addOne = !originallySelected && curSelected
    const removeOne = originallySelected && !curSelected

    if (addOne) return votes + 1
    if (removeOne) return votes - 1

    return votes
  }, [curSelected, myVote, votes])

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
              'w-full aspect-square rounded-xl bg-empty',
              'group-active:scale-[0.95]',
              (curSelected ?? false) && 'scale-[0.95]'
            )}
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

export default NoteVoteCard
