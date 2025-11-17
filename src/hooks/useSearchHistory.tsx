import React from 'react'

const STORAGE_KEY = 'searchHistory'

export const useSearchHistory = () => {
  const [history, setHistory] = React.useState<string[]>([])

  React.useEffect(() => {
    const storedHistory = localStorage.getItem(STORAGE_KEY)
    if (storedHistory != null) {
      setHistory(JSON.parse(storedHistory) as string[])
    }
  }, [])

  const save = (newHistory: string[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newHistory))
    setHistory(newHistory)
  }

  const addTerm = (term: string) => {
    const newHistory = [term, ...history.filter(t => t !== term)].slice(0, 10)
    save(newHistory)
  }

  const deleteTerm = (term: string) => {
    const newHistory = history.filter(t => t !== term)
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