import { useAuthContext } from '@/contexts/AuthContext'
import { AuthState } from '@/hooks/useAuth'
import LandingLayout from '@/layouts/LandingLayout'
import MainLayout from '@/layouts/MainLayout'
import { Home } from '@/pages/Home'
import Landing from '@/pages/Landing'
import Search from '@/pages/Search'
import React from 'react'
import { Route, Routes } from 'react-router'

const AuthRoutes = () => {
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

const NotAuthRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingLayout />}>
        <Route index element={<Landing />} />
      </Route>
    </Routes>
  )
}

export const AppRoutes = () => {
  const { userInfo } = useAuthContext()
  const authenticated = userInfo.state === AuthState.AUTHENTICATED

  return authenticated ? <AuthRoutes /> : <NotAuthRoutes />
}
