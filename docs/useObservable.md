# `useObservable`

React state hook that tracks the latest value of an `Observable`.

## Usage

```jsx
import { Text, View } from 'react-native';
import { useObservable } from 'rn-hooksy';

// Example with a simple observable-like object
const counterSubject = {
  subscribe: (listener) => {
    let count = 0;
    const interval = setInterval(() => {
      listener(++count);
    }, 1000);
    return {
      unsubscribe: () => {
        clearInterval(interval);
      },
    };
  },
};

const Demo = () => {
  const value = useObservable(counterSubject, 0);

  return (
    <View>
      <Text>Current count: {value}</Text>
    </View>
  );
};
```

## Reference

```ts
function useObservable<T>(observable: Observable<T>): T | undefined;
function useObservable<T>(observable: Observable<T>, initialValue: T): T;
```
