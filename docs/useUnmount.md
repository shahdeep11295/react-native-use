# `useUnmount`

React lifecycle hook that calls a function when the component will unmount.

## Usage

```jsx
import { Alert } from 'react-native';
import { useUnmount } from 'rn-hooksy';

const Demo = () => {
  useUnmount(() => {
    Alert.alert('Component is unmounting!');
  });

  return null;
};
```

## Reference

```ts
useUnmount(fn: () => void | undefined): void;
```
