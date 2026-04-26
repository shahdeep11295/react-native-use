# `useLockFn`

Wraps an async function so that concurrent calls are ignored while the previous invocation is still running. Useful for preventing double-submit on buttons.

## Usage

```jsx
import { Button, Text, View } from 'react-native';
import { useLockFn } from 'rn-hooksy';

const Demo = () => {
  const handleSubmit = useLockFn(async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Submitted!');
  });

  return (
    <View>
      <Text>Tap rapidly - only one request will run at a time</Text>
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};
```

## Reference

```ts
const lockedFn = useLockFn<T extends (...args: any[]) => Promise<any>>(fn: T): T;
```
