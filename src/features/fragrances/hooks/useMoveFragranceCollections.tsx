import { useMutation } from '@apollo/client/react'
import { MOVE_FRAGRANCE_COLLECTIONS_MUTATION } from '../graphql/mutations'
import type { ApolloCache, Reference } from '@apollo/client'
import { type Nullable, wrapQuery } from '@/utils/util'
import type { MoveFragranceCollectionsInput, MoveFragranceCollectionsMutation } from '@/generated/graphql'
import { ALL_FRAGRANCE_COLLECTION_FRAGMENT } from '../graphql/fragments'
import { useMyContext } from '@/features/users'
import type { NodeWithEdges } from '@/utils/pagination'

export const useMoveFragranceCollections = () => {
  const [mutation] = useMutation(MOVE_FRAGRANCE_COLLECTIONS_MUTATION)

  const { me } = useMyContext()

  const handleUpdateCache = (
    cache: ApolloCache,
    data: Nullable<MoveFragranceCollectionsMutation>,
    input: MoveFragranceCollectionsInput
  ) => {
    const { insertBefore } = input
    const updatedCollections = data?.moveFragranceCollections

    if (updatedCollections == null) return
    if (me == null) return

    const movedIds = new Set(updatedCollections.map(item => item.id))
    const updatedCollectionsRefs = updatedCollections.map(item =>
      cache.writeFragment({
        fragment: ALL_FRAGRANCE_COLLECTION_FRAGMENT,
        fragmentName: 'AllFragranceCollection',
        data: item,
        broadcast: false
      })
    )

    const myCachedId = cache.identify(me)

    cache.modify({
      id: myCachedId,
      fields: {
        collections: (existing = { edges: [] }, { readField }) => {
          const fragments = existing as NodeWithEdges<Reference>

          const base = fragments.edges.filter(ref => !movedIds.has(readField('id', ref.node) ?? ''))

          const foundIndex = insertBefore == null
            ? -1
            : base.findIndex(ref => readField('id', ref.node) === insertBefore)

          const insertIndex = foundIndex === -1 ? base.length : foundIndex

          const newEdges = [
            ...base.slice(0, insertIndex),
            ...updatedCollectionsRefs.map(item => ({
              __typename: 'FragranceCollectionEdge',
              node: item,
              cursor: ''
            })),
            ...base.slice(insertIndex)
          ]

          return {
            ...fragments,
            edges: newEdges
          }
        }
      }
    })
  }

  const moveCollections = (input: MoveFragranceCollectionsInput) => {
    return wrapQuery(
      mutation({
        variables: { input },
        update: (cache, { data }) => { handleUpdateCache(cache, data, input) }
      })
    )
  }

  return {
    moveCollections
  }
}