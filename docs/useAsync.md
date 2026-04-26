# `useAsync`

React hook that resolves an `async` function or a function that returns a promise.

## Usage

```jsx
import React from 'react';
import { Text, View } from 'react-native';
import { useAsync } from 'rn-hooksy';

const Demo = ({ url }) => {
  const state = useAsync(async () => {
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
    </View>
  );
};
```

## Reference

```ts
useAsync(fn, deps?: any[]);
```
