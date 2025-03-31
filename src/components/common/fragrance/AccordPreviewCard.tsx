import { type FragranceAccord } from '@/generated/graphql'
import clsx from 'clsx'
import React from 'react'

export type CardAccordPreview = FragranceAccord

export interface AccordPreviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
  accord: CardAccordPreview
}

const AccordPreviewCard = (props: AccordPreviewCardProps) => {
  const { accord, className, ...rest } = props
  const { color: backgroundColor } = accord

  return (
    <div
      className={clsx(
        'p-2 flex flex-col',
        className
      )}
      {...rest}
    >
      <div
        className='w-full aspect-square rounded-xl overflow-hidden bg-empty'
        style={{ backgroundColor }}
      />
    </div>
  )
}

export default AccordPreviewCard
