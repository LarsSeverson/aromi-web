import React, { useState, type SyntheticEvent } from 'react'
import { Popover } from '@base-ui-components/react'
import clsx from 'clsx'
import type { FragrancePreviewFragment } from '@/generated/graphql'
import { SaveFragranceProvider } from '../contexts/SaveFragranceContext'
import SaveFragrancePopoverPopup from './SaveFragrancePopoverPopup'

export interface SaveFragrancePopoverProps extends Popover.Root.Props {
  fragrance: FragrancePreviewFragment
}

const SaveFragrancePopover = (props: SaveFragrancePopoverProps) => {
  const { fragrance, ...rest } = props

  const [isOpen, setIsOpen] = useState(false)

  const handlePopoverTriggerClick = (e: SyntheticEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <Popover.Root
      {...rest}
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <Popover.Trigger
        tabIndex={0}
        className={clsx(
          'bg-sinopia rounded-full px-7 py-3 text-white hover:shadow-lg hover:brightness-105',
          'cursor-pointer'
        )}
        onClick={handlePopoverTriggerClick}
      >
        Save
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Positioner
          sideOffset={8}
        >
          <SaveFragranceProvider
            fragrance={fragrance}
          >
            <SaveFragrancePopoverPopup
              onCancel={setIsOpen.bind(null, false)}
              onSubmit={setIsOpen.bind(null, false)}
            />
          </SaveFragranceProvider>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default SaveFragrancePopover
