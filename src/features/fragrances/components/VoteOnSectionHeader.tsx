import Divider from '@/components/Divider'
import { Accordion } from '@base-ui-components/react'
import clsx from 'clsx'
import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

export interface VoteOnSectionHeaderProps {
  title: string
}

const VoteOnSectionHeader = (props: VoteOnSectionHeaderProps) => {
  const { title } = props

  return (
    <Accordion.Header>
      <Accordion.Trigger
        className={clsx([
          'group flex w-full cursor-default items-center',
          'hover:bg-empty rounded-md p-3'
        ])}
      >
        <h1
          className='text-lg font-bold'
        >
          {title}
        </h1>

        <AiOutlinePlus
          size={22}
          className={clsx([
            'ml-auto transition-transform duration-150 ease-out',
            'group-data-panel-open:scale-[1.1] group-data-panel-open:rotate-45'
          ])}
        />
      </Accordion.Trigger>

      <div
        className='mt-2 mb-10 w-full px-3'
      >
        <Divider
          horizontal
        />
      </div>
    </Accordion.Header>
  )
}

export default VoteOnSectionHeader
