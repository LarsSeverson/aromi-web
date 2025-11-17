import React from 'react'
import type { SearchItem } from './SearchPopoverListItem'
import SearchPopoverListItem from './SearchPopoverListItem'

export interface SearchPopoverListProps {
  items?: SearchItem[]
  onItemSelect?: (item: SearchItem) => void
  onClearOneHistory?: (term: string) => void
}

const SearchPopoverList = (props: SearchPopoverListProps) => {
  const { items = [], onItemSelect, onClearOneHistory } = props

  return (
    <div
      className='scrollbar-thin flex-1 overflow-y-auto p-4'
      style={{ scrollbarGutter: 'stable' }}
    >
      {items.map(
        (item, index) => (
          <SearchPopoverListItem
            key={index}
            item={item}
            onItemSelect={onItemSelect}
            onClearOneHistory={onClearOneHistory}
          />
        ))
      }
    </div>
  )
}

export default SearchPopoverList
