import { useRef } from 'react';

import type { UseDebounceOptions } from './index.types';

const useDebounce = <T = undefined>(
  action: (params: T) => void,
  { timeout = 500, disabledValue }: UseDebounceOptions<T>
) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  const handleDebounce = (value: T) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (typeof disabledValue !== 'undefined' && value === disabledValue) {
      return action(value);
    }
    timeoutRef.current = setTimeout(() => action(value), timeout);
  };

  return handleDebounce;
};

export default useDebounce;
