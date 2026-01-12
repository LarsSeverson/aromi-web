import { useEffect, useRef, useState, useCallback } from 'react'

export const useWindowDrag = () => {
  const [isDraggingWindow, setIsDraggingWindow] = useState(false)
  const windowDragCounter = useRef(0)

  const handleDragEnter = useCallback((e: DragEvent) => {
    e.preventDefault()
    windowDragCounter.current += 1

    if ((e.dataTransfer?.items ?? []).length > 0) {
      setIsDraggingWindow(true)
    }
  }, [])

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