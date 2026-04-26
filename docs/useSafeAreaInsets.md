# `useSafeAreaInsets`

React Native hook that returns the safe area insets for the current device — accounting for notches, the Dynamic Island, home indicators, and status bars on both iOS and Android.

> Requires: [`react-native-safe-area-context`](https://github.com/th3rdwave/react-native-safe-area-context)
>
> ⚠️ Your app's root must be wrapped in `<SafeAreaProvider>` for this hook to work.

## Usage

```jsx
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'rn-hooksy';

const Screen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <Text>Content safely inside insets</Text>
    </View>
  );
};

const App = () => (
  <SafeAreaProvider>
    <Screen />
  </SafeAreaProvider>
);
```

## Reference

```ts
const { top, right, bottom, left } = useSafeAreaInsets();
```
