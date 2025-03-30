import Divider from '@/components/Divider'
import { type NoteLayer } from '@/generated/graphql'
import clsx from 'clsx'
import React from 'react'
import NotesPyramidRow from './NotesPyramidRow'
import { type CardNotePreview } from './NotePreviewCard'

export interface NotesPyramidLayer {
  layer: NoteLayer
  notes: CardNotePreview[]
}

export interface NotesPyramidProps extends React.HTMLAttributes<HTMLDivElement> {
  layers: NotesPyramidLayer[]
}

const NotesPyramid = (props: NotesPyramidProps) => {
  const { layers, className } = props

  return (
    <div
      className={clsx(
        '',
        className
      )}
    >
      {layers.map((layer, index) => (
        <React.Fragment
          key={layer.layer}
        >
          <NotesPyramidRow
            notes={layer.notes}
            layer={layer.layer}
          />
          {index < layers.length - 1 && (
            <div
              className='flex flex-col items-center my-3'
            >
              <Divider
                horizontal
                className='bg-transparent border-[1px] border-dashed'
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default NotesPyramid
