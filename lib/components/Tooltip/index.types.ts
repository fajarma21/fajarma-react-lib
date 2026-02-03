import type { ReactNode } from 'react';
import type { TooltipData } from '../../types';

export interface TooltipProps extends TooltipData {
  children: ReactNode;
}
