# `usePrevious`

React state hook that returns the previous state as described in the [React hooks FAQ](https://react.dev/reference/react/useRef#keeping-track-of-previous-state).

## Usage

```jsx
import React from 'react';
import { Button, Text, View } from 'react-native';
import { usePrevious } from 'rn-hooksy';

const Demo = () => {
  const [count, setCount] = React.useState(0);
  const prevCount = usePrevious(count);

  return (
    <View>
      <Button title="+" onPress={() => setCount(count + 1)} />
      <Button title="-" onPress={() => setCount(count - 1)} />
      <Text>
        Now: {count}, before: {prevCount}
      </Text>
    </View>
  );
};
```

## Reference

```ts
const prevState = usePrevious<T>(state: T): T | undefined;
```
