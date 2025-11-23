import React from 'react'

export const useAuthDialogs = () => {
  const [isLogInDialogOpen, setIsLogInDialogOpen] = React.useState(false)
  const [isSignUpDialogOpen, setIsSignUpDialogOpen] = React.useState(false)

  const openLogInDialog = React.useCallback(
    () => {
      setIsSignUpDialogOpen(false)
      setIsLogInDialogOpen(true)
    },
    []
  )

  const closeLogInDialog = React.useCallback(
    () => {
      setIsLogInDialogOpen(false)
    },
    []
  )

  const openSignUpDialog = React.useCallback(
    () => {
      setIsLogInDialogOpen(false)
      setIsSignUpDialogOpen(true)
    },
    []
  )

  const closeSignUpDialog = React.useCallback(
    () => {
      setIsSignUpDialogOpen(false)
    },
    []
  )

  const closeAllDialogs = React.useCallback(
    () => {
      setIsLogInDialogOpen(false)
      setIsSignUpDialogOpen(false)
    },
    []
  )

  return {
    isLogInDialogOpen,
    setIsLogInDialogOpen,
    openLogInDialog,
    closeLogInDialog,

    isSignUpDialogOpen,
    setIsSignUpDialogOpen,
    openSignUpDialog,
    closeSignUpDialog,

    closeAllDialogs
  }
}