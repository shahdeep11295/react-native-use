# `useEventListener`

React Native hook that attaches an event listener to a React Native event emitter and automatically removes it on unmount.

## Usage

```jsx
import React from 'react';
import { AppState, Text } from 'react-native';
import { useEventListener } from 'react-native-use';

const Demo = () => {
  const [appState, setAppState] = React.useState(AppState.currentState);

  useEventListener(AppState, 'change', (state) => {
    setAppState(state);
  });

  return <Text>App state: {appState}</Text>;
};
```

## Reference

```ts
useEventListener(emitter, event: string, handler: (...args: any[]) => void): void;
```
