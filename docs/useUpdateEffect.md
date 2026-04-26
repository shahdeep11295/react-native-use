# `useUpdateEffect`

React effect hook that ignores the first invocation (e.g. on mount). The signature is exactly the same as the `useEffect` hook.

## Usage

```jsx
import React from 'react';
import { Text } from 'react-native';
import { useUpdateEffect } from 'rn-hooksy';

const Demo = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount((value) => value + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useUpdateEffect(() => {
    console.log('count', count); // will only show 1 and beyond

    return () => {
      // do something on unmount
    };
  }, [count]);

  return <Text>Count: {count}</Text>;
};
```

## Reference

```js
useUpdateEffect(effect: EffectCallback, deps?: DependencyList);
```
