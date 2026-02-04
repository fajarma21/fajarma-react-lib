import type { ReactNode } from 'react';

export interface ContactsProps {
  className?: string;
  links: Array<{
    icon: ReactNode;
    tooltip?: string;
    url: string;
  }>;
}
