import type { Identifiable } from '@/utils/util'

export const mergeItems = <T extends Identifiable>(current: T[], incoming: T[]) => {
  const existingIds = new Set(current.map(i => i.id))
  const merged = [...current]

  for (const item of incoming) {
    if (!existingIds.has(item.id)) merged.push(item)
  }

  return merged
}