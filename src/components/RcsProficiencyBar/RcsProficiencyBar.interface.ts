import type { BaseProps } from '../BaseProps'

export interface ProficiencyBarProps extends BaseProps {
  skill: string
  level: number
  color?: string
  editable?: boolean
  minLevel?: number
  maxLevel?: number
}
