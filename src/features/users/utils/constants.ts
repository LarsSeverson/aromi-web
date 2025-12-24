import { RelationshipStatus } from '@/generated/graphql'

export const RELATIONSHIP_STATUS_IS_FOLLOWING = [
  RelationshipStatus.Following,
  RelationshipStatus.Mutual
] as RelationshipStatus[]