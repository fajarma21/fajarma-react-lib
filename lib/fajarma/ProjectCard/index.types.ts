import type { ReactNode } from 'react';

type Icon = 'expand' | 'repo' | 'link' | 'noLink' | 'stacks' | 'collapse';

export interface ProjectCardProps {
  className?: string;
  desc: string;
  desktopOnly?: boolean;
  icon: Record<Icon, ReactNode>;
  isMobile: boolean;
  previewComp: ReactNode;
  repo: string[];
  stacks: string[];
  thumbnail: string;
  title: string;
  url?: string;
  visible?: boolean;
}
