import { useCallback, useEffect, useRef, useState } from 'react';

export interface CountdownControls {
  start: () => void;
  pause: () => void;
  reset: (newSeconds?: number) => void;
  isRunning: boolean;
}

/**
 * Counts down from a given number of seconds to zero.
 * Provides start, pause, and reset controls.
 *
 * @example
 * const [count, { start, pause, reset, isRunning }] = useCountdown(60);
 */
export const useCountdown = (
  initialSeconds: number,
  options: { autoStart?: boolean; onEnd?: () => void } = {}
): [number, CountdownControls] => {
  const { autoStart = false, onEnd } = options;

  const [count, setCount] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(autoStart);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const onEndRef = useRef(onEnd);
  onEndRef.current = onEnd;

  const clearTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (!isRunning) {
      clearTimer();
      return;
    }

    intervalRef.current = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearTimer();
          setIsRunning(false);
          onEndRef.current?.();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return clearTimer;
  }, [isRunning]);

  const start = useCallback(() => {
    setCount((prev) => {
      if (prev > 0) setIsRunning(true);
      return prev;
    });
  }, []);

  const pause = useCallback(() => setIsRunning(false), []);

  const reset = useCallback(
    (newSeconds?: number) => {
      clearTimer();
      setIsRunning(false);
      setCount(newSeconds ?? initialSeconds);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [initialSeconds]
  );

  return [count, { start, pause, reset, isRunning }];
};
