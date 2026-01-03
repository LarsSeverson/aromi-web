import React from 'react'
import { Form } from '@base-ui/react'
import NewPostTitle from '../components/NewPostTitle'
import NewPostContent from '../components/NewPostContent'
import NewPostType from '../components/NewPostType'
import NewPostMedia from '../components/NewPostMedia'

const NewPostPage = () => {

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
      >
        <NewPostType />
        <NewPostTitle />
        <NewPostMedia />
        <NewPostContent />
      </Form>
    </div>
  )
}

export default NewPostPage
