import { useLayoutEffect, useRef, useState } from 'react'

export interface UseResizeableOptions<T> {
  ref?: React.RefObject<T | null>
  debounce?: number
}

export const useResizeable = <T extends HTMLElement>(options: UseResizeableOptions<T> = {}) => {
  const {
    ref: providedRef,
    debounce = 150
  } = options

  const internalRef = useRef<T>(null)
  const activeRef = providedRef ?? internalRef

  const [rect, setRect] = useState<DOMRect>(new DOMRect())
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null)

  useLayoutEffect(
    () => {
      const element = activeRef.current

      if (element == null) return

      const observer = new ResizeObserver(([entry]) => {
        if (entry == null) {
          return
        }

        const update = () => {
          const boundingClientRect = element.getBoundingClientRect()
          setRect(boundingClientRect)
        }

        if (debounce != null) {
          if (timeoutRef.current != null) {
            clearTimeout(timeoutRef.current)
          }

          timeoutRef.current = setTimeout(update, debounce)

          return
        }

        update()
      })

      observer.observe(element)

      return () => {
        observer.disconnect()

        if (timeoutRef.current != null) {
          clearTimeout(timeoutRef.current)
        }
      }
    }, [activeRef, debounce])

  return {
    ref: activeRef,
    rect
  }
}