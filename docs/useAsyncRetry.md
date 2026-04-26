# `useAsyncRetry`

Uses `useAsync` with an additional `retry` method to retry or refresh the async function.

## Usage

```jsx
import { Button, Text, View } from 'react-native';
import { useAsyncRetry } from 'rn-hooksy';

const Demo = ({ url }) => {
  const state = useAsyncRetry(async () => {
    const response = await fetch(url);
    return response.text();
  }, [url]);

  return (
    <View>
      {state.loading ? (
        <Text>Loading...</Text>
      ) : state.error ? (
        <Text>Error: {state.error.message}</Text>
      ) : (
        <Text>Value: {state.value}</Text>
      )}
      {!state.loading ? <Button title="Retry" onPress={state.retry} /> : null}
    </View>
  );
};
```

## Reference

```ts
useAsyncRetry(fn, deps?: any[]);
```
