# `useAsyncEffect`

React hook that runs an `async` function inside an effect when dependencies change.

## Usage

```jsx
import React from 'react';
import { Text } from 'react-native';
import { useAsyncEffect } from 'rn-hooksy';

const Demo = ({ userId }) => {
  const [user, setUser] = React.useState(null);

  useAsyncEffect(async () => {
    const response = await Promise.resolve({ id: userId, name: 'Deep' });
    setUser(response);
  }, [userId]);

  return <Text>{user ? user.name : 'Loading...'}</Text>;
};
```

## Reference

```js
useAsyncEffect(fn, deps);
```
