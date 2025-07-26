import { type NodeWithEdges } from '@/common/pagination'
import { useMyContext } from '@/features/user/contexts/MyContext'
import { type CreateFragranceCollectionMutation } from '@/generated/graphql'
import { CREATE_FRAGRANCE_COLLECTION_MUTATION } from '../graphql/mutations'
import { type ApolloCache, type FetchResult, makeReference, type Reference, useMutation } from '@apollo/client'

export const useCreateCollection = () => {
  const myCtx = useMyContext()

  const [
    createFragranceCollection,
    { data, loading, error }
  ] = useMutation(
    CREATE_FRAGRANCE_COLLECTION_MUTATION,
    {
      update (cache, result) {
        handleUpdateCache(cache, result)
      }
    }
  )

  const handleUpdateMyCollections = (
    cache: ApolloCache<unknown>,
    existing: NodeWithEdges<Reference>,
    incoming: CreateFragranceCollectionMutation['createFragranceCollection']
  ) => {
    const newCollectionId = cache.identify(incoming)
    if (newCollectionId == null) return existing

    const newCollectionRef = makeReference(newCollectionId)
    const newEdges = (existing)
      .edges
      .slice()
      .unshift({
        __typename: 'FragranceCollectionEdge',
        node: newCollectionRef
      })

    return {
      ...existing,
      edges: newEdges
    }
  }

  const handleUpdateCache = (
    cache: ApolloCache<unknown>,
    result: FetchResult<CreateFragranceCollectionMutation>
  ) => {
    const incoming = result.data?.createFragranceCollection

    if (myCtx.me == null) return
    if (incoming == null) return

    cache
      .modify({
        id: cache.identify(myCtx.me),
        fields: {
          collections: (existing = { edges: [] }) => handleUpdateMyCollections(cache, existing as NodeWithEdges<Reference>, incoming)
        }
      })
  }

  return {
    data,
    loading,
    error,

    createFragranceCollection
  }
}
