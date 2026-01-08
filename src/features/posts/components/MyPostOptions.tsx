import React from 'react'
import { MdOutlineRateReview } from 'react-icons/md'
import { useNavigate } from '@tanstack/react-router'
import type { PostPreviewFragment } from '@/generated/graphql'
import { useToastMessage } from '@/hooks/useToastMessage'
import { useDeletePost } from '../hooks/useDeletePost'
import ConfirmationDialog from '@/components/ConfirmationDialog'
import { Dialog } from '@base-ui/react'
import { AiOutlineDelete } from 'react-icons/ai'

export interface MyPostOptionsProps {
  post: PostPreviewFragment
}

const MyPostOptions = (props: MyPostOptionsProps) => {
  const { post } = props
  const { id: postId } = post

  const { toastError, toastMessage } = useToastMessage()
  const navigate = useNavigate()

  const { deletePost } = useDeletePost()

  const handleDeletePost = async () => {
    const res = await deletePost({ id: postId })

    res.match(
      () => {
        toastMessage('Your post has been deleted')
      },
      error => {
        toastError(error.message)
      }
    )
  }

  const handleEditReviewClick = (event: React.MouseEvent) => {
    event.stopPropagation()

    const params = { id: postId }
    navigate({ to: '/community/posts/$id/edit', params })
  }

  const handleOnConfirmDelete = () => {
    handleDeletePost()
  }

  const handleOnDeleteTriggerClick = (event: React.MouseEvent) => {
    event.stopPropagation()
  }

  return (
    <div
      className='w-full'
    >
      <button
        className='flex w-full cursor-pointer items-center justify-start gap-2 rounded-xl bg-white p-3 hover:brightness-95'
        onClick={handleEditReviewClick}
      >
        <MdOutlineRateReview
          size={20}
        />

        <span
          className='text-md font-semibold'
        >
          Edit post
        </span>
      </button>

      <ConfirmationDialog
        text='Delete Post'
        subtext='Are you sure you want to delete your post?'
        onConfirm={handleOnConfirmDelete}
      >
        <Dialog.Trigger
          className='group flex w-full cursor-pointer items-center justify-start gap-2 rounded-xl bg-white p-3 hover:brightness-95'
          onClick={handleOnDeleteTriggerClick}
        >
          <AiOutlineDelete
            size={20}
            className='group-hover:text-red-700'
          />

          <span
            className='text-md font-semibold group-hover:text-red-700'
          >
            Delete post
          </span>
        </Dialog.Trigger>
      </ConfirmationDialog>
    </div>
  )
}

export default MyPostOptions
