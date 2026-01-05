import { clsx } from 'clsx'
import type { IconType } from 'react-icons'

interface EditorToolbarButtonProps {
  icon: IconType
  active?: boolean
  onClick: () => void
}

const EditorToolbarButton = (props: EditorToolbarButtonProps) => {
  const { icon: Icon, active = false, onClick } = props

  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'flex h-8 w-8 items-center justify-center rounded transition-colors',
        'hover:bg-empty cursor-pointer',
        active ? 'bg-empty' : 'text-gray-600'
      )}
    >
      <Icon
        className="text-lg"
      />
    </button>
  )
}

export default EditorToolbarButton