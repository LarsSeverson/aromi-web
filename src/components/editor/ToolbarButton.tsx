import { clsx } from 'clsx'
import type { IconType } from 'react-icons'

interface ToolbarButtonProps {
  icon: IconType
  active?: boolean
  onClick: () => void
}

const ToolbarButton = (props: ToolbarButtonProps) => {
  const { icon: Icon, active = false, onClick } = props

  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'flex h-8 w-8 items-center justify-center rounded transition-colors',
        'hover:bg-slate-200 focus:outline-none',
        active ? 'bg-slate-200 text-slate-900' : 'text-slate-500'
      )}
    >
      <Icon
        className="text-lg"
      />
    </button>
  )
}

export default ToolbarButton