import type { VoidFn } from '@/utils/util'
import debounce from 'lodash/debounce'
import type { DebouncedFunc } from 'lodash'
import { useEffect, useRef } from 'react'

export const useDebounces = (
  delay = 400,
  deps: React.DependencyList = []
) => {
  const debouncers = useRef<Map<string, DebouncedFunc<VoidFn>>>(new Map())

  const run = (key: string, fn: VoidFn): void => {
    const existing = debouncers.current.get(key)

    if (existing != null) existing.cancel()

    const debounced = debounce(fn, delay)
    debouncers.current.set(key, debounced)
    debounced()
  }

  useEffect(() => {
    const current = debouncers.current
    debouncers.current = new Map()
    return () => {
      current.forEach(d => d.cancel.bind(null))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay, ...deps])

  return { run }
}
