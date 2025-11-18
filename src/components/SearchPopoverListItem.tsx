import clsx from 'clsx'
import React from 'react'
import { CgClose } from 'react-icons/cg'
import { FiSearch } from 'react-icons/fi'
import { MdHistory } from 'react-icons/md'

export interface SearchItem {
  term: string
  subtext?: string
  type: 'history' | 'suggestion'
}

export interface SearchPopoverListItemProps {
  item: SearchItem
  onItemSelect?: (item: SearchItem) => void
  onClearOneHistory?: (term: string) => void
}

const SearchPopoverListItem = (props: SearchPopoverListItemProps) => {
  const { item, onItemSelect, onClearOneHistory } = props
  const { term, subtext, type } = item

  const handleOnClearClick = (event: React.MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()

    onClearOneHistory?.(term)
  }

  const handleOptionMouseDown = (event: React.MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
  }

  return (
    <div
      role='option'
      tabIndex={0}
      onClick={onItemSelect?.bind(null, item)}
      className={clsx(
        'flex h-10 w-full items-center gap-4 px-4',
        'group rounded-md',
        'hover:bg-empty'
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
          className='ml-auto hidden cursor-pointer rounded-lg p-2 group-hover:block hover:bg-gray-200'
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
