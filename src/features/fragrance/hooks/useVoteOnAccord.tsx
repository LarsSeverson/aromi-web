import { type NodeWithEdges } from '@/common/pagination'
import { type VoteOnAccordMutation, type VoteOnAccordInput } from '@/generated/graphql'
import { VOTE_ON_ACCORD_MUTATION } from '@/graphql/mutations/FragranceMutations'
import { type ApolloCache, type ApolloError, type FetchResult, makeReference, type Reference, useMutation } from '@apollo/client'
import { ResultAsync } from 'neverthrow'

export const useVoteOnAccord = () => {
  const [
    voteOnAccordInner,
    { data, loading, error }
  ] = useMutation(VOTE_ON_ACCORD_MUTATION)

  // const handleUpdateCachedAccords = (
  //   cache: ApolloCache<unknown>,
  //   existing: NodeWithEdges<Reference>,
  //   incoming: VoteOnAccordMutation['voteOnAccord']
  // ): NodeWithEdges<Reference> => {
  //   const newAccordId = cache.identify(incoming)
  //   if (newAccordId == null) return existing

  //   const newAccordRef = makeReference(newAccordId)
  //   const newEdges = existing
  //     .edges
  // }

  // const handleUpdateCache = (
  //   cache: ApolloCache<unknown>,
  //   result: FetchResult<VoteOnAccordMutation>,
  //   fragranceId?: number | undefined
  // ) => {
  //   const incoming = result.data?.voteOnAccord

  //   if (incoming == null) return

  //   cache
  //     .modify({
  //       id: cache.identify({
  //         __typename: 'Fragrance',
  //         id: fragranceId
  //       }),
  //       fields: {
  //         accords: (existing = { edges: [] }) => handleUpdateCachedAccords(cache, existing as NodeWithEdges<Reference>, incoming)
  //       }
  //     })
  // }

  const voteOnAccord = (input: VoteOnAccordInput) => {
    return ResultAsync
      .fromPromise(
        voteOnAccordInner({ variables: { input } }),
        error => error as ApolloError
      )
  }

  return {
    data,
    loading,
    error,

    voteOnAccord
  }
}
