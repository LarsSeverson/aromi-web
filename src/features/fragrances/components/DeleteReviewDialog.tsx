import React from 'react'
import ConfirmationDialog from '@/components/ConfirmationDialog'
import type { AllFragranceReviewFragment } from '@/generated/graphql'

export interface DeleteReviewDialogProps {
  review: AllFragranceReviewFragment
}

const DeleteReviewDialog = (props: DeleteReviewDialogProps) => {
  // const { deleteReview } = useDeleteReview()

  // const handleDeleteReview = async () => {
  //   const { id } = myReview

  //   await deleteReview({ reviewId: id })
  //     .match(
  //       () => {
  //         toastMessage('Review deleted')
  //       },
  //       toastApolloError
  //     )
  // }

  // const onRenderTrigger = useCallback(() => {
  //   return (
  //     <Dialog.Trigger
  //       className='group w-full flex p-3 hover:brightness-95 bg-white rounded-xl gap-2 items-center justify-start'
  //     >
  //       <AiOutlineDelete
  //         size={20}
  //         className='group-hover:text-red-700'
  //       />

  //       <span
  //         className='font-semibold text-md group-hover:text-red-700'
  //       >
  //         Delete review
  //       </span>
  //     </Dialog.Trigger>
  //   )
  // }, [])

  return (
    <ConfirmationDialog
      text='Delete Review'
      subtext='Are you sure you want to delete your review?'
    />
  )
}

export default DeleteReviewDialog
