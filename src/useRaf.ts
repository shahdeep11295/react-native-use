import { useState } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export const useRaf = (ms: number = 1e12, delay: number = 0): number => {
  const [elapsed, set] = useState<number>(0);

  useIsomorphicLayoutEffect(() => {
    // @ts-ignore
    let raf;
    // @ts-ignore
    let timerStop;
    // @ts-ignore
    let start;

    const onFrame = () => {
      // @ts-ignore
      const time = Math.min(1, (Date.now() - start) / ms);
      set(time);
      loop();
    };
    const loop = () => {
      raf = requestAnimationFrame(onFrame);
    };
    const onStart = () => {
      timerStop = setTimeout(() => {
        // @ts-ignore
        cancelAnimationFrame(raf);
        set(1);
      }, ms);
      start = Date.now();
      loop();
    };
    const timerDelay = setTimeout(onStart, delay);

    return () => {
      // @ts-ignore
      clearTimeout(timerStop);
      clearTimeout(timerDelay);
      // @ts-ignore
      cancelAnimationFrame(raf);
    };
  }, [ms, delay]);

  return elapsed;
};
