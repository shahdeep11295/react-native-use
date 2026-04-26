import { useCallback, useState } from 'react';

export type BooleanActions = {
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
  set: (value: boolean) => void;
};

/**
 * Tracks a boolean value with explicit named actions.
 * More readable than useToggle when you need setTrue/setFalse separately.
 *
 * @example
 * const [isVisible, { setTrue: show, setFalse: hide, toggle }] = useBoolean(false);
 */
export const useBoolean = (
  initialValue: boolean = false
): [boolean, BooleanActions] => {
  const [value, setValue] = useState(initialValue);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((v) => !v), []);
  const set = useCallback((v: boolean) => setValue(v), []);

  return [value, { setTrue, setFalse, toggle, set }];
};
