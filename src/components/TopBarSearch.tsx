import React from 'react'
import SearchInput from './SearchInput'
import { useSearchHistory } from '@/hooks/useSearchHistory'
import { useSearchFragrances } from '@/features/fragrances'
import { useDebounce } from '@/hooks/useDebounce'
import { useNavigate, useSearch } from '@tanstack/react-router'
import TopBarSearchFilter from './TopBarSearchFilter'
import type { SearchItem } from '@/utils/util'
import { useRouteState } from '@/hooks/useRouteState'

const TopBarSearch = () => {
  const { isPosts } = useRouteState()

  const { term, ...restSearch } = useSearch({ strict: false }) ?? {}
  const navigate = useNavigate()

  const { history, addTerm, deleteTerm } = useSearchHistory()
  const { fragrances, refresh } = useSearchFragrances({ term, pagination: { first: 10 } })

  const suggestionItems = React.useMemo<SearchItem[]>(
    () => isPosts
      ? []
      : fragrances.map(fragrance => ({
        id: fragrance.id,
        term: fragrance.name,
        subtext: fragrance.brand.name,
        type: 'suggestion'
      })),
    [fragrances, isPosts]
  )

  const allItems = React.useMemo<SearchItem[]>(
    () => history.concat(suggestionItems),
    [history, suggestionItems]
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

  const handleOnSearch = (item: SearchItem) => {
    addTerm(item)

    const newSearch: Record<string, unknown> = {
      ...restSearch,
      term: item.term
    }

    if (item.type !== 'custom' && item.id != null) {
      navigate({
        to: '/fragrances/$id',
        params: { id: item.id },
        search: newSearch
      })

      return
    }

    if (isPosts) {
      newSearch.filter = 'posts'
    }

    navigate({ to: '/search', search: newSearch })
  }

  const handleClearOneHistory = (item: SearchItem) => {
    deleteTerm(item)
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
