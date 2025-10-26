import type { FragranceCollectionPreviewFragment } from '@/generated/graphql'
import { useRef, useState, useMemo } from 'react'
import type { FragranceCollectionWithHasFragrance } from '../types'

export const useFragranceSelection = (collections: FragranceCollectionWithHasFragrance[]) => {
  const added = useRef(new Set<string>())
  const removed = useRef(new Set<string>())
  const duplicated = useRef(new Set<string>())

  const [hasModified, setHasModified] = useState(false)

  const originalMap = useMemo(() => {
    return collections.reduce(
      (acc, c) => {
        acc.set(c.id, c.hasFragrance)
        return acc
      },
      new Map<string, boolean>()
    )
  }, [collections])

  const toggleSelection = (collection: FragranceCollectionPreviewFragment) => {
    setHasModified(true)

    const id = collection.id
    const originallyHad = originalMap.get(id) ?? false
    const wasAdded = added.current.has(id)
    const wasRemoved = removed.current.has(id)
    const wasDuplicated = duplicated.current.has(id)

    if (originallyHad) {
      if (wasRemoved) removed.current.delete(id)
      else removed.current.add(id)

      if (wasRemoved && !wasDuplicated) duplicated.current.add(id)
      else if (!wasRemoved && wasDuplicated) duplicated.current.delete(id)

      return
    }

    if (wasAdded) added.current.delete(id)
    else added.current.add(id)
  }

  const clearModifications = () => {
    added.current.clear()
    removed.current.clear()
    setHasModified(false)
  }

  return { added, removed, duplicated, hasModified, toggleSelection, clearModifications }
}
