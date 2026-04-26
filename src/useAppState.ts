import { useState, useEffect } from 'react';
import { AppState, type AppStateStatus } from 'react-native';

export const useAppState = () => {
  const [appState, setAppState] = useState<AppStateStatus | null>(null);

  const onAppStateChange = (state: AppStateStatus) => {
    setAppState(state);
  };

  useEffect(() => {
    const listener = AppState.addEventListener('change', onAppStateChange);

    return () => {
      try {
        // @ts-ignore
        if (listener instanceof Object) {
          //Use new way of removing event listener
          // @ts-ignore
          listener?.remove();
        } else {
          //Use deprecated way of removing event listener
          // @ts-ignore
          AppState?.removeEventListener('change', onAppStateChange);
        }
      } catch {
        console.warn('react-native-useappstate problem with removing listener');
      }
    };
  }, []);

  return appState;
};
