# `useInterval`

A declarative interval hook. The interval can be paused by setting the delay to `null`.

## Usage

```jsx
import React from 'react';
import { Button, Text, View } from 'react-native';
import { useInterval, useToggle } from 'rn-hooksy';

const Demo = () => {
  const [count, setCount] = React.useState(0);
  const [delay] = React.useState(1000);
  const [isRunning, toggleIsRunning] = useToggle(true);

  useInterval(
    () => {
      setCount((value) => value + 1);
    },
    isRunning ? delay : null
  );

  return (
    <View>
      <Text>count: {count}</Text>
      <Button
        title={isRunning ? 'stop' : 'start'}
        onPress={() => toggleIsRunning()}
      />
    </View>
  );
};
```

## Reference

```js
useInterval(callback, delay?: number | null);
```
