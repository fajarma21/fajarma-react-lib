import { useEffect, useRef, useState } from 'react';

import classNames from '../../utils/classNames';
import Portal from '../Portal';
import css from './View.module.scss';
import type { DialogProps } from './View.types';

const Dialog = ({
  display,
  children,
  className = '',
  overlayClassName = '',
  onClose,
}: DialogProps) => {
  const [displayDOM, setDisplayDOM] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    const handleKeyClose = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyClose);
    return () => {
      window.removeEventListener('keydown', handleKeyClose);
    };
  }, [display, onClose]);

  useEffect(() => {
    if (display) setDisplayDOM(true);
    else {
      timeoutRef.current = setTimeout(() => {
        setDisplayDOM(false);
      }, 750);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [display]);

  if (displayDOM) {
    return (
      <Portal>
        <div
          className={classNames(
            css.baseFloating,
            css.overlay,
            overlayClassName
          )}
          data-show={display}
          onClick={onClose}
        />
        <div
          className={classNames(css.baseFloating, css.dialog)}
          data-show={display}
        >
          <div className={classNames(css.container, className)}>{children}</div>
        </div>
      </Portal>
    );
  }
  return null;
};

export default Dialog;
