import { useDebounce } from '@/hooks/useDebounce'
import { useFragranceCollectionItems } from '../../hooks/useFragranceCollectionItems'
import { useMoveFragranceCollectionItems } from '../../hooks/useMoveFragranceCollectionItems'
import { useToastMessage } from '@/hooks/useToastMessage'
import { useCallback, useState } from 'react'
import type { Nullable } from '@/utils/util'
import { CollectionItemsContext } from '../CollectionItemsContext'
import { mergeItems } from '../../utils/functions'
import type { AllFragranceCollectionItemFragment } from '@/generated/graphql'
import { useDeleteFragranceCollectionItem } from '../../hooks/useDeleteFragranceCollectionItem'
import { arrayMove } from '@dnd-kit/sortable'

export interface CollectionItemsProviderProps {
  collectionId: string
  children: React.ReactNode
}

export const CollectionItemsProvider = (props: CollectionItemsProviderProps) => {
  const { collectionId, children } = props

  const { toastMessage, toastError } = useToastMessage()

  const { moveItems } = useMoveFragranceCollectionItems()
  const { deleteItem: deleteItemInternal } = useDeleteFragranceCollectionItem()

  const {
    items,
    isLoading,
    isLoadingMore,

    loadMore: loadMoreInternal
  } = useFragranceCollectionItems(collectionId)

  const [internalItems, setInternalItems] = useState(items)
  const [prevItems, setPrevItems] = useState(items)
  const [prevId, setPrevId] = useState(collectionId)

  if (items !== prevItems || collectionId !== prevId) {
    setPrevItems(items)
    setPrevId(collectionId)

    if (collectionId === prevId) setInternalItems(mergeItems(internalItems, items))
    else setInternalItems(items)
  }

  const handleMoveItem = useDebounce(
    async (rangeStart: string, insertBefore: Nullable<string>) => {
      const res = await moveItems({ collectionId, rangeStart, insertBefore })

      res.match(
        () => {
          // do nothing
        },
        _ => {
          toastError('')
        }
      )
    },
    undefined,
    [collectionId]
  )

  const loadMore = useCallback(
    () => {
      loadMoreInternal()
    },
    [loadMoreInternal]
  )

  const moveItem = useCallback((
    movedId: string,
    beforeId: Nullable<string>,
    optimisticItems?: AllFragranceCollectionItemFragment[]
  ) => {
    if (optimisticItems != null) {
      setInternalItems(optimisticItems)
    }

    handleMoveItem(movedId, beforeId)
  }, [handleMoveItem])

  const moveItemLeft = (itemId: string) => {
    const index = internalItems.findIndex(i => i.id === itemId)
    if (index <= 0) return

    const beforeId = internalItems[index - 1].id
    const updatedItems = arrayMove(internalItems, index, index - 1)

    moveItem(itemId, beforeId, updatedItems)
  }

  const moveItemRight = (itemId: string) => {
    const index = internalItems.findIndex(i => i.id === itemId)
    if (index === -1 || index >= internalItems.length - 1) return

    const beforeId = internalItems.at(index + 2)?.id ?? null
    const updatedItems = arrayMove(internalItems, index, index + 1)

    moveItem(itemId, beforeId, updatedItems)
  }

  const canMoveItemLeft = useCallback(
    (itemId: string) => {
      const index = internalItems.findIndex(i => i.id === itemId)
      return index > 0
    },
    [internalItems]
  )

  const canMoveItemRight = useCallback(
    (itemId: string) => {
      const index = internalItems.findIndex(i => i.id === itemId)
      return index !== -1 && index < internalItems.length - 1
    },
    [internalItems]
  )

  const deleteItem = async (itemId: string) => {
    const res = await deleteItemInternal({ collectionId, itemId })

    res.match(
      () => {
        setInternalItems(internalItems.filter(i => i.id !== itemId))
        toastMessage('Changes saved')
      },
      _ => {
        toastError('')
      }
    )
  }

  return (
    <CollectionItemsContext.Provider
      value={{
        items: internalItems,
        isLoading,
        isLoadingMore,

        loadMore,

        moveItem,
        moveItemLeft,
        moveItemRight,

        canMoveItemLeft,
        canMoveItemRight,

        deleteItem
      }}
    >
      {children}
    </CollectionItemsContext.Provider>
  )
}