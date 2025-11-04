import type { FragranceCollectionPreviewFragment } from '@/generated/graphql'

export type FragranceCollectionWithHasFragrance = FragranceCollectionPreviewFragment & {
  hasFragrance: boolean
}