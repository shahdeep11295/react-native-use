# `useStateHistory`

React state hook that tracks state history and allows moving backward and forward through previous values.

## Usage

```jsx
import React from 'react';
import { Button, Text, View } from 'react-native';
import { useStateHistory } from 'react-native-use';

const Demo = () => {
  const [value, setValue, history] = useStateHistory(0, 10);

  return (
    <View>
      <Text>{`Current: ${value}`}</Text>
      <Text>{`History: ${JSON.stringify(history.history)}`}</Text>
      <Text>{`Position: ${history.position}`}</Text>
      <Button title="+1" onPress={() => setValue((v) => v + 1)} />
      <Button title="-1" onPress={() => setValue((v) => v - 1)} />
      <Button title="Back" onPress={() => history.back()} />
      <Button title="Forward" onPress={() => history.forward()} />
      <Button title="Go first" onPress={() => history.go(0)} />
      <Button title="Go last" onPress={() => history.go(-1)} />
    </View>
  );
};
```

## Reference

```ts
const [state, setState, controls] = useStateHistory(initialState, capacity?, initialHistory?);
```
