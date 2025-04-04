import React from 'react'
import { type CardNotePreview } from './NotePreviewCard'
import NoteVoteCard from './NoteVoteCard'
import Divider from '../common/Divider'

export interface VoteNotesListProps {
  top: CardNotePreview[]
  middle: CardNotePreview[]
  base: CardNotePreview[]
}

const VoteNotesList = (props: VoteNotesListProps) => {
  const { top, middle, base } = props

  return (
    <div
      className='flex flex-col w-full gap-5'
    >
      <div>
        <h3
          className='text-lg font-pd ml-2'
        >
          top
        </h3>
      </div>
      <div
        className='w-full grid grid-cols-[repeat(auto-fit,minmax(60px,128px))] justify-center'
      >
        {top.map(note => (
          <NoteVoteCard
            key={note.id}
            note={note}
          />
        ))}
      </div>

      <Divider
        horizontal
      />

      <div>
        <h3
          className='text-lg font-pd ml-2'
        >
          middle
        </h3>
      </div>
      <div
        className='w-full grid grid-cols-[repeat(auto-fit,minmax(60px,128px))] justify-center'
      >
        {middle.map(note => (
          <NoteVoteCard
            key={note.id}
            note={note}
          />
        ))}
      </div>

      <Divider
        horizontal
      />

      <div>
        <h3
          className='text-lg font-pd ml-2'
        >
          base
        </h3>
      </div>
      <div
        className='w-full grid grid-cols-[repeat(auto-fit,minmax(60px,128px))] justify-center'
      >
        {base.map(note => (
          <NoteVoteCard
            key={note.id}
            note={note}
          />
        ))}
      </div>
    </div>
  )
}

export default VoteNotesList
