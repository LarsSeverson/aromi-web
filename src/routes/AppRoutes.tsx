import { useAuthContext } from '@/contexts/AuthContext'
import MainLayout from '@/layouts/MainLayout'
import { Home } from '@/pages/Home'
import Search from '@/pages/Search'
import React from 'react'
import { Route, Routes } from 'react-router'

const AppRoutes = () => {
  const { initialized } = useAuthContext()

  if (!initialized) return null

  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='search' element={<Search />} />
        <Route path='community' element={<Search />} />
        <Route path='profile' element={<Search />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
