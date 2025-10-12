import { Popover } from '@base-ui-components/react'
import React from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'
import { type IFragranceReviewSummary } from '@/features/review/types'
import clsx from 'clsx'
import ReviewOptions from '../../reviews/components/ReviewOptions'
import MyReviewOptions from '../../reviews/components/MyReviewOptions'

export interface MoreOptionsReviewPopoverProps {
  review: IFragranceReviewSummary
  isMyReview?: boolean | null | undefined
}

const MoreOptionsReviewPopover = (props: MoreOptionsReviewPopoverProps) => {
  const { review, isMyReview } = props

  const showMyReviewOptions = isMyReview ?? false

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
            className={clsx(
              'bg-white rounded-xl shadow-symmetrical overflow-hidden p-3 gap-2',
              'w-[20rem] max-h-[32rem] flex flex-col justify-center items-center'
            )}
          >
            {showMyReviewOptions
              ? (
                <MyReviewOptions
                  myReview={review}
                />
                )
              : (
                <ReviewOptions
                  review={review}
                />
                )}
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default MoreOptionsReviewPopover
