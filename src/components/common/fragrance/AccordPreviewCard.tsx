import BouncyButton, { type BouncyButtonProps } from '@/components/BouncyButton'
import { type FragranceAccord } from '@/generated/graphql'
import clsx from 'clsx'
import React, { useMemo, useState } from 'react'

export type CardAccordPreview = FragranceAccord

export interface AccordPreviewCardProps extends BouncyButtonProps {
  accord: CardAccordPreview
}

const AccordPreviewCard = (props: AccordPreviewCardProps) => {
  const { accord, className, ...rest } = props
  const { color: backgroundColor, name, votes, myVote } = accord

  const [curSelected, setCurSelected] = useState<boolean>(myVote === true)

  const handleAccordPress = () => {
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
        'active:scale-[0.99]',
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
            'w-full aspect-square rounded-xl overflow-hidden bg-empty',
            'group-hover:outline-sinopia outline outline-[3px] outline-none transition-all duration-100 ease-in-out',
            'group-active:scale-[0.99]',
            (curSelected ?? false) && 'outline-sinopia'
          )}
        >
          <div
            className={clsx(
              'w-full aspect-square rounded-xl',
              (curSelected ?? false) && 'scale-95'
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
              {selectedVotes}
            </p>
          )}
        </div>
      </div>
    </BouncyButton>
  )
}

export default AccordPreviewCard
