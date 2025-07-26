import React from 'react'
import { Accordion } from '@base-ui-components/react'
import clsx from 'clsx'
import Divider from '@/components/Divider'

export interface VoteOnSectionPanelProps {
  children?: React.ReactNode
}

const VoteOnSectionPanel = (props: VoteOnSectionPanelProps) => {
  const { children } = props

  return (
    <Accordion.Panel
      className={clsx([
        'flex flex-col items-center mb-3 overflow-hidden',
        'h-[var(--accordion-panel-height)] transition-[height] duration-150 ease-out',
        'data-[starting-style]:h-0 data-[ending-style]:h-0'
      ])}
    >

      <div
        className='px-3 w-full my-2'
      >
        <Divider
          horizontal
        />
      </div>

      {children}
    </Accordion.Panel>
  )
}

export default VoteOnSectionPanel
