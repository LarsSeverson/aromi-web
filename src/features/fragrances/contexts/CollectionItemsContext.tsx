import type { AllFragranceCollectionItemFragment } from '@/generated/graphql'
import type { Nullable } from '@/utils/util'
import React from 'react'

export interface CollectionItemsContextValue {
  items: AllFragranceCollectionItemFragment[]
  isLoading: boolean
  isLoadingMore: boolean

  loadMore: () => void

  moveItem: (itemId: string, insertBefore: Nullable<string>, optimisticItems: AllFragranceCollectionItemFragment[]) => void
  moveItemLeft: (itemId: string) => void
  moveItemRight: (itemId: string) => void

  canMoveItemLeft: (itemId: string) => boolean
  canMoveItemRight: (itemId: string) => boolean

  deleteItem: (itemId: string) => Promise<void>
}

export const CollectionItemsContext = React.createContext<CollectionItemsContextValue | undefined>(undefined)

export const useCollectionItemsContext = () => {
  const context = React.useContext(CollectionItemsContext)
  if (context == null) {
    throw new Error('useCollectionItemsContext must be used within a CollectionItemsProvider')
  }

  return context
}