import { type Fragrance, type User, type FragranceImageSummaryFragment, type FragranceReview, type FragranceAccord } from '@/generated/graphql'
import { type IUserSummary } from '../user/types'

export type IFragrancePageUser = Pick<User,
'id' | 'username'>

export interface IFragranceSummary extends Pick<Fragrance,
'id' | 'brand' | 'name' | 'rating' | 'reviewsCount' | 'reviewDistribution' | 'votes'> {
  images: FragranceImageSummaryFragment[]
}

export interface IFragrancePreviewSummary extends Omit<IFragranceSummary, 'reviewsCount' | 'reviewDistribution'> {}

export interface IFragranceReviewSummary extends Omit<FragranceReview, 'fragrance' | 'user'> {
  user: IUserSummary
}

export interface IFragranceAccordSummary extends Omit<FragranceAccord, ''> {}

export const ratingMap = {
  0: 'Select your rating',
  1: 'Terrible',
  2: 'Poor',
  3: 'Average',
  4: 'Good',
  5: 'Excellent'
}
