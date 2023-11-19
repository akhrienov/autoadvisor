import { FC, ReactNode } from 'react'

import { ThemeColors } from '@/types'

const COLOR_MAP: Record<ThemeColors, string> = {
  [ThemeColors.DEFAULT]: '',
  [ThemeColors.PRIMARY]: 'btn-primary',
  [ThemeColors.SECONDARY]: 'btn-secondary',
  [ThemeColors.ACCENT]: 'btn-accent',
  [ThemeColors.INFO]: 'btn-info',
  [ThemeColors.SUCCESS]: 'btn-success',
  [ThemeColors.WARNING]: 'btn-warning',
  [ThemeColors.ERROR]: 'btn-error',
}

type ButtonProps = {
  color: ThemeColors
  children?: ReactNode
}

const Button: FC<ButtonProps> = ({ color, children }) => {
  const layoutClasses: string = 'btn'
  const finalClasses: string = `${layoutClasses} ${COLOR_MAP[color]}`

  return <button className={finalClasses}>{children}</button>
}

Button.defaultProps = {
  color: ThemeColors.DEFAULT,
}

export default Button
