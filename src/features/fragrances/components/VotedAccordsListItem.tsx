import type { AllAccordFragment, AllFragranceAccordFragment } from '@/generated/graphql'
import { Colors } from '@/styles/Colors'
import clsx from 'clsx'
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
          className={clsx(
            'aspect-square overflow-hidden rounded-md bg-gray-200',
            'w-20 min-w-20',
            'md:w-32 md:min-w-28'
          )}
          style={{
            backgroundColor: color ?? Colors.sinopia
          }}
        />
      </div>

      <div
        className={clsx(
          'absolute flex items-center justify-center rounded-full bg-gray-200 text-white shadow-sm hover:bg-gray-300',
          '-top-1 -right-1 h-4 w-4',
          'md:-top-1.5 md:-right-1.5 md:h-5 md:w-5'
        )}
      >
        <FaMinus
          className='h-1.5 w-1.5 text-black/80 md:h-2 md:w-2'
        />
      </div>

      <span
        className={clsx(
          'block truncate font-medium text-black/80',
          'mt-0.5 ml-0.5 text-[10px]',
          'md:mt-1 md:ml-1 md:text-sm'
        )}
      >
        {name}
      </span>
    </button>
  )
}

export default VotedAccordsListItem
