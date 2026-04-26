# `useQueue`

React state hook that implements a simple FIFO queue.

## Usage

```jsx
import { Button, Text, View } from 'react-native';
import { useQueue } from 'react-native-use';

const Demo = () => {
  const { add, remove, first, last, size } = useQueue();

  return (
    <View>
      <Text>{`first: ${first}`}</Text>
      <Text>{`last: ${last}`}</Text>
      <Text>{`size: ${size}`}</Text>
      <Button title="Add" onPress={() => add((last || 0) + 1)} />
      <Button title="Remove" onPress={() => remove()} />
    </View>
  );
};
```
