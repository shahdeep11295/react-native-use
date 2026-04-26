# `useInteractionManager`

React Native hook that waits for all interactions and animations to complete before setting a `complete` flag. Useful for deferring expensive work until after the UI settles.

## Usage

```jsx
import { Text } from 'react-native';
import { useInteractionManager } from 'react-native-use';

const Demo = () => {
  const interactionsComplete = useInteractionManager();

  return (
    <Text>
      {interactionsComplete
        ? 'Interactions complete'
        : 'Waiting for interactions...'}
    </Text>
  );
};
```

## Reference

```ts
const interactionsComplete = useInteractionManager();
// Returns: boolean
```
