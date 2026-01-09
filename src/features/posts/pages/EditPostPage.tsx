import { Form } from '@base-ui/react'
import React from 'react'
import EditPostType from '../components/EditPostType'
import EditPostTitle from '../components/EditPostTitle'
import EditPostContent from '../components/EditPostContent'
import { useEditPostContext } from '../contexts/EditPostContext'
import { PostType } from '@/generated/graphql'
import EditPostMedia from '../components/EditPostMedia'
import EditPostFragrance from '../components/EditPostFragrance'
import EditPostSubmit from '../components/EditPostSubmit'

const EditPostPage = () => {
  const { post } = useEditPostContext()

  const showMedia = post.type === PostType.Media
  const showFragrance = post.type === PostType.Fragrance

  return (
    <div
      key={post.id}
      className='flex w-full flex-col items-center px-4'
    >
      <div
        className='mb-10 w-full max-w-3xl'
      >
        <h2
          className='text-2xl font-medium text-black/80'
        >
          Edit post
        </h2>
      </div>

      <Form
        className='flex w-full max-w-3xl flex-col gap-6'
      >
        <EditPostType />

        <EditPostTitle />

        {showMedia && <EditPostMedia />}

        {showFragrance && <EditPostFragrance />}

        <EditPostContent />

        <EditPostSubmit />
      </Form>
    </div>
  )
}

export default EditPostPage
