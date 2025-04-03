import React from 'react'
import AccordPreviewCard, { type CardAccordPreview } from './AccordPreviewCard'

export interface AccordsListProps {
  accords: CardAccordPreview[]
}

const AccordsList = (props: AccordsListProps) => {
  const { accords } = props

  return (
    <div
      className='flex w-full'
    >
      <div className='w-full grid grid-cols-[repeat(auto-fit,minmax(60px,128px))] justify-center'>
        {accords.map(accord => (
          <AccordPreviewCard
            key={accord.id}
            accord={accord}
          />
        ))}
      </div>
    </div>
  )
}

export default AccordsList
