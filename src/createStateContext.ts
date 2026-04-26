import { createContext, createElement, useContext, useState } from 'react';

export const createStateContext = <T>(defaultInitialValue: T) => {
  const context = createContext<
    [T, React.Dispatch<React.SetStateAction<T>>] | undefined
  >(undefined);
  // @ts-ignore
  const providerFactory = (props, children) =>
    createElement(context.Provider, props, children);

  const StateProvider = ({
    children,
    initialValue,
  }: {
    children?: React.ReactNode;
    initialValue?: T;
  }) => {
    const state = useState<T>(
      initialValue !== undefined ? initialValue : defaultInitialValue
    );
    return providerFactory({ value: state }, children);
  };

  const useStateContext = () => {
    const state = useContext(context);
    if (state == null) {
      throw new Error(`useStateContext must be used inside a StateProvider.`);
    }
    return state;
  };

  return [useStateContext, StateProvider, context] as const;
};
