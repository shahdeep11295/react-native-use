# `useDimensions`

React Native hook that tracks window and screen dimensions. Automatically re-renders when the device is rotated or the window size changes (e.g. split screen on tablets).

## Usage

```jsx
import { Text, View } from 'react-native';
import { useDimensions } from 'react-native-use';

const Demo = () => {
  const { window, screen } = useDimensions();

  return (
    <View>
      <Text>
        Window: {window.width} x {window.height}
      </Text>
      <Text>
        Screen: {screen.width} x {screen.height}
      </Text>
    </View>
  );
};
```

## Reference

```ts
const { window, screen } = useDimensions();
// window and screen are both ScaledSize objects
```
