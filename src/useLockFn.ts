import { useCallback, useRef } from 'react';

/**
 * Wraps an async function so that concurrent calls are ignored while the previous
 * invocation is still running. Useful for preventing double-submit on buttons.
 *
 * @example
 * const handleSubmit = useLockFn(async () => {
 *   await api.saveData();
 * });
 */
export const useLockFn = <T extends (...args: any[]) => Promise<any>>(
  fn: T
): T => {
  const lockRef = useRef(false);

  return useCallback(
    async (...args: Parameters<T>) => {
      if (lockRef.current) return;
      lockRef.current = true;
      try {
        return await fn(...args);
      } finally {
        lockRef.current = false;
      }
    },
    [fn]
  ) as T;
};
