import { Form } from '@base-ui/react'
import React from 'react'
import EditPostContent from '../components/EditPostContent'
import { useEditPostContext } from '../contexts/EditPostContext'
import { PostType } from '@/generated/graphql'
import EditPostSubmit from '../components/EditPostSubmit'
import EditPostErrors from '../components/EditPostErrors'
import PostPreviewCardTitle from '../components/PostPreviewCardTitle'
import PostPreviewCardAssets from '../components/PostPreviewCardAssets'
import PostPreviewCardFragrance from '../components/PostPreviewCardFragrance'
import PostPreviewCardAvatar from '../components/PostPreviewCardAvatar'
import PostPreviewCardHeading from '../components/PostPreviewCardHeading'

const EditPostPage = () => {
  const {
    post,

    formErrors,

    onSubmit
  } = useEditPostContext()

  const { id, title, type, user } = post
  const showMedia = type === PostType.Media
  const showFragrance = type === PostType.Fragrance

  return (
    <div
      key={id}
      className='flex w-full flex-col items-center px-4'
    >
      <div
        className='flex w-full max-w-3xl gap-2'
      >
        <PostPreviewCardAvatar
          user={user}
        />

        <Form
          validationMode='onChange'
          errors={formErrors}
          className='flex w-full min-w-0 flex-col gap-1'
          onFormSubmit={onSubmit}
        >
          <PostPreviewCardHeading
            post={post}
            showOptions={false}
          />

          <PostPreviewCardTitle
            title={title}
            isDense={false}
          />

          {showMedia && (
            <PostPreviewCardAssets
              postAssets={post.assets}
              isEnlarged
            />
          )}

          {showFragrance && (
            <PostPreviewCardFragrance
              fragrance={post.fragrance}
            />
          )}

          <EditPostContent />

          <EditPostErrors />

          <EditPostSubmit />
        </Form>
      </div>
    </div>
  )
}

export default EditPostPage
