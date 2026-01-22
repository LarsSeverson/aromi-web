import type { PostCommentPreviewFragment } from '@/generated/graphql'
import { useToastMessage } from '@/hooks/useToastMessage'
import React from 'react'
import { useDeletePostComment } from '../../hooks/useDeletePostComment'
import { MdOutlineRateReview } from 'react-icons/md'
import ConfirmationDialog from '@/components/ConfirmationDialog'
import { Dialog } from '@base-ui/react'
import { AiOutlineDelete } from 'react-icons/ai'

export interface MyPostCommentOptionsProps {
  comment: PostCommentPreviewFragment
  onEdit?: () => void
}

export const MyPostCommentOptions = (props: MyPostCommentOptionsProps) => {
  const { comment, onEdit } = props
  const { id: commentId } = comment

  const { toastError, toastMessage } = useToastMessage()

  const { deletePostComment } = useDeletePostComment()

  const handleDeletePost = async () => {
    const res = await deletePostComment({ id: commentId })

    res.match(
      () => {
        toastMessage('Your comment has been deleted')
      },
      error => {
        toastError(error.message)
      }
    )
  }

  const handleEditCommentClick = (event: React.MouseEvent) => {
    event.stopPropagation()

    onEdit?.()
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
        onClick={handleEditCommentClick}
      >
        <MdOutlineRateReview
          size={18}
        />

        <span
          className='text-sm font-semibold'
        >
          Edit content
        </span>
      </button>

      <ConfirmationDialog
        text='Delete Comment'
        subtext='Are you sure you want to delete your comment?'
        onConfirm={handleOnConfirmDelete}
      >
        <Dialog.Trigger
          className='group flex w-full cursor-pointer items-center justify-start gap-2 rounded-xl bg-white p-3 hover:brightness-95'
          onClick={handleOnDeleteTriggerClick}
        >
          <AiOutlineDelete
            size={18}
            className='group-hover:text-red-700'
          />

          <span
            className='text-sm font-semibold group-hover:text-red-700'
          >
            Delete comment
          </span>
        </Dialog.Trigger>
      </ConfirmationDialog>
    </div>
  )
}
