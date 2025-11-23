import { useNavigate, useSearch } from '@tanstack/react-router'
import React from 'react'

export const useRedirectHistory = () => {
  const navigate = useNavigate()
  const search = useSearch({ strict: false })

  React.useEffect(() => {
    const redirect = search.redirect
    if (redirect == null) return

    navigate({
      to: redirect,
      search: {},
      replace: true
    })
  }, [navigate, search])
}