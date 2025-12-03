import { useCallback, useEffect, useRef, useState, memo } from 'react';

const DELAY = 1000;
const TIME = 500;
const INTERVAL = 100;
const STEP = TIME / INTERVAL;

const Counter = () => {
  const [total, setTotal] = useState(0);
  const [add, setAdd] = useState(0);
  const stepRef = useRef(0);

  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  const handleInterval = (value: number, final: number) => {
    stepRef.current += 1;

    if (stepRef.current === STEP) {
      stepRef.current = 0;
      setTotal(final);
      setAdd(0);
      if (intervalRef.current) clearInterval(intervalRef.current);
    } else {
      setTotal((prev) => prev + value);
      setAdd((prev) => prev - value);
    }
  };

  const handleAdd = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    const value = Math.ceil(Math.random() * 90) + 10;
    setAdd(value);

    const addPerStep = value / STEP;

    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(
        () => handleInterval(addPerStep, total + value),
        INTERVAL
      );
    }, DELAY);
  }, [total]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, []);

  return (
    <div>
      <div>
        <p>
          total: {Math.round(total)} {!!add && <span>+{Math.round(add)}</span>}
        </p>
      </div>
      <button type="button" disabled={!!add} onClick={handleAdd}>
        Add 10 - 100
      </button>
    </div>
  );
};

export default memo(Counter);
