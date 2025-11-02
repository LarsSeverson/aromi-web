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
          'group cursor-default flex w-full items-center',
          'p-3 rounded-md hover:bg-empty'
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
            'group-data-panel-open:rotate-45 group-data-panel-open:scale-[1.1]'
          ])}
        />
      </Accordion.Trigger>
    </Accordion.Header>
  )
}

export default VoteOnSectionHeader
