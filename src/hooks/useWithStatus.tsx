import { useCallback, useRef, useState } from 'react'
import type { ResultAsync } from 'neverthrow'

type Status = 'idle' | 'saving' | 'success' | 'error'

export const useWithStatus = () => {
  const [status, setStatus] = useState<Status>('idle')
  const inFlightRef = useRef(0)
  const hadErrorRef = useRef(false)

  const withStatus = useCallback(<T, E>(
    op: () => ResultAsync<T, E>
  ): ResultAsync<T, E> => {
    inFlightRef.current += 1
    if (inFlightRef.current === 1) setStatus('saving')

    const finish = () => {
      inFlightRef.current -= 1
      if (inFlightRef.current === 0) {
        setStatus(hadErrorRef.current ? 'error' : 'success')
        hadErrorRef.current = false
      }
    }

    return op()
      .andTee(finish)
      .orTee(() => {
        hadErrorRef.current = true
        finish()
      })
  }, [])

  const reset = useCallback(() => {
    inFlightRef.current = 0
    hadErrorRef.current = false
    setStatus('idle')
  }, [])

  return { status, withStatus, reset }
}
