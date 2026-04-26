# `useBackHandler`

React Native hook that handles Android hardware back button presses.

## Usage

```jsx
import { Text } from 'react-native';
import { useBackHandler } from 'react-native-use';

const Demo = () => {
  useBackHandler(() => {
    console.log('Back button pressed');
    return true;
  });

  return <Text>Press the Android back button.</Text>;
};
```

## Reference

```js
useBackHandler(handler);
```
