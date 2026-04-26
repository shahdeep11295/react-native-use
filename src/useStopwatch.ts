import { useCallback, useEffect, useRef, useState } from 'react';

export interface StopwatchResult {
  time: number; // elapsed milliseconds
  seconds: number; // elapsed full seconds
  minutes: number; // elapsed full minutes
  hours: number; // elapsed full hours
  isRunning: boolean;
  start: () => void;
  stop: () => void;
  reset: () => void;
}

/**
 * An accurate stopwatch that tracks elapsed time with start, stop, and reset controls.
 * Uses Date.now() for accuracy — not affected by re-renders or frame drops.
 *
 * @example
 * const { seconds, minutes, isRunning, start, stop, reset } = useStopwatch();
 */
export const useStopwatch = (autoStart: boolean = false): StopwatchResult => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(autoStart);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef<number>(0);
  const accumulatedRef = useRef<number>(0);

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
    startTimeRef.current = Date.now();
    intervalRef.current = setInterval(() => {
      setTime(accumulatedRef.current + (Date.now() - startTimeRef.current));
    }, 100);

    return clearTimer;
  }, [isRunning]);

  const start = useCallback(() => {
    setIsRunning((prev) => {
      if (!prev) startTimeRef.current = Date.now();
      return true;
    });
  }, []);

  const stop = useCallback(() => {
    accumulatedRef.current =
      accumulatedRef.current + (Date.now() - startTimeRef.current);
    setIsRunning(false);
  }, []);

  const reset = useCallback(() => {
    clearTimer();
    accumulatedRef.current = 0;
    startTimeRef.current = 0;
    setTime(0);
    setIsRunning(false);
  }, []);

  const totalSeconds = Math.floor(time / 1000);

  return {
    time,
    seconds: totalSeconds % 60,
    minutes: Math.floor(totalSeconds / 60) % 60,
    hours: Math.floor(totalSeconds / 3600),
    isRunning,
    start,
    stop,
    reset,
  };
};
