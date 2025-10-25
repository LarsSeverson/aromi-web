import type { FragranceCollectionPreviewFragment } from '@/generated/graphql'

export const ratingMap = {
  0: 'Select your rating',
  1: 'Terrible',
  2: 'Poor',
  3: 'Average',
  4: 'Good',
  5: 'Excellent'
}

export type FragranceCollectionWithHasFragrance = FragranceCollectionPreviewFragment & {
  hasFragrance: boolean
}