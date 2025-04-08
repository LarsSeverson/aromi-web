import React, { useState } from 'react'
import { Checkbox } from '@base-ui-components/react'
import CollectionPreviewBar, { type BarCollectionPreview } from './CollectionPreviewBar'
import { BsCheck } from 'react-icons/bs'
import clsx from 'clsx'

export interface CollectionPreviewBarCheckProps {
  collection: BarCollectionPreview
  defaultChecked?: boolean
}

const CollectionPreviewBarCheck = (props: CollectionPreviewBarCheckProps) => {
  const { collection, defaultChecked = false } = props
  const [checked, setChecked] = useState(defaultChecked)

  const toggleChecked = () => {
    setChecked((prev) => !prev)
  }

  return (
    <div
      className='w-full flex items-center px-2 py-0 active:scale-[0.99] hover:backdrop-brightness-95 gap-2 cursor-pointer'
      onClick={toggleChecked}
    >
      <CollectionPreviewBar
        collection={collection}
        className='flex-1'
      />
      <Checkbox.Root
        checked={checked}
        className={clsx(
          'shrink-0 w-5 h-5 flex items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-sinopia focus-visible:outline-offset-2',
          'data-[unchecked]:border data-[unchecked]:border-gray-300 data-[unchecked]:bg-transparent',
          'data-[checked]:bg-sinopia ml-auto'
        )}
        onCheckedChange={setChecked}
      >
        <Checkbox.Indicator>
          <BsCheck
            color='white'
            size={18}
          />
        </Checkbox.Indicator>
      </Checkbox.Root>
    </div>
  )
}

export default CollectionPreviewBarCheck
