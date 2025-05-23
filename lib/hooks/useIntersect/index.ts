import { useEffect, useRef, useState } from 'react';
import type { UseIntersectParams } from './index.types';

const useIntersect = ({ callback, options }: UseIntersectParams) => {
  const [intersecting, setIntersecting] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const newOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
      ...options,
    };

    const observer = new IntersectionObserver((e) => {
      const isIntersecting = e[0].isIntersecting;
      setIntersecting(isIntersecting);
      if (isIntersecting) callback();
    }, newOptions);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [callback, options]);

  return { ref: elementRef, intersecting };
};

export default useIntersect;
