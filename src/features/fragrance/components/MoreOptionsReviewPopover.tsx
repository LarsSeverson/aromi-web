import { Popover } from '@base-ui-components/react'
import React from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'
import { type IFragranceReviewSummary } from '../types'
import ReportReviewDialog from './ReportReviewDialog'

export interface MoreOptionsReviewPopoverProps {
  review: IFragranceReviewSummary
}

const MoreOptionsReviewPopover = (props: MoreOptionsReviewPopoverProps) => {
  const { review } = props

  return (
    <Popover.Root>
      <Popover.Trigger
        className='rounded-full p-2 aspect-square bg-white hover:brightness-95'
      >
        <HiDotsHorizontal
          size={20}
        />
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Positioner>
          <Popover.Popup
            className='bg-white w-[20rem] max-h-[32rem] rounded-xl shadow-symmetrical flex flex-col justify-center items-center overflow-hidden p-5 gap-2'
          >
            <ReportReviewDialog
              review={review}
            />
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default MoreOptionsReviewPopover
