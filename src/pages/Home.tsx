import { HomeSuggestedSection } from '@/components/HomeSuggestedSection'
import { useMainLayoutContext } from '@/contexts/MainLayoutContext'
import { useScrollState } from '@/hooks/useScrollState'
import React from 'react'

export const Home = () => {
  const { mainScrollRef } = useMainLayoutContext()
  useScrollState(mainScrollRef, 'homeScrollPos')

  return (
    <HomeSuggestedSection />
  )
}
