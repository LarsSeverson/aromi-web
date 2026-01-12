import React from 'react'
import { DropZoneProvider } from '../../contexts/providers/DropZoneProvider'
import type { FileRejection } from './types'
import { useWindowDrag } from '@/hooks/useWindowDrag'
import { getDisplayFileSize } from '../../utils/helpers'

export interface DropZoneState {
  isDragging: boolean
  isDraggingWindow: boolean
  isDisabled: boolean
}

export interface DropZoneRootProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className'> {
  isTrigger?: boolean
  isDisabled?: boolean
  allowMultiple?: boolean
  acceptedFileTypes?: string[]

  maxFiles?: number
  maxFileSizeInBytes?: number

  className?: string | ((state: DropZoneState) => string)

  onFilesDropped?: (files: File[]) => void
  onFilesRejected?: (rejected: FileRejection[]) => void
}

const DropZoneRoot = (props: DropZoneRootProps) => {
  const {
    isTrigger = true,
    isDisabled = false,
    allowMultiple = true,
    acceptedFileTypes = [],

    maxFiles = 4,
    maxFileSizeInBytes = 20 * 1024 * 1024, // 20 MB

    className,

    onFilesDropped,
    onFilesRejected,

    children,
    ...rest
  } = props

  const { isDraggingWindow } = useWindowDrag()

  const inputRef = React.useRef<HTMLInputElement | null>(null)
  const dragCounter = React.useRef(0)

  const [isDragging, setIsDragging] = React.useState(false)

  const state: DropZoneState = {
    isDragging,
    isDraggingWindow,
    isDisabled
  }

  const resolvedClassName = typeof className === 'function'
    ? className(state)
    : className

  const validateFiles = (fileList: File[]) => {
    const accepted: File[] = []
    const rejected: FileRejection[] = []

    fileList.forEach((file) => {
      const errors: string[] = []

      if (acceptedFileTypes.length > 0 && !acceptedFileTypes.includes(file.type)) {
        errors.push(`File type ${file.type} is not accepted`)
      }

      if (file.size > maxFileSizeInBytes) {
        errors.push(`File size exceeds the maximum limit of ${getDisplayFileSize(maxFileSizeInBytes)}`)
      }

      if (errors.length > 0) {
        rejected.push({
          file,
          errors
        })
      } else {
        accepted.push(file)
      }
    })

    return {
      accepted: accepted.slice(0, maxFiles),
      rejected
    }
  }

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

    if (dragCounter.current <= 0) {
      setIsDragging(false)
      console.log(1)

      dragCounter.current = 0
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

    const { accepted, rejected } = validateFiles(files)

    if (accepted.length > 0) {
      onFilesDropped?.(accepted)
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

    const { accepted, rejected } = validateFiles(files)

    if (accepted.length > 0) {
      onFilesDropped?.(accepted)
    }

    if (rejected.length > 0) {
      onFilesRejected?.(rejected)
    }
  }

  return (
    <DropZoneProvider
      isDragging={isDragging}
      isDraggingWindow={isDraggingWindow}
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
        className={resolvedClassName}
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
