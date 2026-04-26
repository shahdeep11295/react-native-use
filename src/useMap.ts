import { useCallback, useState } from 'react';

export type MapActions<K, V> = {
  set: (key: K, value: V) => void;
  delete: (key: K) => void;
  has: (key: K) => boolean;
  get: (key: K) => V | undefined;
  clear: () => void;
  reset: () => void;
};

/**
 * Tracks a Map object with helper actions.
 * Provides set, delete, has, get, clear, and reset methods
 * that all trigger re-renders correctly.
 */
export const useMap = <K, V>(
  initialMap: Map<K, V> = new Map()
): [Map<K, V>, MapActions<K, V>] => {
  const [map, setMap] = useState<Map<K, V>>(new Map(initialMap));

  const set = useCallback((key: K, value: V) => {
    setMap((prev) => new Map(prev).set(key, value));
  }, []);

  const deleteKey = useCallback((key: K) => {
    setMap((prev) => {
      const next = new Map(prev);
      next.delete(key);
      return next;
    });
  }, []);

  const has = useCallback((key: K) => map.has(key), [map]);

  const get = useCallback((key: K) => map.get(key), [map]);

  const clear = useCallback(() => {
    setMap(new Map());
  }, []);

  const reset = useCallback(() => {
    setMap(new Map(initialMap));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [map, { set, delete: deleteKey, has, get, clear, reset }];
};
