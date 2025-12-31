import { Field, Input, Popover } from '@base-ui/react'
import clsx from 'clsx'
import React from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import { useSearchNotes } from '@/features/notes'
import VoteOnNotesPopoverList from './VoteOnNotesPopoverList'
import { isMobile } from 'react-device-detect'

const VoteOnNotesPopover = () => {
  const {
    notes,
    isLoading,
    isLoadingMore,
    refresh,
    loadMore
  } = useSearchNotes()

  const anchorRef = React.useRef<HTMLInputElement>(null)

  const [searchTerm, setSearchTerm] = React.useState('')
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false)

  const handleSearch = useDebounce(
    (term: string) => {
      refresh({ term })
    },
    150
  )

  const handleOnInputValueChange = (value: string) => {
    setSearchTerm(value)
    setIsPopoverOpen(true)
    handleSearch(value)
  }

  const handleOnLoadMore = () => {
    loadMore()
  }

  return (
    <div
      className='ml-auto flex flex-col'
    >
      <Field.Root
        name='note-search'
      >
        <Input
          ref={anchorRef}
          value={searchTerm}
          placeholder='Search notes'
          className={clsx(
            'h-8 w-full rounded-lg border-2 px-2 py-1.5 text-sm outline-none',
            'md:w-64 md:rounded-xl md:px-3 md:py-2',
            'focus:border-sinopia'
          )}
          onValueChange={handleOnInputValueChange}
        />
      </Field.Root>

      <Popover.Root
        open={isPopoverOpen}
        modal={false}
        onOpenChange={setIsPopoverOpen}
      >
        <Popover.Portal>
          <Popover.Positioner
            anchor={anchorRef}
            sideOffset={0}
            side={isMobile ? 'bottom' : 'top'}
          >
            <Popover.Popup
              initialFocus={false}
              className={clsx(
                'box-border flex max-h-80 w-[calc(100vw-10px)] flex-col overflow-hidden rounded-lg border bg-white shadow-lg',
                'md:max-h-96 md:w-80 md:rounded-lg',
                'origin-(--transform-origin) transition-[transform,opacity] duration-150',
                'data-ending-style:scale-95 data-ending-style:opacity-0',
                'data-starting-style:scale-95 data-starting-style:opacity-0'
              )}
            >
              <VoteOnNotesPopoverList
                notes={notes}
                isLoading={isLoading || isLoadingMore}
                onLoadMore={handleOnLoadMore}
              />
            </Popover.Popup>
          </Popover.Positioner>
        </Popover.Portal>
      </Popover.Root>
    </div>
  )
}

export default VoteOnNotesPopover