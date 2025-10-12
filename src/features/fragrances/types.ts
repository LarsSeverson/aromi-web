import { type Fragrance, type User, type FragranceImageSummaryFragment, type FragranceAccord, type FragranceNote, type FragranceTrait } from '@/generated/graphql'

export type IFragrancePageUser = Pick<User,
'id' | 'username'>

export interface IFragranceSummary extends Pick<Fragrance,
'id' | 'brand' | 'name' | 'rating' | 'reviewsCount' | 'reviewDistribution' | 'votes'> {
  images: FragranceImageSummaryFragment[]
}

export interface IFragrancePreviewSummary extends Omit<IFragranceSummary, 'reviewsCount' | 'reviewDistribution'> {}

export interface IFragranceAccordSummary extends Omit<FragranceAccord, ''> {}
export interface IFragranceNoteSummary extends Omit<FragranceNote, ''> {}

export const ratingMap = {
  0: 'Select your rating',
  1: 'Terrible',
  2: 'Poor',
  3: 'Average',
  4: 'Good',
  5: 'Excellent'
}

export interface IFragranceTraitSummary extends Omit<FragranceTrait, ''> {}
