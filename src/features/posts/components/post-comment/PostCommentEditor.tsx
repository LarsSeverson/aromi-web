import React from 'react'
import { useEditPostCommentContext } from '../../contexts/EditPostCommentContext'
import { Form } from '@base-ui/react'
import clsx from 'clsx'
import { PostCommentEditorSubmit } from './PostCommentEditorSubmit'
import { PostCommentEditorErrors } from './PostCommentEditorErrors'
import { PostCommentEditorInput } from './PostCommentEditorInput'

export interface PostCommentCardEditorProps {}

export const PostCommentEditor = (_props: PostCommentCardEditorProps) => {
  const {
    isFocused,

    onSubmit
  } = useEditPostCommentContext()

  return (
    <Form
      className={clsx(
        'relative rounded-xl'
      )}
      onFormSubmit={onSubmit}
    >
      <div
        className='flex flex-col'
      >
        <div
          className={clsx(
            'w-full resize-none overflow-auto rounded-4xl border-2 p-3',
            isFocused && 'border-sinopia',
            'pb-1.5',
            'hover:border-sinopia transition-colors duration-150 ease-in-out focus:outline-none'
          )}
        >
          <PostCommentEditorInput />

          <div
            className='mt-2 flex'
          >
            <PostCommentEditorSubmit />
          </div>
        </div>

        <PostCommentEditorErrors />
      </div>
    </Form>
  )
}
