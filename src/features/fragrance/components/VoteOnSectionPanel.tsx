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
        'flex flex-col items-center my-6 overflow-hidden',
        'h-[var(--accordion-panel-height)] transition-[height] duration-150 ease-out',
        'data-[starting-style]:h-0 data-[ending-style]:h-0'
      ])}
    >
      {children}
    </Accordion.Panel>
  )
}

export default VoteOnSectionPanel
