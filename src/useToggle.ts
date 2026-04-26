import { type Reducer, useReducer } from 'react';

const toggleReducer = (state: boolean, nextValue?: any) =>
  typeof nextValue === 'boolean' ? nextValue : !state;

export const useToggle = (
  initialValue: boolean
): [boolean, (nextValue?: any) => void] => {
  // @ts-ignore
  return useReducer<Reducer<boolean, any>>(toggleReducer, initialValue);
};
