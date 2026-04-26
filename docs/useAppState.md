# `useAppState`

React Native hook that tracks the current app state (`active`, `background`, or `inactive`).

## Usage

```jsx
import { Text } from 'react-native';
import { useAppState } from 'react-native-use';

const Demo = () => {
  const appState = useAppState();

  return <Text>App state: {appState}</Text>;
};
```

## Reference

```ts
const appState = useAppState();
// Returns: 'active' | 'background' | 'inactive' | null | 'unknown' | 'extension'
```
