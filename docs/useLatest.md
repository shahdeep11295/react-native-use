# `useLatest`

React state hook that returns the latest state as described in the [React hooks FAQ](https://react.dev/reference/react/useRef#avoiding-recreating-the-ref-object).

This is mostly useful to get access to the latest value of some props or state inside an asynchronous callback, instead of that value at the time the callback was created from.

## Usage

```jsx
import React from 'react';
import { Alert, Button, Text, View } from 'react-native';
import { useLatest } from 'react-native-use';

const Demo = () => {
  const [count, setCount] = React.useState(0);
  const latestCount = useLatest(count);

  function handleAlertClick() {
    setTimeout(() => {
      Alert.alert(`Latest count value: ${latestCount.current}`);
    }, 3000);
  }

  return (
    <View>
      <Text>You clicked {count} times</Text>
      <Button title="Click me" onPress={() => setCount(count + 1)} />
      <Button title="Show alert" onPress={handleAlertClick} />
    </View>
  );
};
```

## Reference

```ts
const latestState = useLatest<T>(state: T): { readonly current: T };
```
