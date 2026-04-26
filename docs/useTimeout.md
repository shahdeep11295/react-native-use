# `useTimeout`

Re-renders the component after a specified number of milliseconds.
Provides handlers to cancel and/or reset the timeout.

## Usage

```jsx
import { Button, Text, View } from 'react-native';
import { useTimeout } from 'rn-hooksy';

const TestComponent = ({ ms = 5000 }) => {
  const [isReady, cancel] = useTimeout(ms);

  return (
    <View>
      <Text>
        {isReady()
          ? "I'm reloaded after timeout"
          : `I will be reloaded after ${ms / 1000}s`}
      </Text>
      {isReady() === false ? <Button title="Cancel" onPress={cancel} /> : null}
    </View>
  );
};

const Demo = () => {
  return (
    <View>
      <TestComponent />
      <TestComponent ms={10000} />
    </View>
  );
};
```

## Reference

```ts
const [isReady, cancel, reset] = useTimeout(ms: number = 0);
```
