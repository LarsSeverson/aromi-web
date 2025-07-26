import type { FragranceReview } from '@/generated/graphql'
import type { IUserSummary } from '../user/types'

export interface IFragranceReviewSummary extends Omit<FragranceReview, 'fragrance' | 'user'> {
  user: IUserSummary
}
