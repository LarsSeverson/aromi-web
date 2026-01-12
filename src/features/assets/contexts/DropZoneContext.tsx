import React from 'react'

export interface DropZoneContextValue {
  isDragging?: boolean
  isDraggingWindow?: boolean
  isDisabled?: boolean
  allowMultiple?: boolean
  acceptedFileTypes?: string[]

  onOpen?: () => void
  onFilesDropped?: (files: File[]) => void
}

export const DropZoneContext = React.createContext<DropZoneContextValue | undefined>(undefined)

export const useDropZoneContext = () => {
  const context = React.useContext(DropZoneContext)
  if (context == null) {
    throw new Error('useDropZoneContext must be used within a DropZoneProvider')
  }

  return context
}