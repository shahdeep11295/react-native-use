import { useState, useCallback } from 'react';

type AnyObject = Record<string, unknown>;

export const useCombinedState = <T extends AnyObject>(initialState: T) => {
  const [state, setState] = useState<T>(initialState);

  const updateState = useCallback(<K extends keyof T>(key: K, value: T[K]) => {
    setState((prev) => ({ ...prev, [key]: value }));
  }, []);

  const updateMultiple = useCallback((newState: Partial<T>) => {
    setState((prev) => ({ ...prev, ...newState }));
  }, []);

  const resetState = useCallback(() => {
    setState(initialState);
  }, [initialState]);

  return {
    state,
    setField: updateState,
    setFields: updateMultiple,
    reset: resetState,
  };
};
