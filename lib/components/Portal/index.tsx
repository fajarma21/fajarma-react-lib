import { createPortal } from 'react-dom';
import type { PortalProps } from './index.types';

const Portal = ({ children }: PortalProps) => {
  return createPortal(children, document.body);
};

export default Portal;
