import { useCallback, useEffect, useRef } from 'react'

export const useTimer = () => {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const start = useCallback((
    fn: () => void,
    delay: number = 5 * 1000
  ) => {
    if (timer.current != null) clearTimeout(timer.current)
    timer.current = setTimeout(fn, delay)
  }, [])

  const clear = useCallback(() => {
    if (timer.current != null) {
      clearTimeout(timer.current)
      timer.current = null
    }
  }, [])

  useEffect(() => clear, [clear])

  return { start, clear }
}
