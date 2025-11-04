import type { AllAccordFragment, AllFragranceAccordFragment } from '@/generated/graphql'
import { Colors } from '@/styles/Colors'
import React from 'react'

export interface VotedAccordsListItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  accord: AllAccordFragment
  fragranceAccord?: AllFragranceAccordFragment
}

const VotedAccordsListItem = (props: VotedAccordsListItemProps) => {
  const { accord, ...rest } = props
  const { name, color } = accord

  return (
    <button
      {...rest}
      className='group cursor-pointer flex flex-col items-start focus:outline-none'
    >
      <div
        className='p-0.5 group-hover:outline-2 outline-sinopia rounded-md'
      >
        <div
          className='aspect-square max-w-32 min-w-28 w-full rounded-md overflow-hidden'
          style={{
            backgroundColor: color ?? Colors.sinopia
          }}
        />
      </div>

      <span
        className='mt-1 ml-1 text-sm font-medium text-black/80 block truncate'
      >
        {name}
      </span>
    </button>
  )
}

export default VotedAccordsListItem
