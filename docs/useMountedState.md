# `useMountedState`

> **NOTE:** despite having `State` in its name **this hook does not cause component re-render**.
> It is designed to be used to avoid state updates on unmounted components.

Lifecycle hook providing ability to check component mount state.
Returns a function that returns `true` if component is mounted and `false` otherwise.

## Usage

```jsx
import React from 'react';
import { Text } from 'react-native';
import { useMountedState } from 'react-native-use';

const Demo = () => {
  const isMounted = useMountedState();
  const [message, setMessage] = React.useState('Waiting...');

  React.useEffect(() => {
    setTimeout(() => {
      if (isMounted()) {
        setMessage('Component is still mounted');
      }
    }, 1000);
  }, [isMounted]);

  return <Text>{message}</Text>;
};
```
