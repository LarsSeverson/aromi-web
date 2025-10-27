import { useMyCollectionsHasFragrance } from '@/features/users'
import type { Nullable } from '@/utils/util'
import { createContext, useContext } from 'react'
import type { FragranceCollectionWithHasFragrance } from '../types'
import type { FragrancePreviewFragment } from '@/generated/graphql'
import { useFragranceSelection } from '../hooks/useFragranceSelection'
import { useAddFragranceToCollections } from '../hooks/useAddFragranceToCollections'
import { useRemoveFragranceFromCollections } from '../hooks/useRemoveFragranceFromCollections'
import { useToastMessage } from '@/hooks/useToastMessage'

export interface SaveFragranceContextValue extends ReturnType<typeof useMyCollectionsHasFragrance> {
  fragrance: FragrancePreviewFragment
  hasModified: boolean
  toggleSelection: (collection: FragranceCollectionWithHasFragrance) => void
  clearModifications: () => void
  submitChanges: () => Promise<void>
}

export interface SaveFragranceProviderProps {
  fragrance: FragrancePreviewFragment
  children: React.ReactNode
}

export const SaveFragranceContext = createContext<Nullable<SaveFragranceContextValue>>(undefined)

export const useSaveFragranceContext = () => {
  const context = useContext(SaveFragranceContext)
  if (context == null) {
    throw new Error('useSaveFragranceContext must be used within a SaveFragranceProvider')
  }

  return context
}

export const SaveFragranceProvider = (props: SaveFragranceProviderProps) => {
  const { fragrance, children } = props

  const { toastMessage, toastError } = useToastMessage()

  const myCollections = useMyCollectionsHasFragrance(fragrance.id)

  const {
    added,
    removed,
    duplicated,
    hasModified,
    toggleSelection,
    clearModifications
  } = useFragranceSelection(myCollections.collections)

  const { addFragrance } = useAddFragranceToCollections()
  const { removeFragrance } = useRemoveFragranceFromCollections()

  const submitChanges = async () => {
    const addedIds = Array.from(added.current)
    const dupedIds = Array.from(duplicated.current)

    const toAddIds = addedIds.concat(dupedIds)
    const toRemoveIds = Array.from(removed.current)

    if (toAddIds.length > 0) {
      const addRes = await addFragrance({ fragranceId: fragrance.id, collectionIds: toAddIds })

      addRes.match(
        () => {
          toastMessage('Changes saved')
        },
        error => {
          toastError(error.message)
        }
      )
    }

    if (toRemoveIds.length > 0) {
      const removeRes = await removeFragrance({ fragranceId: fragrance.id, collectionIds: toRemoveIds })

      removeRes.match(
        () => {
          toastMessage('Changes saved')
        },
        error => {
          toastError(error.message)
        }
      )
    }
  }

  return (
    <SaveFragranceContext.Provider
      value={{
        ...myCollections,
        fragrance,
        hasModified,
        toggleSelection,
        clearModifications,
        submitChanges
      }}
    >
      {children}
    </SaveFragranceContext.Provider>
  )
}