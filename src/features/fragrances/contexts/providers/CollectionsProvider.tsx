import { useToastMessage } from '@/hooks/useToastMessage'
import React, { useCallback } from 'react'
import { useMoveFragranceCollections } from '../../hooks/useMoveFragranceCollections'
import { useDeleteFraganceCollection } from '../../hooks/useDeleteFragranceCollection'
import { useUserCollections } from '@/features/users'
import { mergeItems } from '../../utils/functions'
import type { AllFragranceCollectionFragment, DeleteFragranceCollectionInput } from '@/generated/graphql'
import { useDebounce } from '@/hooks/useDebounce'
import type { Nullable } from '@/utils/util'
import { arrayMove } from '@dnd-kit/sortable'
import { CollectionsContext } from '../CollectionsContext'

export interface CollectionsProviderProps {
  userId: string
  children?: React.ReactNode
}

export const CollectionsProvider = (props: CollectionsProviderProps) => {
  const { userId, children } = props

  const { toastMessage, toastError } = useToastMessage()

  const { moveCollections } = useMoveFragranceCollections()
  const { deleteCollection: deleteCollectionInternal } = useDeleteFraganceCollection()

  const {
    collections,
    isLoading,
    isLoadingMore,

    loadMore: loadMoreInternal
  } = useUserCollections(userId)

  const [internalCollections, setInternalCollections] = React.useState<AllFragranceCollectionFragment[]>([])
  const [previousCollections, setPreviousCollections] = React.useState<AllFragranceCollectionFragment[]>([])
  const [previousId, setPreviousId] = React.useState<string | null>(null)

  if (collections !== previousCollections || userId !== previousId) {
    setPreviousCollections(collections)
    setPreviousId(userId)

    if (userId === previousId) {
      setInternalCollections(mergeItems(internalCollections, collections))
    } else {
      setInternalCollections(collections)
    }
  }

  const handleMoveCollections = useDebounce(
    async (rangeStart: string, insertBefore: Nullable<string>) => {
      const result = await moveCollections({ rangeStart, insertBefore })

      if (result.isErr()) {
        toastError('')
      }
    },
    undefined,
    [userId]
  )

  const handleLoadMore = useCallback(
    () => {
      loadMoreInternal()
    },
    [loadMoreInternal]
  )

  const moveCollection = useCallback((
    movedId: string,
    beforeId: Nullable<string>,
    optimisticItems?: AllFragranceCollectionFragment[]
  ) => {
    if (optimisticItems != null) {
      setInternalCollections(optimisticItems)
    }

    handleMoveCollections(movedId, beforeId)
  }, [handleMoveCollections])

  const moveCollectionLeft = (collectionId: string) => {
    const index = internalCollections.findIndex(c => c.id === collectionId)
    if (index <= 0) return

    const beforeId = internalCollections[index - 1].id
    const updateCollections = arrayMove(internalCollections, index, index - 1)

    moveCollection(collectionId, beforeId, updateCollections)
  }

  const moveCollectionRight = (collectionId: string) => {
    const index = internalCollections.findIndex(c => c.id === collectionId)
    if (index === -1 || index >= internalCollections.length - 1) return

    const beforeId = internalCollections[index + 1].id
    const updateCollections = arrayMove(internalCollections, index, index + 1)

    moveCollection(collectionId, beforeId, updateCollections)
  }

  const canMoveCollectionLeft = (collectionId: string) => {
    const index = internalCollections.findIndex(c => c.id === collectionId)
    return index > 0
  }

  const canMoveCollectionRight = (collectionId: string) => {
    const index = internalCollections.findIndex(c => c.id === collectionId)
    return index !== -1 && index < internalCollections.length - 1
  }

  const deleteCollection = (input: DeleteFragranceCollectionInput) => {
    return deleteCollectionInternal(input)
      .andTee(() => {
        setInternalCollections(internalCollections.filter(c => c.id !== input.collectionId))
        toastMessage('Changes saved')
      })
      .orTee(() => {
        toastError('')
      })
  }

  return (
    <CollectionsContext.Provider
      value={{
        collections: internalCollections,
        isLoading,
        isLoadingMore,

        loadMore: handleLoadMore,

        moveCollection,
        moveCollectionLeft,
        moveCollectionRight,

        canMoveCollectionLeft,
        canMoveCollectionRight,

        deleteCollection
      }}
    >
      {children}
    </CollectionsContext.Provider>
  )
}
