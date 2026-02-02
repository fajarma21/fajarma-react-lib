import type { ReactNode } from 'react';

export interface TooltipProps {
  offset?: {
    top?: number;
    left?: number;
  };
  children: ReactNode;
  text: string;
}
