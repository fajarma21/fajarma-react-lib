import { useRef } from 'react';
import type { UseThrottleptions } from './index.types';

const useThrottle = <T = undefined>(
  action: (params: T) => void,
  { interval = 500, disabledValue }: UseThrottleptions<T>
) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);
  const waiting = useRef(false);

  const handleThrottle = (value: T) => {
    if (typeof disabledValue !== 'undefined' && value === disabledValue) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      waiting.current = false;
      action(value);
      return;
    }

    if (waiting.current) return;

    waiting.current = true;
    timeoutRef.current = setTimeout(() => {
      action(value);
      waiting.current = false;
    }, interval);
  };

  return handleThrottle;
};

export default useThrottle;
