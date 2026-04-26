# `useSafeState`

Like `useState` but silently ignores any state updates that happen after the component has unmounted. Prevents the common React warning about updating state on an unmounted component.

## Usage

```jsx
import { Text } from 'react-native';
import { useSafeState, useAsyncEffect } from 'rn-hooksy';

const Demo = () => {
  const [data, setData] = useSafeState(null);

  useAsyncEffect(async () => {
    const result = await Promise.resolve({ name: 'Deep' });
    setData(result); // safe even if component unmounts before this resolves
  }, []);

  return <Text>{data ? data.name : 'Loading...'}</Text>;
};
```

## Reference

```ts
const [state, setState] = useSafeState<S>(initialState: S | (() => S));
```
