import { type FragranceNote } from '@/generated/graphql'
import clsx from 'clsx'
import React from 'react'

export type CardNotePreview = Pick<FragranceNote, 'id' | 'layer' | 'noteId' | 'name' | 'votes' | 'myVote'>

export interface NotePreviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
  note: CardNotePreview
  showVotes?: boolean | undefined
  headingClass?: string | undefined
}

const NotePreviewCard = (props: NotePreviewCardProps) => {
  const {
    note,
    showVotes,
    headingClass,
    className,
    ...rest
  } = props

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
        <img />
      </div>
      <div
        className={clsx(
          'flex flex-row justify-between mx-1 overflow-hidden',
          headingClass
        )}
      >
        <p
          className='truncate font-pd text-[15px] opacity-85'
        >
          {note?.name.toLowerCase()}
        </p>
        {(showVotes ?? false) && note.votes > 0 && <p>{note.votes}</p>}
      </div>
    </div>
  )
}

export default NotePreviewCard
