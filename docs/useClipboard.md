# `useClipboard`

React Native hook that reads from and writes to the device clipboard.

> Requires: [`@react-native-clipboard/clipboard`](https://github.com/react-native-clipboard/clipboard)

## Usage

```jsx
import { Button, Text, View } from 'react-native';
import { useClipboard } from 'react-native-use';

const Demo = () => {
  const [text, { setText, clear }] = useClipboard();

  return (
    <View>
      <Text>Clipboard: {text || '(empty)'}</Text>
      <Button
        title="Copy 'Hello World'"
        onPress={() => setText('Hello World!')}
      />
      <Button title="Clear" onPress={clear} />
    </View>
  );
};
```

## Reference

```ts
const [text, { setText, clear }] = useClipboard();

// text            — current clipboard string
// setText(value)  — writes value to clipboard and updates state
// clear()         — clears clipboard and resets state to ''
```
