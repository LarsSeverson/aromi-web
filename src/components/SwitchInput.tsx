import React from 'react'
import { Switch } from '@base-ui-components/react'
import clsx from 'clsx'

export interface SwitchInputProps extends Switch.Root.Props {
}

const SwitchInput = (props: SwitchInputProps) => {
  return (
    <Switch.Root
      {...props}
      className={clsx(
        'relative flex h-6 w-10 rounded-full bg-gradient-to-r',
        'from-surface2 to-background from-35% to-65% bg-[length:6.5rem_100%] bg-[100%_0%] bg-no-repeat p-px',
        'outline-surface2 outline outline-1',
        'transition-[background-position,box-shadow] duration-[125ms] ease-[cubic-bezier(0.26,0.75,0.38,0.45)]',
        'before:absolute before:rounded-full before:outline-offset-2',
        'focus-visible:before:inset-0 focus-visible:before:outline focus-visible:before:outline-2',
        'active:bg-white data-[checked]:bg-[0%_0%] data-[checked]:active:bg-black/10'
      )}
    >
      <Switch.Thumb
        className={clsx(
          'bg-light aspect-square h-full rounded-full',
          'transition-transform duration-150 data-[checked]:translate-x-4'
        )}
      />
    </Switch.Root>
  )
}

export default SwitchInput
