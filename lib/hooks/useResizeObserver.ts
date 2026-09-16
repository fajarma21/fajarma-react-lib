import { useEffect, useRef, useState } from 'react';

const useResizeObserver = <T extends Element>(
  handleChange?: (target: T, width: number, height: number) => void,
) => {
  const ref = useRef<T>(null);
  const [elementSize, setElementSize] = useState({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.target.clientWidth;
        const height = entry.target.clientHeight;

        setElementSize({
          width,
          height,
        });

        if (handleChange && ref.current) {
          handleChange(ref.current, width, height);
        }
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
