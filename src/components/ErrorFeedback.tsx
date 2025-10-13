import React from 'react'

export interface ErrorFeedbackProps {
  error?: string | null
}

const ErrorFeedback = (props: ErrorFeedbackProps) => {
  const { error } = props

  if (error == null) return null

  return (
    <span
      className='text-red-600 text-sm text-center'
    >
      {error}
    </span>
  )
}

export default ErrorFeedback
