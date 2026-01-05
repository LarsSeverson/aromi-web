import React from 'react'
import { useNewPostContext } from '../contexts/NewPostContext'
import NewPostFragranceInput from './NewPostFragranceInput'
import NewPostFragrancePreview from './NewPostFragrancePreview'

const NewPostFragrance = () => {
  const { fragranceId } = useNewPostContext()

  if (fragranceId == null) {
    return <NewPostFragranceInput />
  }

  return <NewPostFragrancePreview />
}

export default NewPostFragrance
