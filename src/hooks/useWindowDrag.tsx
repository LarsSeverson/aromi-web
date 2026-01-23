import { useEffect, useRef, useState, useCallback } from 'react'

export interface UseWindowDragOptions {
  allowedFileTypes?: string[]
}

export const useWindowDrag = (options?: UseWindowDragOptions) => {
  const {
    allowedFileTypes = []
  } = options ?? {}

  const [isDraggingWindow, setIsDraggingWindow] = useState(false)
  const windowDragCounter = useRef(0)

  const handleDragEnter = useCallback((e: DragEvent) => {
    e.preventDefault()
    windowDragCounter.current += 1

    const items = e.dataTransfer?.items ?? []

    if (items.length > 0) {
      const hasAllowedFileType = allowedFileTypes.length === 0 || Array.from(items).some(item => allowedFileTypes.includes(item.type))

      setIsDraggingWindow(hasAllowedFileType)
    }
  }, [allowedFileTypes])

  const handleDragLeave = useCallback((e: DragEvent) => {
    e.preventDefault()
    windowDragCounter.current -= 1

    if (windowDragCounter.current <= 0) {
      windowDragCounter.current = 0
      setIsDraggingWindow(false)
    }
  }, [])

  const handleDrop = useCallback((e: DragEvent) => {
    e.preventDefault()
    windowDragCounter.current = 0
    setIsDraggingWindow(false)
  }, [])

  const handleDragOver = useCallback((e: DragEvent) => {
    e.preventDefault()
  }, [])

  useEffect(() => {
    window.addEventListener('dragenter', handleDragEnter)
    window.addEventListener('dragleave', handleDragLeave)
    window.addEventListener('dragover', handleDragOver)
    window.addEventListener('drop', handleDrop)

    return () => {
      window.removeEventListener('dragenter', handleDragEnter)
      window.removeEventListener('dragleave', handleDragLeave)
      window.removeEventListener('dragover', handleDragOver)
      window.removeEventListener('drop', handleDrop)
    }
  }, [handleDragEnter, handleDragLeave, handleDragOver, handleDrop])

  return { isDraggingWindow }
}