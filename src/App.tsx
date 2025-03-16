import React from 'react'
import './styles/output.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Home } from './pages/Home'
import MainLayout from './layouts/MainLayout'
import Search from './pages/Search'
import { ClientProvider } from './contexts/providers/ClientProvider'
import { AuthProvider } from './contexts/providers/AuthProvider'

const App = () => {
  return (
    <ClientProvider>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path='home' element={<Home />} />
              <Route path='search' element={<Search />} />
              <Route path='community' element={<Search />} />
              <Route path='profile' element={<Search />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </ClientProvider>
  )
}

export default App
