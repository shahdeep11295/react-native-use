# `useAccessibilityInfo`

React Native hook that tracks system accessibility settings such as screen reader, bold text, reduce motion, and more.

## Usage

```jsx
import { Text, View } from 'react-native';
import { useAccessibilityInfo } from 'react-native-use';

const Demo = () => {
  const {
    screenReaderEnabled,
    boldTextEnabled,
    reduceMotionEnabled,
    grayscaleEnabled,
    invertColorsEnabled,
    reduceTransparencyEnabled,
  } = useAccessibilityInfo();

  return (
    <View>
      <Text>Screen Reader: {screenReaderEnabled ? 'ON' : 'OFF'}</Text>
      <Text>Bold Text: {boldTextEnabled ? 'ON' : 'OFF'}</Text>
      <Text>Reduce Motion: {reduceMotionEnabled ? 'ON' : 'OFF'}</Text>
    </View>
  );
};
```

## Reference

```ts
const {
  screenReaderEnabled,
  boldTextEnabled,
  grayscaleEnabled,
  invertColorsEnabled,
  reduceMotionEnabled,
  reduceTransparencyEnabled,
} = useAccessibilityInfo();
// Each value is boolean | undefined
```
