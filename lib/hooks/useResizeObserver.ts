import { useEffect, useRef, useState } from 'react';

const useResizeObserver = <T extends Element>(handleChange?: () => void) => {
  const ref = useRef<T>(null);
  const [elementSize, setElementSize] = useState({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setElementSize({
          width: entry.target.clientWidth,
          height: entry.target.clientHeight,
        });
        if (handleChange) handleChange();
      }
    });

    const inputNode = ref.current;
    if (inputNode) {
      resizeObserver.observe(inputNode);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [handleChange]);

  return { ref, elementSize };
};

export default useResizeObserver;
