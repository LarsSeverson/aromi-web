import React from 'react'
import { Popover } from '@base-ui/react'
import { HiDotsHorizontal } from 'react-icons/hi'
import ReportFragranceDialog from './ReportFragranceDialog'
import type { FragranceDetailFragment } from '@/generated/graphql'

export interface MoreOptionsFragrancePopoverProps {
  fragrance: FragranceDetailFragment
}

const MoreOptionsFragrancePopover = (props: MoreOptionsFragrancePopoverProps) => {
  const { fragrance } = props

  return (
    <Popover.Root>
      <Popover.Trigger
        className='aspect-square cursor-pointer rounded-full bg-white p-2 hover:brightness-95'
      >
        <HiDotsHorizontal
          size={20}
        />
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Positioner>
          <Popover.Popup
            className='shadow-symmetrical flex max-h-128 w-[20rem] flex-col items-center justify-center gap-2 overflow-hidden rounded-xl bg-white p-5'
          >
            <ReportFragranceDialog
              fragrance={fragrance}
            />
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default MoreOptionsFragrancePopover
