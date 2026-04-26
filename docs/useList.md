# `useList`

Tracks an array and provides methods to modify it.
To cause component re-render use these methods instead of direct list mutation.

## Usage

```jsx
import { Button, Text, View } from 'react-native';
import { useList } from 'react-native-use';

const Demo = () => {
  const [list, { set, push, updateAt, removeAt, filter, sort, clear, reset }] =
    useList([1, 2, 3, 4, 5]);

  return (
    <View>
      <Button title="Set [1,2,3]" onPress={() => set([1, 2, 3])} />
      <Button title="Push timestamp" onPress={() => push(Date.now())} />
      <Button title="Update index 1" onPress={() => updateAt(1, Date.now())} />
      <Button title="Remove index 1" onPress={() => removeAt(1)} />
      <Button
        title="Filter even"
        onPress={() => filter((item) => item % 2 === 0)}
      />
      <Button title="Sort asc" onPress={() => sort((a, b) => a - b)} />
      <Button title="Clear" onPress={clear} />
      <Button title="Reset" onPress={reset} />
      <Text>{JSON.stringify(list)}</Text>
    </View>
  );
};
```

## Reference

```ts
const [list, {
  set,
  push,
  updateAt,
  insertAt,
  update,
  updateFirst,
  upsert,
  sort,
  filter,
  removeAt,
  remove,
  clear,
  reset
}] = useList<T>(array: T[] | (() => T[]));
```
