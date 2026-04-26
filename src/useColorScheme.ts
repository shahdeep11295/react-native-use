import { useEffect, useState } from 'react';
import { Appearance, type ColorSchemeName } from 'react-native';

/**
 * Tracks the system color scheme (light/dark mode).
 * Re-renders automatically when the user changes the system theme.
 * Returns 'light', 'dark', or null if no preference is set.
 */
export const useColorScheme = (): ColorSchemeName => {
  const [colorScheme, setColorScheme] = useState<ColorSchemeName>(
    Appearance.getColorScheme() ?? 'light'
  );

  useEffect(() => {
    const subscription = Appearance.addChangeListener(
      ({ colorScheme: scheme }) => {
        setColorScheme(scheme ?? 'light');
      }
    );

    return () => subscription.remove();
  }, []);

  return colorScheme;
};
