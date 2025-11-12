import type { AllFragranceCollectionFragment } from '@/generated/graphql'
import { Popover } from '@base-ui-components/react'
import React from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'

export interface CollectionOptionsPopoverProps {
  collection: AllFragranceCollectionFragment
}

const CollectionOptionsPopover = (props: CollectionOptionsPopoverProps) => {
  return (
    <Popover.Root>
      <Popover.Trigger
        className='aspect-square cursor-pointer rounded-lg bg-white p-3 hover:brightness-95'
      >
        <HiDotsHorizontal
          size={24}
        />
      </Popover.Trigger>
    </Popover.Root>
  )
}

export default CollectionOptionsPopover
