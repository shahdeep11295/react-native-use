# `useTimeoutFn`

Calls a given function after a specified amount of milliseconds.

## Usage

```jsx
import React, { useCallback } from 'react';
import { Button, Text, View } from 'react-native';
import { useTimeoutFn } from 'rn-hooksy';

const Demo = () => {
  const [state, setState] = React.useState('Not called yet');

  function fn() {
    setState(`called at ${Date.now()}`);
  }

  const [isReady, cancel, reset] = useTimeoutFn(fn, 5000);

  const onPress = useCallback(() => {
    if (isReady() === false) {
      cancel();
      setState('cancelled');
    } else {
      reset();
      setState('Not called yet');
    }
  }, [cancel, isReady, reset]);

  const readyState = isReady();

  return (
    <View>
      <Text>
        {readyState !== null
          ? 'Function will be called in 5 seconds'
          : 'Timer cancelled'}
      </Text>
      <Button
        title={readyState === false ? 'cancel timeout' : 'restart timeout'}
        onPress={onPress}
      />
      <Text>{state}</Text>
    </View>
  );
};
```

## Reference

```ts
const [isReady, cancel, reset] = useTimeoutFn(fn: Function, ms: number = 0);
```
