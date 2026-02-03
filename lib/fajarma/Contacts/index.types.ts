import type { ReactNode } from 'react';
import type { TooltipData } from '../../types';

export interface ContactsProps {
  links: Array<{
    icon: ReactNode;
    tooltip?: TooltipData['text'];
    url: string;
  }>;
  tooltipOffset?: TooltipData['offset'];
}
