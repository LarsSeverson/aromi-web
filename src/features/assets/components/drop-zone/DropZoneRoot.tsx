import React from 'react'
import { DropZoneProvider } from '../../contexts/providers/DropZoneProvider'
import type { DropZoneFileRejection } from './types'

export interface DropZoneRootProps extends React.HTMLAttributes<HTMLDivElement> {
  isTrigger?: boolean
  isDisabled?: boolean
  allowMultiple?: boolean
  acceptedFileTypes?: string[]

  maxFiles?: number
  maxFileSizeInBytes?: number

  onFilesDropped?: (files: File[]) => void
  onFilesRejected?: (rejected: DropZoneFileRejection[]) => void
}

const DropZoneRoot = (props: DropZoneRootProps) => {
  const {
    isTrigger = true,
    isDisabled = false,
    allowMultiple = true,
    acceptedFileTypes = [],

    maxFiles = 4,
    maxFileSizeInBytes = 20 * 1024 * 1024, // 20 MB

    onFilesDropped,
    onFilesRejected,
    children,
    ...rest
  } = props

  const inputRef = React.useRef<HTMLInputElement | null>(null)
  const dragCounter = React.useRef(0)

  const [isDragging, setIsDragging] = React.useState(false)

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()

    dragCounter.current += 1

    if (e.dataTransfer.items?.length > 0) {
      setIsDragging(true)
    }
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()

    dragCounter.current -= 1

    if (dragCounter.current === 0) {
      setIsDragging(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()

    setIsDragging(false)
    dragCounter.current = 0

    const files = Array
      .from(e.dataTransfer.files)
      .slice(0, maxFiles)

    const acceptedFiles = files.filter(f => f.size <= maxFileSizeInBytes)

    const rejected = files
      .filter(f => f.size > maxFileSizeInBytes)
      .map(f => ({
        file: f,
        errors: ['File size exceeds the maximum limit']
      }))

    if (acceptedFiles.length > 0) {
      onFilesDropped?.(acceptedFiles)
    }

    if (rejected.length > 0) {
      onFilesRejected?.(rejected)
    }
  }

  const handleOnOpen = () => {
    if (isDisabled) return
    inputRef.current?.click()
  }

  const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files == null
      ? []
      : Array
        .from(e.target.files)
        .slice(0, maxFiles)

    const acceptedFiles = files.filter(f => f.size <= maxFileSizeInBytes)

    const rejected = files
      .filter(f => f.size > maxFileSizeInBytes)
      .map(f => ({
        file: f,
        errors: ['File size exceeds the maximum limit']
      }))

    if (acceptedFiles.length > 0) {
      onFilesDropped?.(acceptedFiles)
    }

    if (rejected.length > 0) {
      onFilesRejected?.(rejected)
    }
  }

  return (
    <DropZoneProvider
      isDragging={isDragging}
      isDisabled={isDisabled}
      allowMultiple={allowMultiple}
      acceptedFileTypes={acceptedFileTypes}

      onOpen={handleOnOpen}
      onFilesDropped={onFilesDropped}
    >
      <div
        onDragEnter={handleDragEnter}
        onDragOver={(e) => { e.preventDefault() }}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={isTrigger ? handleOnOpen : undefined}
        {...rest}
      >
        <input
          type="file"
          ref={inputRef}
          onChange={handleOnInputChange}
          accept={acceptedFileTypes.join(',')}
          multiple={allowMultiple}
          className="sr-only"
          tabIndex={-1}
        />

        {children}
      </div>
    </DropZoneProvider>
  )
}

export default DropZoneRoot
