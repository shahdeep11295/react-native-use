# `useKeyboard`

React Native hook that tracks keyboard visibility, height, and position coordinates.

## Usage

```jsx
import { Text, TextInput, View } from 'react-native';
import { useKeyboard } from 'react-native-use';

const Demo = () => {
  const { keyboardShown, keyboardHeight } = useKeyboard();

  return (
    <View>
      <TextInput placeholder="Focus to show keyboard" />
      <Text>Keyboard shown: {keyboardShown ? 'YES' : 'NO'}</Text>
      <Text>Keyboard height: {keyboardHeight}</Text>
    </View>
  );
};
```

## Reference

```ts
const { keyboardShown, keyboardHeight, coordinates } = useKeyboard();
```
