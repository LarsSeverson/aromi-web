import { useAddToCollections } from './useAddToCollections'
import { useDeleteFromCollections } from './useDeleteFromCollections'

export const useModifyCollections = () => {
  const { deleteFromCollections } = useDeleteFromCollections()
  const { addToCollections } = useAddToCollections()

  const modifyCollections = (
    modifications: Map<number, boolean>,
    fragranceId: number
  ) => {
    const additions: number[] = []
    const deletions: number[] = []

    modifications
      .forEach((isAdding, collectionId) => {
        if (isAdding) {
          additions.push(collectionId)
        } else {
          deletions.push(collectionId)
        }
      })

    return addToCollections(additions, fragranceId)
      .andThen(addedItems => deleteFromCollections(deletions, fragranceId)
        .map(deletedItems => ({ addedItems, deletedItems }))
      )
  }

  return {
    modifyCollections
  }
}
