import React from 'react'
import SearchInput from './SearchInput'
import { useSearchHistory } from '@/hooks/useSearchHistory'
import { useSearchFragrances } from '@/features/fragrances'
import type { SearchItem } from './SearchPopoverListItem'
import { useDebounce } from '@/hooks/useDebounce'
import { useNavigate, useSearch } from '@tanstack/react-router'
import TopBarSearchFilter from './TopBarSearchFilter'

const TopBarSearch = () => {
  const { term } = useSearch({ strict: false }) ?? {}
  const navigate = useNavigate()

  const { history, addTerm, deleteTerm } = useSearchHistory()
  const { fragrances, refresh } = useSearchFragrances({ term, pagination: { first: 10 } })

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
    navigate({ to: '/search/fragrances', search: { term } })
  }

  const handleClearOneHistory = (term: string) => {
    deleteTerm(term)
  }

  return (
    <div
      className='flex w-full items-center gap-4'
    >
      <SearchInput
        defaultValue={term}
        items={allItems}
        onValueChange={handleOnValueChange}
        onSearch={handleOnSearch}
        onClearOneHistory={handleClearOneHistory}
      />

      {term != null && (
        <TopBarSearchFilter />
      )}
    </div>
  )
}

export default TopBarSearch
