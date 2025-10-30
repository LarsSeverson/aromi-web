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
        'p-2 flex flex-col',
        className
      )}
      {...rest}
    >
      <div
        className='w-full aspect-square rounded-xl overflow-hidden bg-gray-200'
      >
        {thumbnail?.url != null && (
          <div
            className='relative'
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
          'flex flex-row justify-between m-1 overflow-hidden',
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
