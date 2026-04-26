# `useAsyncFn`

React hook that returns state and a callback for an `async` function or a function that returns a promise.

## Usage

```jsx
import { Button, Text, View } from 'react-native';
import { useAsyncFn } from 'rn-hooksy';

const Demo = ({ url }) => {
  const [state, doFetch] = useAsyncFn(async () => {
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
      <Button title="Start loading" onPress={() => doFetch()} />
    </View>
  );
};
```

## Reference

```ts
useAsyncFn<Result, Args>(fn, deps?: any[], initialState?: AsyncState<Result>);
```
