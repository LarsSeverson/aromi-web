import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/search/')({
  component: RouteComponent
})

function RouteComponent () {
  return (
    <div
      className='w-full'
    >
      <div
        className='flex overflow-x-auto w-full'
      >
        {Array.from({ length: 100 }).map((_, index) => (
          <div
            key={index}
          >
            Search Result {index + 1}
          </div>
        ))}
      </div>
    </div>
  )
}
