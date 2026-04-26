import {
  type DependencyList,
  type EffectCallback,
  useEffect,
  useRef,
} from 'react';

const deepEqual = (a: any, b: any): boolean => {
  if (a === b) return true;
  if (typeof a !== typeof b) return false;
  if (a === null || b === null) return a === b;
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    return a.every((item, i) => deepEqual(item, b[i]));
  }
  if (typeof a === 'object') {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    return keysA.every((key) => deepEqual(a[key], b[key]));
  }
  return false;
};

const useDeepCompareMemoize = (deps: DependencyList) => {
  const ref = useRef<DependencyList>([]);

  if (!deepEqual(deps, ref.current)) {
    ref.current = deps;
  }

  return ref.current;
};

/**
 * Like `useEffect` but uses deep equality to compare dependencies instead of
 * reference equality. Useful when deps contain objects or arrays that are
 * re-created on every render but have the same values.
 *
 * @example
 * useDeepCompareEffect(() => {
 *   fetchData(filters);
 * }, [filters]); // won't re-run if filters content hasn't changed
 */
export const useDeepCompareEffect = (
  effect: EffectCallback,
  deps: DependencyList
): void => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effect, useDeepCompareMemoize(deps));
};
