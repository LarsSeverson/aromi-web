import debounce from 'lodash/debounce'
import type { DebouncedFunc } from 'lodash'
import type React from 'react'
import { useEffect, useRef } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useDebounce = <T extends (...args: any[]) => void>(
  fn: T,
  delay = 500,
  deps: React.DependencyList = []
) => {
  const fnRef = useRef(fn)

  const debouncedRef = useRef<DebouncedFunc<T>>(
    debounce((...args: Parameters<T>) => {
      fnRef.current(...args)
    }, delay)
  )

  useEffect(() => {
    fnRef.current = fn
  }, [fn])

  useEffect(() => {
    const ref = debouncedRef.current

    debouncedRef.current = debounce(
      (...args: Parameters<T>) => {
        fnRef.current(...args)
      },
      delay
    )

    return () => {
      ref?.cancel()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay, ...deps])

  return debouncedRef.current
}
