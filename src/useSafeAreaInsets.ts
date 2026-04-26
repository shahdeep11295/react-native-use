import { useSafeAreaInsets as _useSafeAreaInsets } from 'react-native-safe-area-context';

export interface EdgeInsets {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

/**
 * Returns the safe area insets for the current device — accounting for
 * notches, the Dynamic Island, home indicators, and status bars on both
 * iOS and Android.
 *
 * ⚠️  Your app's root must be wrapped in <SafeAreaProvider> from
 * react-native-safe-area-context for this hook to work.
 *
 * Requires: react-native-safe-area-context
 *
 * @example
 * // In your App root:
 * import { SafeAreaProvider } from 'react-native-safe-area-context';
 * <SafeAreaProvider><App /></SafeAreaProvider>
 *
 * // Inside any component:
 * const insets = useSafeAreaInsets();
 * <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
 *   ...
 * </View>
 */
export const useSafeAreaInsets = (): EdgeInsets => {
  return _useSafeAreaInsets();
};
