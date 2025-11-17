import React from 'react'
import SearchInput from './SearchInput'
import { useSearchHistory } from '@/hooks/useSearchHistory'
import { useSearchFragrances } from '@/features/fragrances'
import type { SearchItem } from './SearchPopoverListItem'
import { useDebounce } from '@/hooks/useDebounce'

const TopBarSearch = () => {
  const { history, addTerm, deleteTerm } = useSearchHistory()
  const { fragrances, refresh } = useSearchFragrances()

  const historyItems = React.useMemo<SearchItem[]>(
    () => history.map(term => ({ term, type: 'history' })),
    [history]
  )

  const suggestionItems = React.useMemo<SearchItem[]>(
    () => fragrances.map(fragrance => ({
      term: fragrance.name,
      subtext: fragrance.brand.name,
      type: 'suggestion'
    })),
    [fragrances]
  )

  const allItems = React.useMemo<SearchItem[]>(
    () => historyItems.concat(suggestionItems),
    [historyItems, suggestionItems]
  )

  const handleSearchFragrances = useDebounce(
    (term: string) => {
      refresh({ term })
    },
    200
  )

  const handleOnValueChange = (value: string) => {
    handleSearchFragrances(value)
  }

  const handleOnSearch = (term: string) => {
    addTerm(term)
  }

  const handleClearOneHistory = (term: string) => {
    deleteTerm(term)
  }

  return (
    <div
      className='w-full'
    >
      <SearchInput
        items={allItems}
        onValueChange={handleOnValueChange}
        onSearch={handleOnSearch}
        onClearOneHistory={handleClearOneHistory}
      />
    </div>
  )
}

export default TopBarSearch
