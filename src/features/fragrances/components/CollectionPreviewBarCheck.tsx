import React, { useState } from 'react'
import { Checkbox } from '@base-ui-components/react'
import CollectionPreviewBar from './CollectionPreviewBar'
import { BsCheck } from 'react-icons/bs'
import clsx from 'clsx'
import { useSaveFragranceContext } from '../contexts/SaveFragranceContext'
import type { FragranceCollectionWithHasFragrance } from '../types'

export interface CollectionPreviewBarCheckProps {
  defaultChecked?: boolean
  collection: FragranceCollectionWithHasFragrance
}

const CollectionPreviewBarCheck = (props: CollectionPreviewBarCheckProps) => {
  const { collection, defaultChecked = false } = props

  const { toggleSelection } = useSaveFragranceContext()

  const [isChecked, setIsChecked] = useState(defaultChecked)

  const toggleChecked = () => {
    toggleSelection(collection)
    setIsChecked(prev => !prev)
  }

  return (
    <div
      role='button'
      className='w-full flex items-center px-2 pr-4 py-0 hover:backdrop-brightness-95 gap-2 select-none cursor-pointer'
      tabIndex={0}
      onClick={toggleChecked}
    >
      <CollectionPreviewBar
        collection={collection}
        className='flex-1'
      />

      <Checkbox.Root
        checked={isChecked}
        className={clsx(
          'shrink-0 w-5 h-5 flex items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-sinopia focus-visible:outline-offset-2',
          'data-[unchecked]:border data-[unchecked]:border-gray-300 data-[unchecked]:bg-transparent',
          'data-[checked]:bg-sinopia ml-auto border-red-400 cursor-pointer'
        )}
        onClick={(e) => { e.stopPropagation() }}
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
