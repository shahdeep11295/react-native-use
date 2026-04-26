# `useColorScheme`

React Native hook that tracks the system color scheme (light/dark mode). Re-renders automatically when the user changes their system theme.

## Usage

```jsx
import { Text, View } from 'react-native';
import { useColorScheme } from 'rn-hooksy';

const Demo = () => {
  const colorScheme = useColorScheme();

  return (
    <View style={{ backgroundColor: colorScheme === 'dark' ? '#000' : '#fff' }}>
      <Text>Current scheme: {colorScheme}</Text>
    </View>
  );
};
```

## Reference

```ts
const colorScheme = useColorScheme();
// Returns: 'light' | 'dark' | null
```
