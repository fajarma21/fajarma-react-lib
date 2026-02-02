import type { ReactNode } from 'react';

export interface ContactsProps {
  links: Array<{
    icon: ReactNode;
    tooltip: string;
    url: string;
  }>;
}
