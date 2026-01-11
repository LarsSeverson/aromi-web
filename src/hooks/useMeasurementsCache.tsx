import type { VirtualItem } from '@tanstack/react-virtual'
import React from 'react'

export type MeasurementsCache = VirtualItem[]

const loadCache = (key: string): MeasurementsCache | null => {
  const raw = sessionStorage.getItem(key)
  const parsed = JSON.parse(raw ?? '') as MeasurementsCache
  const sanitized = Array.isArray(parsed) ? parsed : null

  return sanitized
}

const saveCache = (key: string, cache: MeasurementsCache) => {
  sessionStorage.setItem(key, JSON.stringify(cache))
}

export const useMeasurementsCache = (key: string) => {
  const measurementsRef = React.useRef<MeasurementsCache>(null)

  measurementsRef.current ??= loadCache(key)

  const getInitialMeasurements = React.useCallback(() => {
    return measurementsRef.current ?? undefined
  }, [])

  const save = React.useCallback(
    (snapshot: MeasurementsCache) => {
      saveCache(key, snapshot)
    },
    [key]
  )

  return {
    initialMeasurementsCache: getInitialMeasurements(),
    save
  }
}