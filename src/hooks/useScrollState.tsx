import type React from 'react'
import { useCallback, useEffect } from 'react'

export const useScrollState = (scrollRef: React.RefObject<HTMLDivElement | null>, sessionStorageKey: string) => {
  const setScroll = useCallback(() => {
    const savedScroll = window.sessionStorage.getItem(sessionStorageKey)

    if (savedScroll != null && scrollRef.current != null) {
      scrollRef.current.scrollTop = Number(savedScroll)
    }
  }, [scrollRef, sessionStorageKey])

  useEffect(() => {
    setScroll()
  }, [setScroll])

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current == null) return

      window.sessionStorage.setItem(sessionStorageKey, scrollRef.current.scrollTop.toString())
    }

    const ref = scrollRef.current
    ref?.addEventListener('scroll', handleScroll)

    return () => {
      ref?.removeEventListener('scroll', handleScroll)
    }
  }, [scrollRef, sessionStorageKey])

  return {
    setScroll
  }
}
