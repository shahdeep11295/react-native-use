import { useMemo } from 'react';

export const createMemo =
  <T extends (...args: any) => any>(fn: T) =>
  (...args: Parameters<T>) =>
    useMemo<ReturnType<T>>(() => fn(...args), args);
