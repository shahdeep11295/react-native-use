# `useRendersCount`

Tracks component render count including the first render.

## Usage

```jsx
import { Button, Text, View } from 'react-native';
import { useRendersCount, useUpdate } from 'react-native-use';

const Demo = () => {
  const update = useUpdate();
  const rendersCount = useRendersCount();

  return (
    <View>
      <Text>Renders count: {rendersCount}</Text>
      <Button title="re-render" onPress={update} />
    </View>
  );
};
```

## Reference

```ts
const rendersCount: number = useRendersCount();
```
