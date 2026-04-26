# `useThrottleFn`

React hook that invokes a function and then delays subsequent function calls until after `wait` milliseconds.

## Usage

```jsx
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { useThrottleFn } from 'rn-hooksy';

const Demo = () => {
  const [status, setStatus] = React.useState('Updating stopped');
  const [value, setValue] = React.useState('');

  const throttledValue = useThrottleFn(
    () => {
      setStatus('Waiting for input...');
      return value;
    },
    2000,
    [value]
  );

  return (
    <View>
      <TextInput
        value={value}
        placeholder="Throttled input"
        onChangeText={(text) => {
          setStatus('Updating stopped');
          setValue(text);
        }}
      />
      <Text>{status}</Text>
      <Text>Throttled value: {throttledValue}</Text>
    </View>
  );
};
```

## Reference

```ts
useThrottleFn(fn, ms?: number, args);
```
