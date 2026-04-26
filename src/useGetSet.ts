import { type Dispatch, useMemo, useRef } from 'react';
import { useUpdate } from './useUpdate';
import {
  type IHookStateInitAction,
  type IHookStateSetAction,
  resolveHookState,
} from './misc/hookState';

export function useGetSet<S>(
  initialState: IHookStateInitAction<S>
): [get: () => S, set: Dispatch<IHookStateSetAction<S>>] {
  const state = useRef(resolveHookState(initialState));
  const update = useUpdate();

  return useMemo(
    () => [
      () => state.current as S,
      (newState: IHookStateSetAction<S>) => {
        state.current = resolveHookState(newState, state.current);
        update();
      },
    ],
    []
  );
}
