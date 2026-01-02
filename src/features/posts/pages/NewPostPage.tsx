import React from 'react'
import Editor from '@/components/editor/Editor'

const NewPostPage = () => {

  return (
    <div
      className='flex w-full flex-col items-center p-4'
    >
      <div
        className='w-full max-w-3xl'
      >
        <Editor />
      </div>
    </div>
  )
}

export default NewPostPage
