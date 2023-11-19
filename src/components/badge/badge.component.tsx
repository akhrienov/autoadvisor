import { FC, ReactNode } from 'react'

import { ThemeColors } from '@/types'

const COLOR_MAP: Record<ThemeColors, string> = {
  [ThemeColors.DEFAULT]: '',
  [ThemeColors.PRIMARY]: 'bg-primary/10 text-primary ring-primary/20',
  [ThemeColors.SECONDARY]: 'bg-secondary/10 text-secondary ring-secondary/20',
  [ThemeColors.ACCENT]: 'bg-accent/10 text-accent ring-accent/20',
  [ThemeColors.INFO]: 'bg-info/10 text-info ring-info/20',
  [ThemeColors.SUCCESS]: 'bg-success/10 text-success ring-success/20',
  [ThemeColors.WARNING]: 'bg-warning/10 text-warning ring-warning/20',
  [ThemeColors.ERROR]: 'bg-error/10 text-error ring-error/20',
}

type BadgeProps = {
  color: ThemeColors
  children?: ReactNode
}

const Badge: FC<BadgeProps> = ({ color, children }) => {
  const layoutClasses: string = 'rounded-full px-3 py-1 text-sm font-semibold leading-6 ring-1 ring-inset'
  const finalClasses: string = `${layoutClasses} ${COLOR_MAP[color]}`

  return <span className={finalClasses}>{children}</span>
}

Badge.defaultProps = {
  color: ThemeColors.DEFAULT,
}

export default Badge
