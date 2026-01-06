import React from 'react'
import { Form } from '@base-ui/react'
import NewPostTitle from '../components/NewPostTitle'
import NewPostContent from '../components/NewPostContent'
import NewPostType from '../components/NewPostType'
import NewPostMedia from '../components/NewPostMedia'
import { useNewPostContext } from '../contexts/NewPostContext'
import { PostType } from '@/generated/graphql'
import NewPostFragrance from '../components/NewPostFragrance'
import NewPostSubmit from '../components/NewPostSubmit'
import NewPostErrors from '../components/NewPostErrors'

const NewPostPage = () => {
  const {
    type,

    formErrors,

    onSubmit
  } = useNewPostContext()

  const showMedia = type === PostType.Media
  const showFragrance = type === PostType.Fragrance

  return (
    <div
      className='flex w-full flex-col items-center px-4'
    >
      <div
        className='mb-10 w-full max-w-3xl'
      >
        <h2
          className='text-2xl font-medium text-black/80'
        >
          New post
        </h2>
      </div>

      <Form
        className='flex w-full max-w-3xl flex-col gap-6'
        validationMode='onChange'
        onFormSubmit={onSubmit}
        errors={formErrors}
      >
        <NewPostType />

        <NewPostTitle />

        {showMedia && <NewPostMedia />}

        {showFragrance && <NewPostFragrance />}

        <NewPostContent />

        <NewPostErrors />

        <NewPostSubmit />
      </Form>
    </div>
  )
}

export default NewPostPage
