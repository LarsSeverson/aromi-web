import { type NodeWithEdges } from '@/common/pagination'
import { useMyContext } from '@/features/user'
import { type CreateFragranceCollectionItemMutation } from '@/generated/graphql'
import { CREATE_FRAGRANCE_COLLECTION_ITEM_MUTATION } from '@/graphql/mutations/CollectionMutations'
import { type ApolloCache, type FetchResult, makeReference, type Reference, useMutation } from '@apollo/client'

export const useCreateCollectionItem = () => {
  const myCtx = useMyContext()

  const [
    createCollectionItemInner,
    { data, loading, error }
  ] = useMutation(CREATE_FRAGRANCE_COLLECTION_ITEM_MUTATION)

  const handleUpdateCachedItems = (
    cache: ApolloCache<unknown>,
    existing: NodeWithEdges<Reference>,
    incoming: CreateFragranceCollectionItemMutation['createFragranceCollectionItem']
  ) => {
    const newItemId = cache.identify(incoming)
    if (newItemId == null) return existing

    const newItemRef = makeReference(newItemId)
    const newEdges = existing
      .edges
      .concat({
        __typename: 'FragranceCollectionItemEdge',
        node: newItemRef
      })

    return {
      ...existing,
      edges: newEdges
    }
  }

  const handleUpdateCachedHasFragrance = () => true

  const handleUpdateCache = (
    cache: ApolloCache<unknown>,
    result: FetchResult<CreateFragranceCollectionItemMutation>,
    collectionId?: number | undefined
  ) => {
    const incoming = result.data?.createFragranceCollectionItem

    if (myCtx.me == null) return
    if (incoming == null) return

    cache
      .modify({
        id: cache.identify(
          {
            __typename: 'FragranceCollection',
            id: collectionId
          }
        ),
        fields: {
          items: (existing = { edges: [] }) => handleUpdateCachedItems(cache, existing as NodeWithEdges<Reference>, incoming),
          hasFragrance: handleUpdateCachedHasFragrance
        }
      })
  }

  const createCollectionItem: typeof createCollectionItemInner = async (options) => {
    return await createCollectionItemInner({
      ...options,
      update: (cache, result) => {
        handleUpdateCache(
          cache,
          result,
          options?.variables?.input.collectionId
        )
      }
    })
  }

  return {
    data,
    loading,
    error,

    createCollectionItem
  }
}
