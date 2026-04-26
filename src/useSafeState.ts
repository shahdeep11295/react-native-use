import {
  type Dispatch,
  type SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

/**
 * Like `useState` but silently ignores any state updates that happen after the
 * component has unmounted. Prevents the common React warning:
 * "Can't perform a React state update on an unmounted component."
 *
 * @example
 * const [data, setData] = useSafeState<string | null>(null);
 *
 * useEffect(() => {
 *   fetchData().then(setData); // safe even if component unmounts before fetch completes
 * }, []);
 */
export const useSafeState = <S>(
  initialState: S | (() => S)
): [S, Dispatch<SetStateAction<S>>] => {
  const mountedRef = useRef(false);
  const [state, setState] = useState<S>(initialState);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const safeSetState: Dispatch<SetStateAction<S>> = useCallback((value) => {
    if (mountedRef.current) {
      setState(value);
    }
  }, []);

  return [state, safeSetState];
};
