import React from 'react'
import { DropZoneContext } from '../DropZoneContext'

export interface DropZoneProviderProps {
  isDragging?: boolean
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
        isDisabled,
        allowMultiple,
        acceptedFileTypes,
        isDragging,

        onOpen,
        onFilesDropped
      }}
    >
      {children}
    </DropZoneContext.Provider>
  )
}