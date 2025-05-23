import { createPortal } from 'react-dom';
import type { PortalProps } from './View.types';

const Portal = ({ children }: PortalProps) => {
  return createPortal(children, document.body);
};

export default Portal;
