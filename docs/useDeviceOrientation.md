# `useDeviceOrientation`

React Native hook that returns whether the device is currently in portrait or landscape orientation.

## Usage

```jsx
import { Text } from 'react-native';
import { useDeviceOrientation } from 'rn-hooksy';

const Demo = () => {
  const orientation = useDeviceOrientation();

  return <Text>Orientation: {orientation}</Text>;
};
```

## Reference

```ts
const orientation = useDeviceOrientation();
// Returns: 'portrait' | 'landscape'
```
