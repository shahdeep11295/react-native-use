# `useRefresh`

React Native hook for handling pull-to-refresh. Wraps an async function and manages the `isRefreshing` state automatically.

## Usage

```jsx
import React from 'react';
import { FlatList, RefreshControl, Text } from 'react-native';
import { useRefresh } from 'rn-hooksy';

const Demo = () => {
  const [data, setData] = React.useState(['Item 1', 'Item 2', 'Item 3']);

  const { isRefreshing, onRefresh } = useRefresh(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setData(['Item 1', 'Item 2', 'Item 3', `Item ${Date.now()}`]);
  });

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item}
      renderItem={({ item }) => <Text>{item}</Text>}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
      }
    />
  );
};
```

## Reference

```ts
const { isRefreshing, onRefresh } = useRefresh(refresh: () => Promise<unknown>);
```
