import { useEffect } from 'react';
import { BackHandler } from 'react-native';

type BackHandlerCallback = () => boolean;

export const useBackHandler = (handler?: BackHandlerCallback): void => {
  useEffect(() => {
    if (typeof handler !== 'function') return;

    const backHandler = BackHandler.addEventListener('hardwareBackPress', () =>
      handler()
    );

    return () => backHandler.remove();
  }, [handler]);
};
