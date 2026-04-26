# `useDefault`

React state hook that returns the default value when state is null or undefined.

## Usage

```jsx
import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { useDefault } from 'react-native-use';

const Demo = () => {
  const initialUser = { name: 'Marshall' };
  const defaultUser = { name: 'Mathers' };
  const [user, setUser] = useDefault(defaultUser, initialUser);

  return (
    <View>
      <Text>User: {user.name}</Text>
      <TextInput
        value={user.name}
        onChangeText={(value) => setUser({ name: value })}
      />
      <Button title="Set to null" onPress={() => setUser(null)} />
    </View>
  );
};
```

## Reference

```ts
const [value, setValue] = useDefault<T>(
  defaultValue: T,
  initialValue: T | (() => T)
): [T, (value: T | null | undefined | ((prevState: T) => T)) => void];
```
