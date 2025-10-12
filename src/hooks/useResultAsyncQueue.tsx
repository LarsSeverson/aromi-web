import { okAsync, type ResultAsync } from 'neverthrow'
import { useCallback, useRef, useState } from 'react'

export const useResultAsyncQueue = () => {
  const pendingCountRef = useRef(0)
  const tailRef = useRef<ResultAsync<unknown, unknown>>(okAsync(undefined))

  const [pendingCount, setPendingCount] = useState(0)

  const increment = useCallback(() => {
    pendingCountRef.current += 1
    setPendingCount(pendingCountRef.current)
  }, [])

  const decrement = useCallback(() => {
    pendingCountRef.current -= 1
    setPendingCount(pendingCountRef.current)
  }, [])

  const enqueue = useCallback(<T, E>(
    op: () => ResultAsync<T, E>
  ): ResultAsync<T, E> => {
    increment()

    const start = tailRef.current
      .map(() => undefined)
      .orElse(() => okAsync(undefined))

    const result = start.andThen(() =>
      op()
        .andTee(decrement)
        .orTee(decrement)
    )

    tailRef.current = result
      .map(() => undefined)
      .orElse(() => okAsync(undefined))

    return result
  }, [increment, decrement])

  return {
    pendingCount,
    enqueue
  }
}
