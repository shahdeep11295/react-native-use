# `useDebounce`

React hook that delays invoking a function until after `wait` milliseconds have elapsed since the last dependency change.

## Usage

```jsx
import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { useDebounce } from 'react-native-use';

const Demo = () => {
  const [state, setState] = React.useState('Typing stopped');
  const [val, setVal] = React.useState('');
  const [debouncedValue, setDebouncedValue] = React.useState('');

  const [, cancel] = useDebounce(
    () => {
      setState('Typing stopped');
      setDebouncedValue(val);
    },
    2000,
    [val]
  );

  return (
    <View>
      <TextInput
        value={val}
        placeholder="Debounced input"
        onChangeText={(text) => {
          setState('Waiting for typing to stop...');
          setVal(text);
        }}
      />
      <Text>{state}</Text>
      <Text>Debounced value: {debouncedValue}</Text>
      <Button title="Cancel debounce" onPress={cancel} />
    </View>
  );
};
```

## Reference

```ts
const [isReady, cancel] = useDebounce(fn: Function, ms: number, deps: DependencyList = []);
```
