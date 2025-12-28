import type { AllFragranceCollectionItemFragment } from '@/generated/graphql'

export const mergeItems = (current: AllFragranceCollectionItemFragment[], incoming: AllFragranceCollectionItemFragment[]) => {
  const existingIds = new Set(current.map(i => i.id))
  const merged = [...current]

  for (const item of incoming) {
    if (!existingIds.has(item.id)) merged.push(item)
  }

  return merged
}