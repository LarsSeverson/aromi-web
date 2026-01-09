import React from 'react'
import { useEditPostContext } from '../contexts/EditPostContext'
import NewPostFragranceInput from './NewPostFragranceInput'
import NewPostFragrancePreview from './NewPostFragrancePreview'

const EditPostFragrance = () => {
  const { fragranceId, onFragranceIdChange } = useEditPostContext()

  if (fragranceId == null) {
    return (
      <NewPostFragranceInput
        onFragranceIdChange={onFragranceIdChange}
      />
    )
  }

  return (
    <NewPostFragrancePreview
      fragranceId={fragranceId}
      onFragranceIdChange={onFragranceIdChange}
    />
  )
}

export default EditPostFragrance
