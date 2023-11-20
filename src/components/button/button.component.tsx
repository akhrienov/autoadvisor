import { FC, ButtonHTMLAttributes, ReactNode } from 'react'

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
  themeColor: ThemeColors
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({ themeColor = ThemeColors.DEFAULT, children, ...props }) => {
  const layoutClasses: string = 'btn'
  const finalClasses: string = `${layoutClasses} ${COLOR_MAP[themeColor]}`

  return (
    <button className={finalClasses} {...props}>
      {children}
    </button>
  )
}

export default Button
