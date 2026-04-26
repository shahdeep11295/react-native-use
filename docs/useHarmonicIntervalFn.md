# `useHarmonicIntervalFn`

Same as [`useInterval`](./useInterval.md), but triggers effects with the same delay at the same time.

## Usage

```jsx
import React from 'react';
import { Text } from 'react-native';
import { useHarmonicIntervalFn } from 'rn-hooksy';

const Demo = () => {
  const [ticks, setTicks] = React.useState(0);

  useHarmonicIntervalFn(() => {
    setTicks((value) => value + 1);
  }, 1000);

  return <Text>Ticks: {ticks}</Text>;
};
```

## Reference

```js
useHarmonicIntervalFn(fn, delay?: number | null);
```
