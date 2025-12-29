import React from 'react'
import ConfirmationDialog from '@/components/ConfirmationDialog'
import { AiOutlineDelete } from 'react-icons/ai'
import { Dialog } from '@base-ui/react'

export interface DeleteReviewDialogProps {
  onConfirm?: () => void
}

const DeleteReviewDialog = (props: DeleteReviewDialogProps) => {
  const { onConfirm } = props

  return (
    <ConfirmationDialog
      text='Delete Review'
      subtext='Are you sure you want to delete your review?'
      onConfirm={onConfirm}
    >
      <Dialog.Trigger
        className='group flex w-full cursor-pointer items-center justify-start gap-2 rounded-xl bg-white p-3 hover:brightness-95'
      >
        <AiOutlineDelete
          size={20}
          className='group-hover:text-red-700'
        />

        <span
          className='text-md font-semibold group-hover:text-red-700'
        >
          Delete review
        </span>
      </Dialog.Trigger>
    </ConfirmationDialog>
  )
}

export default DeleteReviewDialog
