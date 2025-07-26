import { type NodeWithEdges } from '@/common/pagination'
import { useMyContext } from '@/features/user'
import { type DeleteFragranceCollectionItemMutation } from '@/generated/graphql'
import { DELETE_FRAGRANCE_COLLECTION_ITEM_MUTATION } from '../graphql/mutations'
import { type ApolloCache, type FetchResult, type Reference, useMutation } from '@apollo/client'
import { type ReadFieldFunction } from '@apollo/client/cache/core/types/common'

export const useDeleteCollectionItem = () => {
  const myCtx = useMyContext()

  const [
    deleteCollectionItemInner,
    { data, loading, error }
  ] = useMutation(DELETE_FRAGRANCE_COLLECTION_ITEM_MUTATION)

  const handleUpdateCachedItems = (
    deletedItemIds: Set<number>,
    existing: NodeWithEdges<Reference>,
    readField: ReadFieldFunction
  ) => {
    const edges = existing
      .edges
      .filter(edge => {
        const id: number | undefined = readField('id', edge.node)
        return id != null && !deletedItemIds.has(id)
      })

    return {
      ...existing,
      edges
    }
  }

  const handleUpdateCachedHasFragrance = () => false

  const handleUpdateCache = (
    cache: ApolloCache<unknown>,
    result: FetchResult<DeleteFragranceCollectionItemMutation>,
    collectionId?: number | undefined
  ) => {
    const incoming = result.data?.deleteFragranceCollectionItem

    if (collectionId == null) return
    if (myCtx.me == null) return
    if (incoming == null) return

    const deletedIds = new Set(incoming.map(inc => inc.id))

    cache
      .modify({
        id: cache.identify(
          {
            __typename: 'FragranceCollection',
            id: collectionId
          }
        ),
        fields: {
          items: (existing = { edges: [] }, { readField }) => {
            return handleUpdateCachedItems(deletedIds, existing as NodeWithEdges<Reference>, readField)
          },
          hasFragrance: handleUpdateCachedHasFragrance
        }
      })

    cache.gc()
  }

  const deleteCollectionItem: typeof deleteCollectionItemInner = async (options) => {
    return await deleteCollectionItemInner(
      {
        ...options,
        update: (cache, result) => {
          handleUpdateCache(
            cache,
            result,
            options?.variables?.input.collectionId
          )
        }
      }
    )
  }

  return {
    data,
    loading,
    error,

    deleteCollectionItem
  }
}
