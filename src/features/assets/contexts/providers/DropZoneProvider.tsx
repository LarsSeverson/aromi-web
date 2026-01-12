import React from 'react'
import { DropZoneContext } from '../DropZoneContext'

export interface DropZoneProviderProps {
  isDragging?: boolean
  isDraggingWindow?: boolean
  isDisabled?: boolean
  allowMultiple?: boolean
  acceptedFileTypes?: string[]

  children?: React.ReactNode

  onOpen?: () => void
  onFilesDropped?: (files: File[]) => void
}

export const DropZoneProvider = (props: DropZoneProviderProps) => {
  const {
    isDragging = false,
    isDraggingWindow = false,
    isDisabled = false,
    allowMultiple = true,
    acceptedFileTypes = [],

    children,

    onOpen,
    onFilesDropped
  } = props

  return (
    <DropZoneContext.Provider
      value={{
        isDragging,
        isDraggingWindow,
        isDisabled,
        allowMultiple,
        acceptedFileTypes,

        onOpen,
        onFilesDropped
      }}
    >
      {children}
    </DropZoneContext.Provider>
  )
}