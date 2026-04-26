import React from 'react';

type AsyncEffectCallback = () => void | Promise<void>;

export function useAsyncEffect(
  fn: AsyncEffectCallback,
  deps: React.DependencyList
): void {
  React.useEffect(() => {
    void fn();
  }, deps);
}
