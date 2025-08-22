import type { BaseProps } from '../BaseProps'

export interface RcsProjectCardProps extends BaseProps {
  to: string;
  title: string;
  shortDesc: string;
  img?: string;
}
