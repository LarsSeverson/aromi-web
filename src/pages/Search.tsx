import { rootRoute } from '@/routes/__root'
import { createRoute } from '@tanstack/react-router'
import React from 'react'

export const searchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/search',
  component: () => <Search />
})

const Search = () => {
  return (
    <div>
      Search
    </div>
  )
}

export default Search
