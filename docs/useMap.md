# `useMap`

React state hook that tracks a `Map` object with helper actions.

## Usage

```jsx
import { Button, Text, View } from 'react-native';
import { useMap } from 'rn-hooksy';

const Demo = () => {
  const [map, actions] = useMap(new Map([['hello', 'there']]));

  return (
    <View>
      <Button
        title="Add"
        onPress={() =>
          actions.set(String(Date.now()), new Date().toISOString())
        }
      />
      <Button title="Reset" onPress={actions.reset} />
      <Button
        title="Remove 'hello'"
        onPress={() => actions.delete('hello')}
        disabled={!actions.has('hello')}
      />
      <Button title="Clear" onPress={actions.clear} />
      <Text>{JSON.stringify(Array.from(map.entries()), null, 2)}</Text>
    </View>
  );
};
```

## Reference

```ts
const [map, { set, delete, get, has, clear, reset }] = useMap<K, V>(initialMap?: Map<K, V>);
```
