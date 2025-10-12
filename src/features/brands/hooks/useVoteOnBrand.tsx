import { useMutation } from '@apollo/client/react'
import { VOTE_ON_BRAND_MUTATION } from '../graphql/mutations'
import type { VoteOnBrandInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'

export const useVoteOnBrand = () => {
  const [voteOnBrandInner] = useMutation(VOTE_ON_BRAND_MUTATION)

  const voteOnBrand = (input: VoteOnBrandInput) => {
    return wrapQuery(voteOnBrandInner({ variables: { input } })).map(data => data.voteOnBrand)
  }

  return { voteOnBrand }
}