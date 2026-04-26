# `useUpdate`

React utility hook that returns a function that forces component
to re-render when called.

## Usage

```jsx
import { Button, Text, View } from 'react-native';
import { useUpdate } from 'rn-hooksy';

const Demo = () => {
  const update = useUpdate();

  return (
    <View>
      <Text>Time: {Date.now()}</Text>
      <Button title="Update" onPress={update} />
    </View>
  );
};
```

## Reference

```js
const update = useUpdate();
```
