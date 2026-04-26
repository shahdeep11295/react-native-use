# `useDeepCompareEffect`

A modified `useEffect` hook that uses deep equality to compare dependencies instead of reference equality. Useful when deps contain objects or arrays that are re-created on every render but have the same values.

## Usage

```jsx
import React from 'react';
import { Text, View } from 'react-native';
import { useDeepCompareEffect } from 'rn-hooksy';

const Demo = () => {
  const [result, setResult] = React.useState(0);
  const filters = { category: 'books', page: 1 };

  useDeepCompareEffect(() => {
    // won't re-run if filters content hasn't changed
    console.log('Fetching with filters:', filters);
    setResult((prev) => prev + 1);
  }, [filters]);

  return (
    <View>
      <Text>Effect run count: {result}</Text>
    </View>
  );
};
```

## Reference

```ts
useDeepCompareEffect(effect: EffectCallback, deps: any[]): void;
```
