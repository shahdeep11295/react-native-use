import { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface AsyncStorageState<T> {
  value: T;
  loading: boolean;
  error: Error | null;
}

export interface AsyncStorageActions<T> {
  setValue: (value: T | ((prev: T) => T)) => Promise<void>;
  removeValue: () => Promise<void>;
}

/**
 * Persists state to AsyncStorage, automatically loading the stored value
 * on mount and saving whenever it changes.
 *
 * Requires: @react-native-async-storage/async-storage
 *
 * @example
 * const [state, { setValue, removeValue }] = useAsyncStorage('user-token', null);
 *
 * // state.loading    — true while reading from storage on first mount
 * // state.value      — current value (null until loaded)
 * // state.error      — any read/write error
 * // setValue('abc')  — saves to AsyncStorage and updates state
 * // removeValue()    — deletes the key from AsyncStorage
 */
export const useAsyncStorage = <T>(
  key: string,
  initialValue: T
): [AsyncStorageState<T>, AsyncStorageActions<T>] => {
  const [state, setState] = useState<AsyncStorageState<T>>({
    value: initialValue,
    loading: true,
    error: null,
  });

  // Load persisted value on mount
  useEffect(() => {
    let active = true;
    AsyncStorage.getItem(key)
      .then((raw) => {
        if (!active) return;
        const parsed: T = raw !== null ? (JSON.parse(raw) as T) : initialValue;
        setState({ value: parsed, loading: false, error: null });
      })
      .catch((err: Error) => {
        if (!active) return;
        setState((prev) => ({ ...prev, loading: false, error: err }));
      });
    return () => {
      active = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const setValue = useCallback(
    async (valueOrUpdater: T | ((prev: T) => T)) => {
      setState((prev) => {
        const newValue =
          typeof valueOrUpdater === 'function'
            ? (valueOrUpdater as (prev: T) => T)(prev.value)
            : valueOrUpdater;

        AsyncStorage.setItem(key, JSON.stringify(newValue)).catch(
          (err: Error) => {
            setState((s) => ({ ...s, error: err }));
          }
        );

        return { ...prev, value: newValue, error: null };
      });
    },
    [key]
  );

  const removeValue = useCallback(async () => {
    await AsyncStorage.removeItem(key);
    setState((prev) => ({ ...prev, value: initialValue, error: null }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return [state, { setValue, removeValue }];
};
