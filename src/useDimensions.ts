import { useEffect, useState } from 'react';
import { Dimensions, type ScaledSize } from 'react-native';

export interface DimensionsState {
  window: ScaledSize;
  screen: ScaledSize;
}

/**
 * Tracks window and screen dimensions.
 * Automatically re-renders when the device is rotated or
 * the window size changes (e.g. split screen on tablets).
 */
export const useDimensions = (): DimensionsState => {
  const [dimensions, setDimensions] = useState<DimensionsState>({
    window: Dimensions.get('window'),
    screen: Dimensions.get('screen'),
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({ window, screen }: { window: ScaledSize; screen: ScaledSize }) => {
        setDimensions({ window, screen });
      }
    );

    return () => subscription.remove();
  }, []);

  return dimensions;
};
