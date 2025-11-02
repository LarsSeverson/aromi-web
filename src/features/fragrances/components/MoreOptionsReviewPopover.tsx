import { Popover } from '@base-ui-components/react'
import React from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'
import clsx from 'clsx'
import type { AllFragranceReviewFragment } from '@/generated/graphql'
import MyReviewOptions from './MyReviewOptions'
import { useMyContext } from '@/features/users'
import ReviewOptions from './ReviewOptions'

export interface MoreOptionsReviewPopoverProps {
  review: AllFragranceReviewFragment
}

const MoreOptionsReviewPopover = (props: MoreOptionsReviewPopoverProps) => {
  const { review } = props
  const { author } = review
  const { id } = author

  const { me } = useMyContext()

  const showMyReviewOptions = me?.id === id

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
              'w-[20rem] max-h-128 flex flex-col justify-center items-center'
            )}
          >
            {showMyReviewOptions
              ? (
                <MyReviewOptions
                  review={review}
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
