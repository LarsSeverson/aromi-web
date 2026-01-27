import { Form } from '@base-ui/react'
import clsx from 'clsx'
import React from 'react'
import { useNewPostCommentContext } from '../../contexts/NewPostCommentContext'
import PostCommentFormErrors from './PostCommentFormErrors'
import PostCommentFormInput from './PostCommentFormInput'
import PostCommentFormSubmit from './PostCommentFormSubmit'
import PostCommentFormAssets from './PostCommentFormAssets'
import PostCommentFormUtilities from './PostCommentFormUtilities'
import PostCommentFormDropZone from './PostCommentFormDropZone'

export interface PostCommentFormProps extends React.HTMLAttributes<HTMLFormElement> {
  showCancel?: boolean
}

const PostCommentForm = (props: PostCommentFormProps) => {
  const {
    className,
    showCancel,
    ...rest
  } = props

  const {
    isActive,
    isFocused,

    onIsActiveChange,
    onSubmit
  } = useNewPostCommentContext()

  const handleOnFormClick = () => {
    onIsActiveChange(true)
  }

  return (
    <Form
      className={clsx(
        className,
        'relative rounded-xl'
      )}
      onFormSubmit={onSubmit}
      onClick={handleOnFormClick}
      {...rest}
    >
      <div
        className='flex flex-col'
      >
        <div
          className={clsx(
            'w-full resize-none overflow-auto rounded-4xl border-2 p-3',
            isFocused && 'border-sinopia',
            isActive && 'pb-1.5',
            'hover:border-sinopia transition-colors duration-150 ease-in-out focus:outline-none'
          )}
        >
          <PostCommentFormAssets />

          <PostCommentFormInput />

          {isActive && (
            <div
              className='mt-2 flex'
            >
              <PostCommentFormUtilities />

              <PostCommentFormSubmit
                showCancel={showCancel}
              />
            </div>
          )}
        </div>

        <PostCommentFormDropZone />

        <PostCommentFormErrors />
      </div>
    </Form>
  )
}

export default PostCommentForm
