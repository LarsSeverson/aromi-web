import type { NodeWithEdges } from '@/utils/pagination'
import type { CreateFragranceCollectionInput } from '@/generated/graphql'
import { CREATE_FRAGRANCE_COLLECTION_MUTATION } from '../graphql/mutations'
import { useMyContext } from '@/features/users'
import { useMutation } from '@apollo/client/react'
import type { Reference } from '@apollo/client'
import { wrapQuery } from '@/utils/util'
import { useCreateFragranceCollectionItem } from './useCreateFragranceCollectionItem'
import { ALL_FRAGRANCE_COLLECTION_FRAGMENT } from '../graphql/fragments'

export const useCreateFragranceCollection = () => {
  const { me } = useMyContext()

  const { createItem } = useCreateFragranceCollectionItem()

  const [createCollectionInner] = useMutation(
    CREATE_FRAGRANCE_COLLECTION_MUTATION,
    {
      update (cache, result) {
        const newCollection = result.data?.createFragranceCollection
        if (me == null) return
        if (newCollection == null) return

        cache.writeFragment({
          data: newCollection,
          fragment: ALL_FRAGRANCE_COLLECTION_FRAGMENT,
          fragmentName: 'AllFragranceCollection'
        })

        const meCacheId = cache.identify(me)

        cache.modify({
          id: meCacheId,
          fields: {
            collections: (existing = { edges: [] }, { toReference }) => {
              const typedExisting = existing as NodeWithEdges<Reference>

              const newEdge = {
                __typename: 'FragranceCollectionEdge',
                node: toReference(newCollection),
                cursor: ''
              }

              const oldEdges = typedExisting.edges

              return {
                ...typedExisting,
                edges: [newEdge, ...oldEdges]
              }
            }
          }
        })
      }
    }
  )

  const createCollection = (input: CreateFragranceCollectionInput) => {
    return wrapQuery(
      createCollectionInner({ variables: { input } })
    ).map(data => data.createFragranceCollection)
  }

  const createCollectionWithFragrance = (
    fragranceId: string,
    name = 'Untitled Collection'
  ) => {

    return createCollection({ name })
      .andThen(collection => createItem({ collectionId: collection.id, fragranceId }))
  }

  return {
    createCollection,
    createCollectionWithFragrance
  }
}
