import type { AllAccordFragment, AllFragranceAccordFragment } from '@/generated/graphql'
import { Colors } from '@/styles/Colors'
import React from 'react'
import { FaMinus } from 'react-icons/fa'

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
      className='group relative flex cursor-pointer flex-col items-start focus:outline-none'
    >
      <div
        className='outline-sinopia rounded-md p-0.5 group-hover:outline-2'
      >
        <div
          className='aspect-square w-full max-w-32 min-w-28 overflow-hidden rounded-md'
          style={{
            backgroundColor: color ?? Colors.sinopia
          }}
        />
      </div>

      <div
        className='absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 text-white shadow-sm hover:bg-gray-300'
      >
        <FaMinus
          className='h-2 w-2 text-black/80'
        />
      </div>

      <span
        className='mt-1 ml-1 block truncate text-sm font-medium text-black/80'
      >
        {name}
      </span>
    </button>
  )
}

export default VotedAccordsListItem
