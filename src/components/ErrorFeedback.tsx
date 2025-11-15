import React from 'react'

export interface ErrorFeedbackProps {
  error?: string | null
}

const ErrorFeedback = (props: ErrorFeedbackProps) => {
  const { error } = props

  if (error == null) return null

  return (
    <span
      className='text-center text-sm text-red-700'
    >
      {error}
    </span>
  )
}

export default ErrorFeedback
