# `useRaf`

React animation hook that forces component to re-render on each `requestAnimationFrame`,
returns percentage of time elapsed.

## Usage

```jsx
import { Text } from 'react-native';
import { useRaf } from 'react-native-use';

const Demo = () => {
  const elapsed = useRaf(5000, 1000);

  return <Text>Elapsed: {elapsed}</Text>;
};
```

## Reference

```ts
useRaf(ms?: number, delay?: number): number;
```
