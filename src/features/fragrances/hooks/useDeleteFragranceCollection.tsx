import { useMutation } from '@apollo/client/react'
import { DELETE_FRAGRANCE_COLLECTION_MUTATION } from '../graphql/mutations'
import { useMyContext } from '@/features/users'
import type { DeleteFragranceCollectionInput } from '@/generated/graphql'
import { wrapQuery } from '@/utils/util'
import type { Reference } from '@apollo/client'
import type { NodeWithEdges } from '@/utils/pagination'

export const useDeleteFraganceCollection = () => {
  const { me } = useMyContext()
  const [deleteCollectionInner] = useMutation(DELETE_FRAGRANCE_COLLECTION_MUTATION)

  const deleteCollection = (input: DeleteFragranceCollectionInput) => {
    return wrapQuery(
      deleteCollectionInner({
        variables: { input },
        update (cache, { data }) {
          const deletedCollectionId = data?.deleteFragranceCollection.id
          if (me == null) return
          if (deletedCollectionId == null) return

          cache.modify({
            id: cache.identify(me),
            fields: {
              collections: (existing = { edges: [] }, { readField }) => {
                const typedExisting = existing as NodeWithEdges<Reference>

                const newEdges = typedExisting.edges.filter(
                  edge => readField('id', edge.node) !== deletedCollectionId
                )

                return {
                  ...typedExisting,
                  edges: newEdges
                }
              }
            }
          })
        }
      })
    ).map(data => data.deleteFragranceCollection)
  }

  return {
    deleteCollection
  }
}