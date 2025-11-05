import clsx from 'clsx'
import React from 'react'
import Divider from '@/components/Divider'
import type { AllFragranceNoteFragment, NoteLayer } from '@/generated/graphql'
import NotesPyramidRow from './NotesPyramidRow'

export interface NotesPyramidLayer {
  layer: NoteLayer
  notes: AllFragranceNoteFragment[]
}

export interface NotesPyramidProps extends React.HTMLAttributes<HTMLDivElement> {
  layers: NotesPyramidLayer[]
}

const NotesPyramid = (props: NotesPyramidProps) => {
  const { layers, className } = props

  return (
    <div
      className={clsx(
        className
      )}
    >
      {layers
        .map((layer, index) => (
          <React.Fragment
            key={layer.layer}
          >
            <NotesPyramidRow
              notes={layer.notes}
              layer={layer.layer}
            />

            {index < layers.length - 1 && (
              <div
                className='my-3 flex flex-col items-center'
              >
                <Divider
                  horizontal
                  className='border border-dashed bg-transparent'
                />
              </div>
            )}
          </React.Fragment>
        ))}
    </div>
  )
}

export default NotesPyramid
