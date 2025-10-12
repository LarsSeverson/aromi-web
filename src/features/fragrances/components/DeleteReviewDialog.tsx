import React, { useCallback } from 'react'
import ConfirmationDialog from '@/components/ConfirmationDialog'
import { Dialog } from '@base-ui-components/react'
import { AiOutlineDelete } from 'react-icons/ai'
import { type IFragranceReviewSummary } from '../../reviews/types'
import { useDeleteReview } from '../../reviews/hooks/useDeleteReview'
import { useToastError } from '@/hooks/useToastError'
import { useToastMessage } from '@/hooks/useToastMessage'

export interface DeleteReviewDialogProps {
  myReview: IFragranceReviewSummary
}

const DeleteReviewDialog = (props: DeleteReviewDialogProps) => {
  const { myReview } = props

  const { toastMessage } = useToastMessage()
  const { toastApolloError } = useToastError()

  const { deleteReview } = useDeleteReview()

  const handleDeleteReview = async () => {
    const { id } = myReview

    await deleteReview({ reviewId: id })
      .match(
        () => {
          toastMessage('Review deleted')
        },
        toastApolloError
      )
  }

  const onRenderTrigger = useCallback(() => {
    return (
      <Dialog.Trigger
        className='group w-full flex p-3 hover:brightness-95 bg-white rounded-xl gap-2 items-center justify-start'
      >
        <AiOutlineDelete
          size={20}
          className='group-hover:text-red-700'
        />

        <span
          className='font-semibold text-md group-hover:text-red-700'
        >
          Delete review
        </span>
      </Dialog.Trigger>
    )
  }, [])

  return (
    <ConfirmationDialog
      title='Delete Review'
      confirmationText='Are you sure you want to delete your review?'
      onRenderTrigger={onRenderTrigger}
      onDelete={handleDeleteReview}
    />
  )
}

export default DeleteReviewDialog
