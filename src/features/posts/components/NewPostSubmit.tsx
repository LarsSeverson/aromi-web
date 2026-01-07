import clsx from 'clsx'
import { useNewPostContext } from '../contexts/NewPostContext'
import Spinner from '@/components/Spinner'

export interface NewPostSubmitProps { }

const NewPostSubmit = (_props: NewPostSubmitProps) => {
  const { isLoading, isUploading } = useNewPostContext()

  return (
    <div
      className='mt-4 flex w-full justify-end'
    >
      <button
        type='submit'
        disabled={isLoading || isUploading}
        className={clsx(
          'group hover:shadow-symmetrical flex cursor-pointer overflow-hidden rounded-3xl px-6 py-2 text-white',
          'bg-sinopia transition-opacity duration-150 hover:brightness-110',
          'items-center gap-1.5',
          'relative'
        )}
      >
        <Spinner
          className={clsx(
            'border-white',
            isLoading ? 'opacity-100' : 'opacity-0'
          )}
        />

        <span
          className={clsx(
            isLoading ? 'opacity-0' : 'opacity-100'
          )}
        >
          Post
        </span>
      </button>
    </div>
  )
}

export default NewPostSubmit