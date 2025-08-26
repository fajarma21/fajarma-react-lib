import { useEffect, useRef } from 'react';

const useIntersect = <T extends Element>(
  callback?: (value: boolean) => void,
  options?: IntersectionObserverInit
) => {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const newOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
      ...options,
    };

    const observer = new IntersectionObserver((e) => {
      const isIntersecting = e[0].isIntersecting;
      if (callback) callback(isIntersecting);
    }, newOptions);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [callback, options]);

  return { ref: elementRef };
};

export default useIntersect;
