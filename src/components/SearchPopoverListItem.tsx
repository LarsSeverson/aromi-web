import type { SearchItem } from '@/utils/util'
import clsx from 'clsx'
import React from 'react'
import { CgClose } from 'react-icons/cg'
import { FiSearch } from 'react-icons/fi'
import { MdHistory } from 'react-icons/md'

export interface SearchPopoverListItemProps {
  item: SearchItem
  isActive?: boolean
  isClearFocused?: boolean
  onItemSelect?: (item: SearchItem) => void
  onClearOneHistory?: (item: SearchItem) => void
}

const SearchPopoverListItem = (props: SearchPopoverListItemProps) => {
  const {
    item, isActive = false, isClearFocused = false,
    onItemSelect, onClearOneHistory
  } = props

  const { term, subtext, type } = item

  const itemRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(
    () => {
      if (isActive) {
        itemRef.current?.scrollIntoView({ block: 'nearest' })
      }
    },
    [isActive]
  )

  const handleOnClick = () => {
    if (!isClearFocused) {
      onItemSelect?.(item)
    }
  }

  const handleOnClearClick = (event: React.MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()

    onClearOneHistory?.(item)
  }

  const handleOptionMouseDown = (event: React.MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
  }

  return (
    <div
      ref={itemRef}
      role='option'
      tabIndex={0}
      onClick={handleOnClick}
      className={clsx(
        'flex h-10 w-full items-center gap-4 px-4',
        'group rounded-md',
        'hover:bg-empty',
        isActive && 'bg-empty'
      )}
      onMouseDown={handleOptionMouseDown}
    >
      {type === 'history'
        ?
        (
          <MdHistory />
        )
        :
        (
          <FiSearch />
        )
      }

      <span
        className='truncate text-sm font-medium'
      >
        {term}
      </span>

      <span
        className='truncate text-xs text-black/70'
      >
        {subtext}
      </span>

      {type === 'history' && (
        <button
          type='button'
          className={clsx(
            'ml-auto cursor-pointer rounded-lg p-2',
            isActive ? 'block' : 'hidden group-hover:block',
            isClearFocused ? 'outline-sinopia outline-2' : 'hover:bg-gray-200'
          )}
          onMouseDown={handleOptionMouseDown}
          onClick={handleOnClearClick}
        >
          <CgClose />
        </button>
      )}

    </div>
  )
}

export default SearchPopoverListItem
