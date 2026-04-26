# `useIsomorphicLayoutEffect`

`useLayoutEffect` that does not show warning when server-side rendering, see [Alex Reardon's article](https://medium.com/@alexandereardon/uselayouteffect-and-ssr-192986cdcf7a) for more info.

## Usage

```jsx
import { useIsomorphicLayoutEffect } from 'rn-hooksy';
import { Text } from 'react-native';

const Demo = ({ value }) => {
  useIsomorphicLayoutEffect(() => {
    console.log(value);
  }, [value]);

  return <Text>Check the console</Text>;
};
```

## Reference

```ts
useIsomorphicLayoutEffect(effect: EffectCallback, deps?: DependencyList): void;
```
