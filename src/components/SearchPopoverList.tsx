import React from 'react'
import SearchPopoverListItem from './SearchPopoverListItem'
import type { SearchItem } from '@/utils/util'

export interface SearchPopoverListProps {
  items?: SearchItem[]
  activeIndex?: number
  isClearFocused?: boolean
  onItemSelect?: (item: SearchItem) => void
  onClearOneHistory?: (item: SearchItem) => void
}

const SearchPopoverList = (props: SearchPopoverListProps) => {
  const {
    items = [],
    activeIndex,
    isClearFocused = false,
    onItemSelect,
    onClearOneHistory
  } = props

  return (
    <div
      className='scrollbar-thin flex-1 overflow-y-auto p-4 select-none'
      style={{ scrollbarGutter: 'stable' }}
    >
      {items.map(
        (item, index) => (
          <SearchPopoverListItem
            key={item.id ?? index}
            item={item}
            isActive={activeIndex === index}
            isClearFocused={index === activeIndex && isClearFocused}
            onItemSelect={onItemSelect}
            onClearOneHistory={onClearOneHistory}
          />
        ))
      }
    </div>
  )
}

export default SearchPopoverList
