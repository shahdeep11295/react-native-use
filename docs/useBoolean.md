# `useBoolean`

React state hook that tracks a boolean value with explicit named actions.

## Usage

```jsx
import { Button, Text, View } from 'react-native';
import { useBoolean } from 'rn-hooksy';

const Demo = () => {
  const [isVisible, { setTrue: show, setFalse: hide, toggle }] =
    useBoolean(false);

  return (
    <View>
      <Text>{isVisible ? 'Visible' : 'Hidden'}</Text>
      <Button title="Show" onPress={show} />
      <Button title="Hide" onPress={hide} />
      <Button title="Toggle" onPress={toggle} />
    </View>
  );
};
```

## Reference

```ts
const [value, { setTrue, setFalse, toggle, set }] = useBoolean(initialValue: boolean = false);
```
