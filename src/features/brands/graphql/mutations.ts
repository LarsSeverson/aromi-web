import { gql } from '@/generated'

export const VOTE_ON_BRAND_MUTATION = gql(/* GraphQL */`
  mutation VoteOnBrandMutation(
    $input: VoteOnBrandInput!
  ) {
    voteOnBrand(input: $input) {
      ...BrandPreview
    }
  }
`)
