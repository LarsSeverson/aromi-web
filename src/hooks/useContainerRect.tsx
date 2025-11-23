import React from 'react'

export const useContainerRect = (key: string) => {
  const [rect, setRect] = React.useState<DOMRect>(() => {
    const saved = sessionStorage.getItem(`containerRect-${key}`)
    if (saved != null) {
      const parsed = JSON.parse(saved) as DOMRect

      return new DOMRect(
        parsed.x,
        parsed.y,
        parsed.width,
        parsed.height
      )
    }

    return new DOMRect()
  })

  const updateRect = (newRect: DOMRect) => {
    setRect(newRect)
    sessionStorage.setItem(`containerRect-${key}`, JSON.stringify(newRect))
  }

  return { rect, updateRect }
}