# `useSet`

React state hook that tracks a `Set`.

## Usage

```jsx
import { Button, Text, View } from 'react-native';
import { useSet } from 'react-native-use';

const Demo = () => {
  const [set, { add, has, remove, toggle, reset, clear }] = useSet(
    new Set(['hello'])
  );

  return (
    <View>
      <Button title="Add" onPress={() => add(String(Date.now()))} />
      <Button title="Reset" onPress={reset} />
      <Button title="Clear" onPress={clear} />
      <Button
        title="Remove hello"
        onPress={() => remove('hello')}
        disabled={!has('hello')}
      />
      <Button title="Toggle hello" onPress={() => toggle('hello')} />
      <Text>{JSON.stringify(Array.from(set), null, 2)}</Text>
    </View>
  );
};
```
