import React, { useEffect, useState } from 'react'
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

  useEffect(
    () => {
      setIsChecked(defaultChecked)
    },
    [defaultChecked]
  )

  return (
    <div
      role='button'
      className='flex h-full w-full cursor-pointer items-center gap-2 px-2 py-0 pr-4 select-none hover:bg-gray-100 '
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
          'focus-visible:outline-sinopia flex h-5 w-5 shrink-0 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2',
          'data-unchecked:border data-unchecked:border-gray-300 data-unchecked:bg-transparent',
          'data-checked:bg-sinopia ml-auto cursor-pointer border-red-400'
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
