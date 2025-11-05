import { Overlay } from '@/components/Overlay'
import type { AllFragranceNoteFragment } from '@/generated/graphql'
import clsx from 'clsx'
import React from 'react'

export interface NotePreviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
  fragranceNote: AllFragranceNoteFragment
  showVotes?: boolean | undefined
  headingClass?: string | undefined
}

const NotePreviewCard = (props: NotePreviewCardProps) => {
  const {
    fragranceNote,
    showVotes,
    headingClass,
    className,
    ...rest
  } = props

  const { note, votes } = fragranceNote
  const { name, thumbnail } = note

  return (
    <div
      className={clsx(
        'flex flex-col p-2',
        className
      )}
      {...rest}
    >
      <div
        className='aspect-square w-full overflow-hidden rounded-xl bg-gray-200'
      >
        {thumbnail?.url != null && (
          <div
            className='relative h-full w-full'
          >
            <img
              src={thumbnail.url}
              className='object-cover'
            />

            <Overlay />
          </div>
        )}
      </div>

      <div
        className={clsx(
          'm-1 flex flex-row justify-between overflow-hidden',
          headingClass
        )}
      >
        <p
          className='truncate text-sm font-medium text-black/80'
        >
          {name}
        </p>

        {(showVotes ?? false) && votes.score > 0 && <p>{votes.score}</p>}
      </div>
    </div>
  )
}

export default NotePreviewCard
