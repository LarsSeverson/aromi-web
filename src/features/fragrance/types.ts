import { type Fragrance, type User, type FragranceImageSummaryFragment } from '@/generated/graphql'

export type IFragrancePageUser = Pick<User,
'id' | 'username'>

export interface IFragranceSummary extends Pick<Fragrance,
'id' | 'brand' | 'name' | 'rating' | 'reviewsCount' | 'reviewDistribution' | 'votes'> {
  images: FragranceImageSummaryFragment[]
}

export interface IFragrancePreviewSummary extends Omit<IFragranceSummary, 'reviewsCount' | 'reviewDistribution'> {}
