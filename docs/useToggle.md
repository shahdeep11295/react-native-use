# `useToggle`

React state hook that tracks value of a boolean.

## Usage

```jsx
import { Button, Text, View } from 'react-native';
import { useToggle } from 'react-native-use';

const Demo = () => {
  const [on, toggle] = useToggle(true);

  return (
    <View>
      <Text>{on ? 'ON' : 'OFF'}</Text>
      <Button title="Toggle" onPress={() => toggle()} />
      <Button title="Set ON" onPress={() => toggle(true)} />
      <Button title="Set OFF" onPress={() => toggle(false)} />
    </View>
  );
};
```
