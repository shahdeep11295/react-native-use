import { useState } from 'react';

export interface QueueMethods<T> {
  add: (item: T) => void;
  remove: () => T;
  first: T;
  last: T;
  size: number;
}

export const useQueue = <T>(initialValue: T[] = []): QueueMethods<T> => {
  const [state, set] = useState(initialValue);
  return {
    add: (value) => {
      set((queue) => [...queue, value]);
    },
    // @ts-ignore
    remove: () => {
      let result;
      set(([first, ...rest]) => {
        result = first;
        return rest;
      });
      return result;
    },
    // @ts-ignore
    get first() {
      return state[0];
    },
    // @ts-ignore
    get last() {
      return state[state.length - 1];
    },
    get size() {
      return state.length;
    },
  };
};
