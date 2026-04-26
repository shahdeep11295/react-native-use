# `useAsyncStorage`

React Native hook that persists state to `AsyncStorage`. Automatically loads the stored value on mount and saves whenever it changes.

> Requires: [`@react-native-async-storage/async-storage`](https://github.com/react-native-async-storage/async-storage)

## Usage

```jsx
import { Button, Text, TextInput, View } from 'react-native';
import { useAsyncStorage } from 'react-native-use';

const Demo = () => {
  const [state, { setValue, removeValue }] = useAsyncStorage('username', '');

  if (state.loading) return <Text>Loading...</Text>;

  return (
    <View>
      <Text>Stored username: {state.value || '(none)'}</Text>
      {state.error && <Text>Error: {state.error.message}</Text>}
      <TextInput
        value={state.value}
        onChangeText={(text) => setValue(text)}
        placeholder="Enter username"
      />
      <Button title="Clear" onPress={removeValue} />
    </View>
  );
};
```

## Reference

```ts
const [state, { setValue, removeValue }] = useAsyncStorage<T>(key: string, initialValue: T);

// state.value       — current value
// state.loading     — true while reading from storage on first mount
// state.error       — any read/write error, or null
// setValue(value)   — saves to AsyncStorage and updates state
// removeValue()     — removes the key from AsyncStorage and resets to initialValue
```
