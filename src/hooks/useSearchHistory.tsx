import type { SearchItem } from '@/utils/util'
import { Result } from 'neverthrow'
import React from 'react'

const STORAGE_KEY = 'search-history'

export const useSearchHistory = () => {
  const [history, setHistory] = React.useState<SearchItem[]>([])

  React.useEffect(() => {
    const storedHistory = localStorage.getItem(STORAGE_KEY)

    if (storedHistory != null) {
      const history = Result.fromThrowable(
        () => JSON.parse(storedHistory) as SearchItem[],
        () => []
      )()

      setHistory(history.unwrapOr([]))
    }
  }, [])

  const save = (newHistory: SearchItem[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory))
    setHistory(newHistory)
  }

  const addTerm = (item: SearchItem) => {
    const historyItem = { ...item, type: 'history' as const }

    const newHistory = [
      historyItem,
      ...history.filter(storedItem => storedItem.term !== item.term)
    ].slice(0, 10)

    save(newHistory)
  }

  const deleteTerm = (item: SearchItem) => {
    const newHistory = history.filter(storedItem => storedItem.term !== item.term)
    save(newHistory)
  }

  const clearAll = () => {
    save([])
  }

  return {
    history,
    addTerm,
    deleteTerm,
    clearAll
  }
}