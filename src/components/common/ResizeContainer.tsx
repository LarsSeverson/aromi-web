import React, { useEffect, useRef } from 'react'

export interface ResizeContainerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onResize'> {
  children?: React.ReactNode
  onResize?: (rect: DOMRect) => void
}

export const ResizeContainer = (props: ResizeContainerProps) => {
  const { children, onResize, ...rest } = props
  const ref = useRef<HTMLDivElement>(null)
  const resizeTimer = useRef<ReturnType<typeof setTimeout>>(null)

  useEffect(() => {
    const observer = new ResizeObserver(entries => {
      if (resizeTimer.current != null) clearTimeout(resizeTimer.current)

      resizeTimer.current = setTimeout(() => {
        entries.forEach(entry => onResize?.(entry.contentRect))
      }, 300)
    })

    if (ref.current != null) observer.observe(ref.current)

    return () => {
      observer.disconnect()
      if (resizeTimer.current != null) clearTimeout(resizeTimer.current)
    }
  }, [onResize])

  return (
    <div
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
}
