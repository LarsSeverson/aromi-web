import React from 'react'
import { Accordion } from '@base-ui-components/react'
import clsx from 'clsx'

export interface VoteOnSectionPanelProps {
  children?: React.ReactNode
}

const VoteOnSectionPanel = (props: VoteOnSectionPanelProps) => {
  const { children } = props

  return (
    <Accordion.Panel
      className={clsx([
        'flex flex-col items-center overflow-hidden',
        'h-(--accordion-panel-height) transition-[height] duration-150 ease-out',
        'data-ending-style:h-0 data-starting-style:h-0'
      ])}
    >
      <div
        className='flex w-full flex-col px-10 pt-2 pb-15'
      >
        {children}
      </div>
    </Accordion.Panel>
  )
}

export default VoteOnSectionPanel
