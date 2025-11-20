import React from 'react'

export interface EmptyTabProps {
  headline: string
  body: string
}

const EmptyTab = (props: EmptyTabProps) => {
  const { headline, body } = props

  return (
    <div
      className='flex flex-col gap-3 py-10 text-center'
    >
      <h2
        className='text-xl'
      >
        {headline}
      </h2>

      <h5
        className='text-md font-medium text-black/70'
      >
        {body}
      </h5>
    </div>
  )
}

export default EmptyTab
