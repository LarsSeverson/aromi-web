import { Popover } from '@base-ui-components/react'
import React from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'
import clsx from 'clsx'
import type { AllFragranceReviewFragment } from '@/generated/graphql'
import MyReviewOptions from './MyReviewOptions'
import { useMyContext } from '@/features/users'

export interface MoreOptionsReviewPopoverProps {
  review: AllFragranceReviewFragment
}

const MoreOptionsReviewPopover = (props: MoreOptionsReviewPopoverProps) => {
  const { review } = props
  const { author } = review
  const { id } = author

  const { me } = useMyContext()

  const showMyReviewOptions = me?.id === id

  if (!showMyReviewOptions) return null

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
            className={clsx(
              'shadow-symmetrical gap-2 overflow-hidden rounded-xl bg-white p-3',
              'flex max-h-128 w-[20rem] flex-col items-center justify-center'
            )}
          >
            <MyReviewOptions
              review={review}
            />
            {/* : (
                 <ReviewOptions
                   review={review}
                 />
               ) */}
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default MoreOptionsReviewPopover
